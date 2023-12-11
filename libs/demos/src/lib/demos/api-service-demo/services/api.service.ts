import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Pagination {
  limit: number;

  page: number;

  order: 'ASC' | 'DESC';

  sort: string;
}

export interface RequestOptions {
  /**
   * The search query to filter the results
   */
  searchQuery?: string;

  /**
   * The pagination options
   */
  pagination?: Partial<Pagination>;

  /**
   * The URL to make the request and this  replaces the original one
   */
  url?: string;

  /**
   * The type of the response that we will get
   */
  observe?: 'body' | 'events' | 'response';
}

export interface ListResponse<T> {
  /**
   * The total number of elements
   */
  total: number;

  /**
   * The list of elements
   */
  data: T[];

  /**
   * If there are more elements to load
   */
  hasMore: boolean;

  /**
   * The pagination options used for this response
   */
  pagination: Pagination;
}

export abstract class ApiService<T> {
  private httpClient = inject(HttpClient);

  protected constructor(private entityName: string) {}

  public getList(
    requestOptions?: Partial<RequestOptions>,
  ): Observable<Partial<ListResponse<T>>> {
    return this.request<Array<T>>('GET', {
      ...requestOptions,
      observe: 'response',
    }).pipe(
      map((res) =>
        this.mapListResponse(
          res as unknown as HttpResponse<T>,
          requestOptions?.pagination,
        ),
      ),
    );
  }

  public get(
    id: number,
    requestOptions?: Partial<RequestOptions>,
  ): Observable<T> {
    return this.request('GET', requestOptions, undefined, id);
  }

  public create(
    body: Partial<T>,
    requestOptions?: Partial<RequestOptions>,
  ): Observable<T | null> {
    return this.request('POST', requestOptions, body);
  }

  public update(
    id: number,
    body: Partial<T>,
    requestOptions?: Partial<RequestOptions>,
  ): Observable<T> {
    return this.request('PATCH', requestOptions, body, id);
  }

  protected request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    options?: Partial<RequestOptions>,
    body?: any,
    id?: number,
  ): Observable<T> {
    console.log({ options, body });
    return this.httpClient.request(
      method,
      this.getUrl(id),
      this.getOptions(options, body),
    );
  }

  private getUrl(id?: number) {
    const idPath = !id ? '' : `/${id}`;
    return `http://localhost:3000/${this.entityName}${idPath}`;
  }

  private getOptions(options?: Partial<RequestOptions>, body?: any) {
    let params = {};
    if (options && options.pagination) {
      const { limit, page, sort, order } = options.pagination;
      const paginationParams = {
        _limit: limit?.toString(),
        _page: page?.toString(),
        _order: order,
        _sort: sort,
      };
      params = { ...paginationParams };
    }

    return {
      params,
      body,
      observe: options?.observe || 'body',
    };
  }

  private mapListResponse(
    response: HttpResponse<any>,
    pagination?: Partial<Pagination>,
  ): ListResponse<T> {
    if (!response.headers) {
      return {} as ListResponse<T>;
    }
    const total = Number(response.headers.get('X-Total-Count'));
    let hasMore = false;
    if (pagination) {
      const { limit, page } = pagination;
      if (limit && page) {
        hasMore = total > limit * (page + 1);
      }
    }
    return {
      data: response.body,
      total,
      hasMore,
      pagination,
    } as ListResponse<T>;
  }
}

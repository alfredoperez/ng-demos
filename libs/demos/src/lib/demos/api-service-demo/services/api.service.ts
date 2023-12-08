import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface RequestQuery {
  limit: number;

  page: number;

  order: 'ASC' | 'DESC';

  sort: string;
}

export abstract class ApiService<T> {
  private httpClient = inject(HttpClient);

  protected constructor(private entityName: string) {}

  public getAll(requestQuery?: Partial<RequestQuery>): Observable<T[]> {
    return this.request('GET', requestQuery);
  }

  public get(id: number): Observable<T> {
    return this.request('GET', undefined, undefined, id);
  }

  public create(body: Partial<T>): Observable<T> {
    return this.request('POST', undefined, body);
  }

  public update(id: number, body: Partial<T>): Observable<T> {
    return this.request('PATCH', undefined, body, id);
  }

  protected request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    paginationQuery?: Partial<RequestQuery>,
    body?: any,
    id?: number,
  ) {
    const url = this.getUrl(id);
    const options = this.getOptions(paginationQuery, body);

    return this.httpClient.request<T>(method, url, options);
  }

  private getUrl(id?: number) {
    const idPath = !id ? '' : `/${id}`;
    return `http://localhost:3000/${this.entityName}${idPath}`;
  }

  private getOptions(requestQuery?: Partial<RequestQuery>, body?: any) {
    let params = {};
    if (requestQuery) {
      const { limit, page, sort, order } = requestQuery;
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
    };
  }
}

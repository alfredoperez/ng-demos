import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

class PaginationQueryDto {
  limit!: number;

  page!: number;

  orderDirection!: 'ASC' | 'DESC';

  orderBy!: string;
}

export abstract class ApiService<T> {
  private httpClient = inject(HttpClient);

  protected constructor(private entityName: string) {}

  public getAll(paginationQueryDto?: PaginationQueryDto): Observable<T[]> {
    return this.request('GET', paginationQueryDto);
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
    paginationQuery?: PaginationQueryDto,
    body?: any,
    id?: number,
  ) {
    const url = this.getUrl(id);
    const options = this.getOptions(paginationQuery, body);

    return this.httpClient.request<T>(method, url, options);
  }

  private getUrl(id?: number) {
    const idPath = !id ? '' : `/${id}`;
    // TODO:  need to make this an environment variable
    return `http://localhost:7000/${this.entityName}${idPath}`;
  }

  private getOptions(paginationQuery?: PaginationQueryDto, body?: any) {
    let params = {};
    if (paginationQuery) {
      const paginationParams = {
        limit: paginationQuery.limit.toString(),
        page: paginationQuery.page.toString(),
        orderBy: paginationQuery.orderBy,
        orderDirection: paginationQuery.orderDirection,
      };
      params = { ...paginationParams };
    }

    return {
      params,
      body,
    };
  }
}

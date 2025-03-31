import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductResponse } from './infinite-scroll.interface';

@Injectable({
  providedIn: 'root',
})
export class InfiniteScrollService {
  private apiUrl = 'http://localhost:3002/products';

  constructor(private http: HttpClient) { }

  searchProducts(query: string, page: number, limit: number) {
    return this.http.get<IProductResponse>(`${this.apiUrl}?name=${query}&limit=${limit}&page=${page}`);
  }
}
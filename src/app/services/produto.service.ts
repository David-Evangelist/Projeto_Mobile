import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiUrl = 'https://fakestoreapi.com/products'; // URL da API Fake Store

  constructor(private http: HttpClient) {}

  // Método para buscar os produtos da API
  getProdutos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

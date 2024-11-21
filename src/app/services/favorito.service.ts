import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
  private FAVORITOS_KEY = 'favoritos';
  private favoritos: any[] = [];

  constructor() {
    try {
      const data = localStorage.getItem(this.FAVORITOS_KEY);
      this.favoritos = data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Erro ao carregar favoritos do Local Storage:', error);
      this.favoritos = [];
    }
  }

  // Adicionar produto aos favoritos
  addFavorito(produto: any): void {
    if (!produto || !produto.id) {
      console.error('Produto inválido fornecido:', produto);
      return;
    }

    if (!this.isFavorito(produto)) {
      this.favoritos.push(produto);
      this.atualizarLocalStorage();
    }
  }

  // Remover produto dos favoritos
  removeFavorito(produto: any): void {
    if (!produto || !produto.id) {
      console.error('Produto inválido fornecido:', produto);
      return;
    }

    this.favoritos = this.favoritos.filter((item) => item.id !== produto.id);
    this.atualizarLocalStorage();
  }

  // Verifica se o produto já está nos favoritos
  isFavorito(produto: any): boolean {
    return this.favoritos.some((item) => item.id === produto.id);
  }

  // Retorna todos os favoritos
  getFavoritos(): any[] {
    return this.favoritos;
  }

  // Método privado para atualizar o Local Storage
  private atualizarLocalStorage(): void {
    try {
      localStorage.setItem(this.FAVORITOS_KEY, JSON.stringify(this.favoritos));
    } catch (error) {
      console.error('Erro ao salvar favoritos no Local Storage:', error);
    }
  }
}
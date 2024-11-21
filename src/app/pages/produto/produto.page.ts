import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { FavoritoService } from '../../services/favorito.service'; 

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit() {
    this.produtoService.getProdutos().subscribe(
      (data) => {
        this.produtos = data; // Armazena os produtos retornados pela API
      },
      (error) => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  isFavorito(produto: any): boolean {
    return this.favoritoService.isFavorito(produto);
  }

  atualizarFavoritos(produto: any, isFavorito: boolean) {
    if (isFavorito) {
      this.favoritoService.addFavorito(produto);
    } else {
      this.favoritoService.removeFavorito(produto);
    }
  }
}

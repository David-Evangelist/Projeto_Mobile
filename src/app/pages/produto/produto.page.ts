import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { FavoritoService } from '../../services/favorito.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})

export class ProdutoPage implements OnInit {
  categorias: string[] = []; // Guardará as categorias
  selectedCategory: string | null = null; // Categoria selecionada
  produtos: any[] = []; // Produtos completos
  produtosFiltrados: any[] = []; // Produtos filtrados
  categoryNames: { [key: string]: string } = {
    electronics: 'Eletrônicos',
    jewelery: 'Joias',
    "men's clothing": 'Itens Masculinos',
    "women's clothing": 'Itens Femininos',
  };

 constructor(
   private produtoService: ProdutoService,
   private favoritoService: FavoritoService,
   private http: HttpClient
) {}

 ngOnInit() {
   this.carregarCategorias();
   this.carregarProdutos();
 }

 carregarCategorias() {
   this.http.get<string[]>('https://fakestoreapi.com/products/categories').subscribe(
     (categorias) => {
       this.categorias = categorias;
     },
     (error) => {
       console.error('Erro ao carregar categorias:', error);
     }
   );
 }

 carregarProdutos() {
   this.http.get<any[]>('https://fakestoreapi.com/products').subscribe(
    (produtos) => {
       this.produtos = produtos;
       this.produtosFiltrados = produtos; // Inicialmente exibe todos os produtos
    },
     (error) => {
       console.error('Erro ao carregar produtos:', error);
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

filtrarProdutos() {
   if (!this.selectedCategory) {
     this.produtosFiltrados = [...this.produtos]; // Mostra todos os produtos
   } else {
     this.produtosFiltrados = this.produtos.filter(
       produto => produto.category === this.selectedCategory
     );
   }
 }

 limparFiltro() {
   this.selectedCategory = null; // Limpa a categoria selecionada
   this.produtosFiltrados = [...this.produtos]; // Restaura a lista original de produtos
 }
}
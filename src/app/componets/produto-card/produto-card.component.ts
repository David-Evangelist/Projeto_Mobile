import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.scss'],
})
export class ProdutoCardComponent {
  @Input() produto: any;
  @Input() isFavorito: boolean = false;
  @Output() favoritoChange = new EventEmitter<boolean>();

  mostrarDescricao: boolean = false;

  toggleDescricao() {
    this.mostrarDescricao = !this.mostrarDescricao;
  }

  toggleFavorito() {
    this.isFavorito = !this.isFavorito;
    this.favoritoChange.emit(this.isFavorito);
  }
}

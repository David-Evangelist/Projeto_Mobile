import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutoPageRoutingModule } from './produto-routing.module';
import { ProdutoPage } from './produto.page';
import { SharedModule } from '../../shared/shared.module'; // Importa o SharedModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoPageRoutingModule,
    SharedModule // Inclui o SharedModule
  ],
  declarations: [
    ProdutoPage,
    ProdutoPage
  ]
})
export class ProdutoPageModule {}

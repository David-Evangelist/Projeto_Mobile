import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { FavoritosPage } from './favoritos.page';
import { ProdutoCardComponent } from '../../componets/produto-card/produto-card.component';
import { SharedModule } from '../../shared/shared.module'; // Importa o SharedModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule,
    SharedModule
    
  ],
  declarations: [
    FavoritosPage
  ]
})
export class FavoritosPageModule {}

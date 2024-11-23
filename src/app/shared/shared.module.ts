import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProdutoCardComponent } from '../componets/produto-card/produto-card.component';



@NgModule({
  declarations: [
    ProdutoCardComponent // Declara o componente
  ],
  imports: [
    CommonModule, // Diretivas comuns do Angular
    IonicModule   // Componentes do Ionic
  ],
  exports: [
    ProdutoCardComponent // Torna o componente reutilizável em outros módulos
  ]
})
export class SharedModule {}

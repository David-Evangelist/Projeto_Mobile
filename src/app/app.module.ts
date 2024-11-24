import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoPage } from './pages/produto/produto.page';
import { ProdutoService } from './services/produto.service'; 
import { FavoritoService } from './services/favorito.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProdutoService, FavoritoService],
  bootstrap: [AppComponent],
})

export class AppModule {} 
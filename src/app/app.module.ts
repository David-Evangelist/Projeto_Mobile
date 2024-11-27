import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ProdutoService } from './services/produto.service'; 
import { FavoritoService } from './services/favorito.service';

import { SideMenuComponent } from './components/side-menu/side-menu.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, SideMenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ProdutoService, FavoritoService],
  bootstrap: [AppComponent],
})

export class AppModule {} 
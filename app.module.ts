import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreCadastroComponent } from './pre-cadastro/pre-cadastro.component';
import { CadastroSolicitadoComponent } from './cadastro-solicitado/cadastro-solicitado.component';
import { PreMobileComponent } from './pre-mobile/pre-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PreCadastroComponent,
    CadastroSolicitadoComponent,
    PreMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

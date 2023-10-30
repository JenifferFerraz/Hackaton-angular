import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/home/home.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from "@angular/material/list"
import {MatIconModule} from '@angular/material/icon';
import { CadastroVisitanteComponent } from './Pages/cadastro-visitante/cadastro-visitante.component';
import {MatTreeModule} from '@angular/material/tree';
import { CadastroEfetivoComponent } from './Pages/cadastro-efetivo/cadastro-efetivo.component';
import { TelaCadastroComponent } from './Components/tela-cadastro/tela-cadastro.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,    
    SideBarComponent,
    CadastroVisitanteComponent,
    CadastroEfetivoComponent,
    TelaCadastroComponent

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,MatListModule, MatTreeModule,MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




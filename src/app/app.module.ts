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
import {MatExpansionModule} from '@angular/material/expansion';
import { RegistroComponent } from './Pages/registro/registro.component';
import { TabelaComponent } from './Components/tabela/tabela.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './Pages/login/login.component';
import { CadastroSolicitadoComponent } from './Pages/cadastro-solicitado/cadastro-solicitado.component';
import { PreCadastroComponent } from './Pages/pre-cadastro/pre-cadastro.component';
import { TabelaPreCadastroComponent } from './Components/tabela-pre-cadastro/tabela-pre-cadastro.component';



@NgModule({
  declarations: [HomeComponent,
    AppComponent,    
    SideBarComponent,
    CadastroVisitanteComponent,
    CadastroEfetivoComponent,
    TelaCadastroComponent,
    RegistroComponent,
    TabelaComponent,
    LoginComponent,
    CadastroSolicitadoComponent,
    PreCadastroComponent,
    TabelaPreCadastroComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule,MatListModule, MatTreeModule,MatDialogModule,MatFormFieldModule, MatInputModule, MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




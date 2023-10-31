import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {TelaCadastroComponent } from 'src/app/Components/tela-cadastro/tela-cadastro.component';
import { TabelaComponent } from 'src/app/Components/tabela/tabela.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  

})
export class HomeComponent {
  title= 'angular-dialog';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(TelaCadastroComponent,{
      
    })
  }

}

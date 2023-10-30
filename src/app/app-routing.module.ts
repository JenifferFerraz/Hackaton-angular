import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroVisitanteComponent } from './Pages/cadastro-visitante/cadastro-visitante.component';
import { CadastroEfetivoComponent } from './Pages/cadastro-efetivo/cadastro-efetivo.component';

const routes: Routes = [
 {path: '', component:HomeComponent},
 {path: 'cadastro-efetivo', component:CadastroEfetivoComponent}, 
 {path: 'cadastro-visitante', component:CadastroVisitanteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

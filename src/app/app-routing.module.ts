import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroVisitanteComponent } from './Pages/cadastro-visitante/cadastro-visitante.component';
import { CadastroEfetivoComponent } from './Pages/cadastro-efetivo/cadastro-efetivo.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { CadastroSolicitadoComponent } from './Pages/cadastro-solicitado/cadastro-solicitado.component';




const routes: Routes = [
  {path: '', component:HomeComponent},
 {path: 'cadastro-efetivo', component:CadastroEfetivoComponent}, 
 {path: 'cadastro-visitante', component:CadastroVisitanteComponent},
 {path: 'registro', component:RegistroComponent},
 {path: 'cadastro-solicitado', component:CadastroSolicitadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



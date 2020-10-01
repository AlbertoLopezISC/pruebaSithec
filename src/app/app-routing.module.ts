import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'perfil/:id', component: PerfilComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AuthGuardService } from './auth-guard.service';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuardService]},
  {path: 'iniciarSesion', component: IniciarSesionComponent},
  {path: 'perfil/:id', component: PerfilComponent, canActivate: [AuthGuardService]},
  {path: '**', pathMatch: 'full', redirectTo: 'iniciarSesion'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

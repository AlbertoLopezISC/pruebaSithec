import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PostComponent } from './components/post/post.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { PerfilComponent } from './components/perfil/perfil.component';

import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { PostService } from './services/post.service';

import { UsuarioService } from './services/usuario.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PostComponent,
    ComentarioComponent,
    PerfilComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    UsuarioService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

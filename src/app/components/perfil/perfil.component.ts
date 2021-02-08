import { PostService } from './../../services/post.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  datos: any;
  posts: any[] = [];
  flagLoadingDatos: boolean = false;
  flagLoadingPosts: boolean = false;
  // array de banderas para mostrar u ocultar los comentarios de cada post.
  flagsComentarios: boolean[] = [];
  // variable en la que se guardaran los datos de los comentarios.
  comentarios: any[] = [];
  // bandera utilizada para saber si el usuario existe o no.
  flagExisteUsuario: boolean = true;

  constructor(private router: ActivatedRoute, private usuarioService: UsuarioService, private postService: PostService) {
    // con router.params podemos obtener los datos enviados por la url
    this.router.params.subscribe((params) => {
      this.getDatosUsuario(params.id);
      this.comentarios = [];
      this.flagsComentarios = [];
      this.flagExisteUsuario = true;

    });
  }

  ngOnInit(): void {
  }

  getDatosUsuario(id: string){
    this.usuarioService.getUsuario(id).subscribe((data: any) => {
      console.log(data)
      this.flagLoadingDatos = true;
      this.datos = data;
      this.flagExisteUsuario = true;
      
    }, (error) => {
      console.log("no existe usuario")
        this.flagExisteUsuario = false;
    });
    this.usuarioService.getPostsPorIdUsuario(id).subscribe((data: any) => {
      this.flagLoadingPosts = true;
      if (data.length !== 0 ){
        this.posts = data;
        this.flagExisteUsuario = true;
      } else {
        this.flagExisteUsuario = false;
      }
    });
  }

  getComentarios(post, posicion){
    if (this.flagsComentarios[posicion]){
      this.flagsComentarios[posicion] = false;
    } else {
      this.flagsComentarios[posicion] = true;
    }
    if (this.comentarios[posicion] == null){
      this.postService.getComentariosPorPostId(post.id).subscribe((data: any) => {
        if (data.length === 0){
          // para no complicarnos en hacer otra condicion en html simplemente seguimos la estructura de la 
          // respuesta y le asignamos el valor que queramos cuando no haya ningun comentario
          this.comentarios[posicion] = [];
          this.comentarios[posicion][0] = [];
          this.comentarios[posicion][0].body = 'No se encontraron comentarios :(';
        } else {
          this.comentarios[posicion] = data;
        }
      });
    }
  }
}

import { PostService } from './../../services/post.service';
import { UsuarioService } from './../../services/usuario.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() items: any[] = [];
  usuarios: any[] = [];
  comentarios: any[] = [];
  flagLoading: boolean = false;
  flagComentarios: boolean[] = [];

  constructor(private usuarioService: UsuarioService, private postService: PostService) {
    this.usuarioService.getUsuarios().subscribe((data: any) => {
      this.usuarios = data;
      this.flagLoading = true;
    });
  }

  ngOnInit(): void {
  }

  getComentarios(post: any, posicion: any){
    if (this.flagComentarios[posicion]){
      this.flagComentarios[posicion] = false;
    } else {
      this.flagComentarios[posicion] = true;
    }
    // pregunta para saber si es la primera vez que pide los datos, si esta en null es la primera.
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

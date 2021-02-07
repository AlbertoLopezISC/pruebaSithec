import { users, passwords } from './../iniciar-sesion/iniciar-sesion.component';
import { UsuarioService } from './../../services/usuario.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  posts: any[] = [];
  usuarios: any[] = [];
  users;
  passwords;
  
  constructor(private postService: PostService, private usuarioService: UsuarioService) {
    this.postService.getAllPosts().subscribe((data: any) => {
     this.posts = data;
    });
   }

  ngOnInit(): void {
  }

}

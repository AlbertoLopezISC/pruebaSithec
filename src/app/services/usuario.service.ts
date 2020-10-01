import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://jsonplaceholder.typicode.com${query}`;
    return this.http.get(url);
  }

  getUsuario(id: string){
    return this.getQuery(`/users/${id}`).pipe(map((data) =>  data));
  }

  getUsuarios(){
    return this.getQuery('/users').pipe(map((data) => data));
  }

  getPostsPorIdUsuario(id){
    return this.getQuery(`/users/${id}/posts`).pipe(map((data) => data));
  }
}

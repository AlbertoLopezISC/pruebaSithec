import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private api = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `${this.api}${query}`;
    return this.http.get(url);
  }

  getAllPosts(){
    return this.getQuery('/posts').pipe(map((data) => data));
  }

  getComentariosPorPostId(id: string){
    return this.getQuery(`/posts/${id}/comments`).pipe(map((data) => data));
  }
}

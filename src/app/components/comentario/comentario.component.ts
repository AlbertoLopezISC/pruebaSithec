import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  // paso de parametros de un componente padre a un componente hijo
  @Input() comentarios: any [] = [];


  constructor() { }

  ngOnInit(): void {
  }

}

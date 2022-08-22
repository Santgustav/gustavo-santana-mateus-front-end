import { Component, OnInit } from '@angular/core';

declare function abreModal(id: string): any;

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.scss']
})
export class EditarLivroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

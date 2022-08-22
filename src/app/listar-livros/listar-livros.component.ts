import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LivroService } from '../services/livro/livro.service';

declare function abreModal(id: string): any;

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent implements OnInit {

  constructor(
    private TitleService: Title,
    private formBuilder: UntypedFormBuilder,
    private livroService: LivroService
  )
  {this.TitleService.setTitle('Lista de Livros') }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AutorService } from '../services/autor/autor.service';

declare function abreModal(id: string): any;

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss']
})
export class ListarAutoresComponent implements OnInit {

  userUsuario!: UntypedFormBuilder;

  constructor(
    private TitleService: Title,
    private formBuilder: UntypedFormBuilder,
    private autorService: AutorService
  )
  {this.TitleService.setTitle('Lista de Autores') }

  ngOnInit(): void {
    // this.listaTodos();
    // this.userUsuario = this.formBuilder.group({
    //   usuario: ['', []],
    // });
  }

  listaTodos(){
    this.autorService.listarAutores()
  }

}

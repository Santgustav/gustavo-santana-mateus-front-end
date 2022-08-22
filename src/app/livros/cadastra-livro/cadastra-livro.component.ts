import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroService } from 'src/app/services/livro/livro.service';

declare function abreModal(id:string):any;

@Component({
  selector: 'app-cadastra-livro',
  templateUrl: './cadastra-livro.component.html',
  styleUrls: ['./cadastra-livro.component.scss']
})
export class CadastraLivroComponent implements OnInit {

  constructor(
    private router: Router,
    private livroService: LivroService) { }

  ngOnInit(): void {
  }

  cadastrar(){}

  cancelar(){
    this.router.navigate(['listar-livros']);
  }

}

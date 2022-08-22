import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/interfaces/autor';
import { AutorService } from 'src/app/services/autor/autor.service';

declare function abreModal(id: string): any;

@Component({
  selector: 'app-cadastrar-autor',
  templateUrl: './cadastrar-autor.component.html',
  styleUrls: ['./cadastrar-autor.component.scss']
})
export class CadastrarAutorComponent implements OnInit {

 autor!: Autor;

  constructor(
    private titleService: Title,
    private router: Router,
    private autorService: AutorService,
    )
    {this.titleService.setTitle('Cadastro')}

  ngOnInit(): void {
    this.autorService.cadastraAutor(this.autor).subscribe({
      next: sucesso => {
        console.log('cadastrado');
      },
      error: erro => {
        console.log('não cadastro')
      }
    })
  }

  cadastrar(){}

  cancelar(){
    this.router.navigate(['listar-autores']);
  }

}

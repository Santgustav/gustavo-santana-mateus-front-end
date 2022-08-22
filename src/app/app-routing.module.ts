import { CadastrarAutorComponent } from './autor/cadastrar-autor/cadastrar-autor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarAutorComponent } from './autor/editar-autor/editar-autor.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { EditarLivroComponent } from './livros/editar-livro/editar-livro.component';
import { CadastraLivroComponent } from './livros/cadastra-livro/cadastra-livro.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'cadastrar-autor',
    component: CadastrarAutorComponent
  },

  {
    path: 'cadastrar-livro',
    component: CadastraLivroComponent
  },

  {
    path: 'listar-autores',
    component: ListarAutoresComponent,
  },

  {
    path: 'listar-livros',
    component: ListarLivrosComponent,
  },

  {
    path: 'editar-autor',
    component: EditarAutorComponent,
  },

  {
    path: 'editar-livro',
    component: EditarLivroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

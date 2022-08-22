import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { CadastrarAutorComponent } from './autor/cadastrar-autor/cadastrar-autor.component';
import { EditarAutorComponent } from './autor/editar-autor/editar-autor.component';
import { CadastraLivroComponent } from './livros/cadastra-livro/cadastra-livro.component';
import { EditarLivroComponent } from './livros/editar-livro/editar-livro.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLivrosComponent,
    ListarAutoresComponent,
    CadastrarAutorComponent,
    EditarAutorComponent,
    CadastraLivroComponent,
    EditarLivroComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

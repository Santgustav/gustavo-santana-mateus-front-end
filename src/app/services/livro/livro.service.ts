import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from 'src/app/interfaces/livro';
import { environment } from 'src/environments/environment';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpClient: HttpClient) { }

  cadastraLivro(livro: Livro){
    return this.httpClient.post(`${APIURL}/livros`, livro);
  }

  editaLivro(body: Object, id: number){
    return this.httpClient.put(`${APIURL}/editar-livro/${id}`, body);
  }

  listarLivros(id: number){
    return this.httpClient.get(`${APIURL}/listar-livros/${id}`);
  }

  deletaLivro(id: number){
    return this.httpClient.delete(`${APIURL}/livros/${id}`);
  }
}

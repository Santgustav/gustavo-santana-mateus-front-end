import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Autor } from 'src/app/interfaces/autor';
import { environment } from 'src/environments/environment';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

    cadastraAutor(autor: Autor): Observable<Autor>{
      return this.httpClient.post<Autor>(`${APIURL}/autores`, autor);
    }

    editaAutor(){}

    listarAutores(){
      return this.httpClient.get(`${APIURL}/listar-autores`)
    }
}

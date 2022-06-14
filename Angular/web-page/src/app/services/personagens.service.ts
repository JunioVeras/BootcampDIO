import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonagensService{

  urlPadrao = 'https://rickandmortyapi.com/api/character/';
  page = '?page=';

  constructor(private httpClient: HttpClient) { }

  getList(page: number): Observable<Personagem>
  {
    if(page > 0 && page < 43)
    {
      return this.httpClient.get<Personagem>(this.urlPadrao + this.page + page.toString());
    }
    else if(page <= 0)
    {
      return this.httpClient.get<Personagem>(this.urlPadrao + this.page + '1');
    }
    else
    {
      return this.httpClient.get<Personagem>(this.urlPadrao + this.page + '42');
    }
  }
}

interface Personagem
{
  info: {},
  results: []
}
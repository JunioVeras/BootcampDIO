import { Component, OnInit } from '@angular/core';
import { PersonagensService } from '../services/personagens.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  constructor(private personagens: PersonagensService) { }

  page = 1;

  ngOnInit(): void {
    this.getList();
  }

  lista: Array<any> = []

  getList()
  {
    this.personagens.getList(this.page).subscribe( (valor) =>
      {
        this.lista = valor.results;
      }
    )
  }

  nextPage()
  {
    if(this.page === 42)
    {
      this.page = 1;
    }
    else 
    {
      this.page++;
    }
    this.getList();
  }

  previousPage()
  {
    if(this.page === 1)
    {
      this.page = 42;
    }
    else 
    {
      this.page--;
    }
    this.getList();
  }
}

interface Personagem
{
  info: {},
  results: []
}
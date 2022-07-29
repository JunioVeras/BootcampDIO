import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Volumes } from '../shared/interfaces/volumes';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  constructor(private httpClient: HttpClient) { }

  getBooks(search: string = 'intitle'): Observable<Volumes>
  {
    return this.httpClient.get<Volumes>("https://www.googleapis.com/books/v1/volumes?q=" + search);
  }

  getBook(id: string): Observable<Volumes>
  {
    return this.httpClient.get<Volumes>("https://www.googleapis.com/books/v1/volumes?q=" + id);
  }
}

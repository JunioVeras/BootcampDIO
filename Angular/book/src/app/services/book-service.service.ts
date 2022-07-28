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

  book: any = {};

  getBooks(search: string = 'intitle'): Observable<Volumes>
  {
    return this.httpClient.get<Volumes>("https://www.googleapis.com/books/v1/volumes?q=" + search)
  }

  getBook(): Observable<any>
  {
    return this.book;
  }

  fillBook(book: any): void
  {
    this.book = book;
  }
}

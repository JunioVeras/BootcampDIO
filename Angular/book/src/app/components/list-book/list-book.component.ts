import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  booksList: Array<any> = [];
  search: string = '';

  getBooks()
  {
    if(this.search === '')
    {
      this.bookService.getBooks().subscribe( 
        response => { this.booksList = response.items; console.log(response.items)}
        )
    }
    else
    {
      this.bookService.getBooks(this.search).subscribe( 
        response => { this.booksList = response.items; console.log(response.items)}
        )
    }
  }

  doSearch()
  {
    this.getBooks();
  }

  returnBook(book: any)
  {
    this.bookService.fillBook(book);
  }

}

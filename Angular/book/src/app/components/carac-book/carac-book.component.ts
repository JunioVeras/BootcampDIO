import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-carac-book',
  templateUrl: './carac-book.component.html',
  styleUrls: ['./carac-book.component.css']
})
export class CaracBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBook();
  }

  book: any = {};

  getBook()
  {
      this.book = this.bookService.getBook()
  }
}

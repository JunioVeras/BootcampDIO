import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/services/book-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-carac-book',
  templateUrl: './carac-book.component.html',
  styleUrls: ['./carac-book.component.css']
})
export class CaracBookComponent implements OnInit {

  routeId: string = ''

  constructor(private bookService: BookService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.routeId = params['id']);
  }

  ngOnInit(): void
  {
    this.getBook();
  }

  book: any = {};

  getBook()
  {
    this.bookService.getBook(this.routeId).subscribe( 
      response => { this.book = response.items[0]; console.log(response.items)}
      )
  }
}

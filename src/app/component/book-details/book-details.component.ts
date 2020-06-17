import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book1 : any;
  book2 : any;
  constructor(private obj: BookService) { }

  ngOnInit() {
    this.obj.getBooks().subscribe(abc=>{
      this.book1 = abc;
     //this.book2 = this.book1.data;
      console.log(this.book1)
    })
  }

}
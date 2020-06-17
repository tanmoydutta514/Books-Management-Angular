import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  stores : any;
  str:any;
  constructor(private obj: BookService) { }

  ngOnInit() {
    
    this.obj.getBooks().subscribe(para=>{
      this.stores = para;
      //this.str = this.stores.data;
      //console.log(this.str)
    })
  }

}

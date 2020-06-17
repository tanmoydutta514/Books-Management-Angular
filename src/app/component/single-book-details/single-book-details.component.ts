import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-book-details',
  templateUrl: './single-book-details.component.html',
  styleUrls: ['./single-book-details.component.css']
})
export class SingleBookDetailsComponent implements OnInit {

  book1 : any;
  
  constructor(private obj:BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.id=this.route.snapshot.params['ID'];
    //console.log(this.id)
    this.route.paramMap.subscribe(params=>{
      this.obj.getBookId(params.get('ID')).subscribe(data=>{
        this.book1 = data;
       
      })
    })  
  }
}

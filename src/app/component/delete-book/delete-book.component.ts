import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
//import { Book } from 'src/app/class/book';
import { ActivatedRoute } from '@angular/router';
import { Bookes } from 'src/app/class/bookes';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
//book1:Book[];
rslt: any;
id:any;

  constructor(private service:BookService, private route:ActivatedRoute) { }
 
  /* delete() {
  
    this.service.deleteBook(this.id).subscribe(
      params =>{
      this.rslt = params;
      console.log(this.rslt)
      alert("Id Deleted Successfully");
  
      })
    }  */
   ngOnInit() {
    this.service.getBooks().subscribe(para=>{
      this.rslt = para;
      //console.log(this.rslt);
    
      //this.id = this.route.snapshot.params['ID'];
      //this.delete();    
      //this.service.getBookId(this.id)
  }
    )
   
    }
}
   
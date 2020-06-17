import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-single-id',
  templateUrl: './delete-single-id.component.html',
  styleUrls: ['./delete-single-id.component.css']
})
export class DeleteSingleIdComponent implements OnInit {
book1 : any;
id:any;
result:any;
  constructor(private obj:BookService, private route:ActivatedRoute, private routes: Router) { }
  delete() {
  
    this.obj.deleteBook(this.id).subscribe(
      params =>{
      this.result = params;
       console.log(this.result)
      alert("Id Deleted Successfully");
      this.routes.navigate(['/bookdetails'])

  
      })
    } 
  ngOnInit() {
    //this.id = this.route.snapshot.params['ID'];
    //console.log(this.id)
    this.route.paramMap.subscribe(params=>{
      this.obj.deleteBook(params.get('ID')).subscribe(data=>{
        this.book1 = data;
        this.id = this.route.snapshot.params['ID'];
     //   console.log(this.id)
      //  console.log(this.book1)
       // this.delete();
      })
    })
      }

}

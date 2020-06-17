import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  userForm : FormGroup;
  book1 : any;                    
  
  ngOnInit() {
    this.userForm = this.fb.group({
      
      ID: [null,Validators.required],
      Title: [null, Validators.required],
      Description:[null,Validators.required],
      PageCount:[null,Validators.required],
      Excerpt: [null,Validators.required],
      PublishDate: [null,Validators.required]
    
      
       
      });
  }
  constructor(private fb: FormBuilder, private service:BookService, private routes:Router) { }
  
  createBook():void{
    let obj = this.userForm.getRawValue();
    this.service.createBook(obj).subscribe(data=>{
      this.book1 = data;
      console.log (this.book1);
      alert("Created Successfully")
      this.routes.navigate(['/bookdetails'])
    })
  }
}

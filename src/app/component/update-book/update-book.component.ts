import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookes } from 'src/app/class/bookes';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  constructor( private service: BookService, private routes: Router ) { }
  user1: any;
  ID: number;
  Title : string;
  Description: string;
  PageCount: number;
  Excerpt:string;
  PublishDate:Date;
  updateBook(){
  let bookes:Bookes = {
    ID: this.ID,
    Title: this.Title,
    Description: this.Description,
    PageCount: this.PageCount,
    Excerpt: this.Excerpt,
    PublishDate: this.PublishDate

  } ;
 
  this.service.updateBook(bookes, this.ID)
  .subscribe(
    data =>{
      this.user1 = data;
      console.log(this.user1)
      alert ("Updated Successfully"),
      this.routes.navigate(['/bookdetails'])
      error => alert(error)
    })
  }
  
  ngOnInit() {
    
    }
    
  }  
    

  
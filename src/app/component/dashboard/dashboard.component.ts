import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private routes: Router) { }
  
  getAllBooks(){
    return this.routes.navigate(['/bookdetails']);
  }
  createAllBook(){
    return this.routes.navigate(['/createbook']);
  }
  getBookById(){
    return this.routes.navigate(['/singlebook']);
  }
  updateAllBook(){
    return this.routes.navigate(['/updatebook']);
  }
  deleteAllBook(){
    return this.routes.navigate(['/deletebook/1']);
  }

ngOnInit() {
  
  }

}

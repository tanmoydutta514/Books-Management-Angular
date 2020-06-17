import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['../../assets/images/Image1.jpg', '../../assets/images/Image2.jpg', '../../assets/images/Image4.jpg', '../../assets/images/Image5.jpg'];
  constructor() { }

  ngOnInit() {
    
  }

}

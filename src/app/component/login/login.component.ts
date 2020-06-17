import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  createAcc(){
  return this.routes.navigate(['/register']);   
  }
  usersForm:FormGroup;
  users:any;
  ngOnInit() {
    this.usersForm = this.fb.group({
      
      email:[''],
      password:['']
       
      });
    }
    constructor(private fb:FormBuilder,private service:UserService, private routes:Router, private serv:AuthService){}
    registr():void{
      let obj1=this.usersForm.getRawValue();
      
this.service.login(obj1).subscribe(
  data=>{
  
  this.users=data;
   console.log(this.users);
   this.serv.setTokenwithInitialData(this.users.data.token, this.users.data.fname, this.users.data.lname)
   this.routes.navigate(['/dashboard']);   
  } )
    
}
}


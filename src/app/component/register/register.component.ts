import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup;
  user:any;
  
  
ngOnInit() {
    this.userForm = this.fb.group({
      
      fname: [null, Validators.required],
      lname:[null,Validators.required],
      email:[null,Validators.required],
      password:[null,Validators.required]
       
      });
    }
    constructor(private fb:FormBuilder,private service:UserService, private routes: Router){}
    register():void{
      let obj=this.userForm.getRawValue();
      
this.service.creatUser(obj).subscribe(
  data=>{
  this.user=data;
   console.log(this.user)
   }
    
);
this.routes.navigate(['/login']);
    }
  }



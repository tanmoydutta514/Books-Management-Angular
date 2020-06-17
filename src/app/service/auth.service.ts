import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  setTokenwithInitialData(token:string, fname:string, lname:string){
    window.sessionStorage.setItem('token', token);
    window.sessionStorage.setItem('fname', fname);
    window.sessionStorage.setItem('lname', lname);
  }
  
 getToken(){
   sessionStorage.getItem('token');
 }
 logoutUser(){
   sessionStorage.removeItem('token');
   this.router.navigate(['/home']);
}
 loggedIn(){
   return sessionStorage.getItem('token')
 }
  constructor(private router: Router) { }
}

/*
  getUsername(){
    sessionStorage.getItem('email');
  }
  destroyToken(){
    sessionStorage.removeItem('email');
    // this.router.navigate(['/home']);
  }
  loggedIn(){
    return sessionStorage.getItem('email')
  }
  */
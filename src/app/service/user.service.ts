import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Users } from '../class/users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private routeUrl = "https://nodeprojectapi.herokuapp.com/register";
  private ApiUrl = "https://nodeprojectapi.herokuapp.com/login";
  

  constructor(private http: HttpClient) { }
  creatUser(user:User):Observable<User>{
    return this.http.post<User>(this.routeUrl, user);
    }
    login(users: Users):Observable<Users>{
    return this.http.post<Users>(this.ApiUrl, users)
    }
}

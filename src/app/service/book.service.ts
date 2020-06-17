import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../class/book';
import { Observable } from 'rxjs';
import { Books } from '../class/books';
import { Bookes } from '../class/bookes';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookUrl = "http://fakerestapi.azurewebsites.net/api/Books";
  private delUrl = "http://fakerestapi.azurewebsites.net/api/Books";
  
  constructor(private http:HttpClient) { }
  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
  createBook(book:Books):Observable<Books>{
    return this.http.post<Books>(this.bookUrl, book);
  }
  getBookId(id){
    return this.http.get(`${this.bookUrl}/${id}`);
  }
  updateBook(bookes:Bookes, id) {
     return this.http.put(`${this.bookUrl}/${id}`, bookes);  
  }
  deleteBook(id){
   // return this.http.delete(this.delUrl + '/'+ id);
    return this.http.delete(`${this.bookUrl}/${id}`);
  }
}
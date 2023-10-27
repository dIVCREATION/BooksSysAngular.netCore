import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private  basePath = "https://localhost:7116/api/books";
  constructor(private http: HttpClient) {  }


  public getBooks(): Observable<any> {

   return this.http.get(this.basePath);
   
  }

  public addBook(book: any): Observable<any> {
    return this.http.post(this.basePath, book);
  }
}

import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../book.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  public books: any;
  
  constructor(private service : BookService){}

  ngOnInit(): void{
    this.getBooks();

  }
  public getBooks(): void
  {
     this.service.getBooks().subscribe(result =>
      {
      this.books = result;
     });
  }

  
}

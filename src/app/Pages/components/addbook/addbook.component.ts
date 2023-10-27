import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  public bookForm : any;

  constructor(private formBuilder: FormBuilder , private service: BookService){}

  ngOnInit(): void {
    this.init();
  }

  public addBooks(){
    this.service.addBook(this.bookForm.value).subscribe(result =>{
      alert(`New book added with id = ${result}`);
    });
  }

  private init():void{
    this.bookForm = this.formBuilder.group({
      title: [],
      description: []
    });
  }


}

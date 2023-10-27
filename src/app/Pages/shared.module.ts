import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule, HttpClientModule, MaterialModule
  ],
  exports: [MaterialModule, HttpClientModule]
})
export class SharedModule { }

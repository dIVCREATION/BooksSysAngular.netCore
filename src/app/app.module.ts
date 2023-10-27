import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllbooksComponent } from './Pages/components/allbooks/allbooks.component';
import { AddbookComponent } from './Pages/components/addbook/addbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookReactiveComponent } from './add-book-reactive/add-book-reactive.component';
import { FooterComponent } from './books/components/footer/footer.component';
import { ToolBarComponent } from './books/components/tool-bar/tool-bar.component';
import { AuthorsComponent } from './auth/components/authors/authors.component';
import { AuthorsAddressComponent } from './auth/components/authors-address/authors-address.component';
import { HeaderComponent } from './books/components/header/header.component';
import { PostCartComponent } from './books/components/post-cart/post-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AllbooksComponent,
    AddbookComponent,
    AddBookReactiveComponent,
    FooterComponent,
    ToolBarComponent,
    AuthorsComponent,
    AuthorsAddressComponent,
    HeaderComponent,
    PostCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

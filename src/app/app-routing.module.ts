import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookService } from './book.service';
import { AllbooksComponent } from './Pages/components/allbooks/allbooks.component';
import { AddbookComponent } from './Pages/components/addbook/addbook.component';
import { AddBookReactiveComponent } from './add-book-reactive/add-book-reactive.component';
import { FooterComponent } from './books/components/footer/footer.component';
import { ToolBarComponent } from './books/components/tool-bar/tool-bar.component';
import { HeaderComponent } from './books/components/header/header.component';
import { AppComponent } from './app.component';
import { PostCartComponent } from './books/components/post-cart/post-cart.component';

const routes: Routes = [
  { path : ' ', component: AppComponent},
  { path : 'header', component: HeaderComponent},
  { path : 'pcard', component: PostCartComponent},
  { path : 'books', component: AllbooksComponent},
  { path : 'new', component: AddbookComponent },
  { path : 'add-reactive', component: AddBookReactiveComponent},
  { path : 'toolbar', component: ToolBarComponent},
  
  { path : 'footer', component: FooterComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

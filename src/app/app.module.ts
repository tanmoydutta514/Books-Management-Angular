import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SingleBookDetailsComponent } from './component/single-book-details/single-book-details.component';
import { SingleBookComponent } from './component/single-book/single-book.component';
import { CreateBookComponent } from './component/create-book/create-book.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { DeleteSingleIdComponent } from './component/delete-single-id/delete-single-id.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleBookDetailsComponent,
    SingleBookComponent,
    CreateBookComponent,
    BookDetailsComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DeleteSingleIdComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

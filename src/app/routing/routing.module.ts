import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { BookDetailsComponent } from '../component/book-details/book-details.component';
import { CreateBookComponent } from '../component/create-book/create-book.component';
import { SingleBookComponent } from '../component/single-book/single-book.component';
import { SingleBookDetailsComponent } from '../component/single-book-details/single-book-details.component';
import { UpdateBookComponent } from '../component/update-book/update-book.component';
import { DeleteBookComponent } from '../component/delete-book/delete-book.component';
import { AboutComponent } from '../component/about/about.component';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { DeleteSingleIdComponent } from '../component/delete-single-id/delete-single-id.component';
const myArray: Routes = [
  { path: 'bookdetails',component: BookDetailsComponent },
  { path: 'createbook',component: CreateBookComponent },
  { path: 'updatebook', component:UpdateBookComponent},
  { path:'deletebook', component:DeleteBookComponent, children:[
    {path:':ID', component:DeleteSingleIdComponent}
  ]},
  { path:'about', component:AboutComponent},
  { path:'login', component:LoginComponent},
  { path:"dashboard", canActivate : [AuthGuard], component:DashboardComponent },
  { path:'register', component:RegisterComponent},
  { path:'singlebook',component:SingleBookComponent, children:[
    { path: ':ID', component: SingleBookDetailsComponent },
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component:HomeComponent  }
  
  ];
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(myArray)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

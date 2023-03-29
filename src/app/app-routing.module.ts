import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './addblog/addblog.component';
import { AuthGuard } from './auth.guard';
import { Blog1Component } from './blog1/blog1.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { TestComponent } from './test/test.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {
    path: 'blog', component: BlogsComponent, canActivate: [AuthGuard]},

  {
    path: 'blogdetail/:id', component: Blog1Component, canActivate: [AuthGuard]
    // children: [
    //   { path: 'standardbd/:id', component: Blog1Component }
    // ]
  },
  { path: 'add', component: AddblogComponent,  canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ReadmoreComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  { path: 'purchase', component:PurchaseComponent, canActivate: [AuthGuard]},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

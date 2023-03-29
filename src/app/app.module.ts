import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { TestModule } from './test/test.module';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddblogComponent } from './addblog/addblog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ReadmoreComponent } from './readmore/readmore.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Blog1Component } from './blog1/blog1.component';
import { LoaderInterceptor } from './loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseComponent } from './purchase/purchase.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BlogsComponent,
        FooterComponent,
        HighlightDirective,
        LoginComponent,
        HomeComponent,
        AddblogComponent,
        PagenotfoundComponent,
        ReadmoreComponent,
        ListComponent,
        Blog1Component,
        PurchaseComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
        CookieService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        DropDownListModule,
        AppRoutingModule,
        NgbModule,
        NgbAlertModule,
        HeaderCarouselComponent,
        TestModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }

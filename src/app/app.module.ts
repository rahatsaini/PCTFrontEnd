import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { LogoutComponent } from './auth/logout/logout.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/authService';
import { PersonService } from './services/person-service';
import { PersonExternalService } from './services/person-external-service';
import { AddheaderInterceptor } from './services/addheader.interceptor';
import { CookieService } from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { TopNavComponent } from './welcome/top-nav/top-nav.component'
import { SideNavComponent } from './welcome/side-nav/side-nav.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchTableComponent } from './search/search-table/search-table.component';

import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    SearchComponent,
    TopNavComponent,
    SideNavComponent,
    WelcomeComponent,
    SearchTableComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,ReactiveFormsModule,
    HttpClientModule,FlexLayoutModule,BrowserAnimationsModule, MatTableModule, MatPaginatorModule, MatSortModule

  ],
  providers: [CookieService, PersonExternalService,AuthService,PersonService,SearchTableComponent,SearchTableComponent,
                 {provide:HTTP_INTERCEPTORS,useClass:AddheaderInterceptor,multi:true}
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }

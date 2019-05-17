import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule}    from '@angular/forms'
//import { TestService } from './test.service';
import { ResumeComponent } from './resume/resume.component';
import { Q3Component } from './q3/q3.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Q1Component,
    Q2Component,
    Q3Component,
    NavComponent,
    ResumeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
  //  TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

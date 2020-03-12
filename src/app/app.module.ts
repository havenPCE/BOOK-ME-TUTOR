import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homepage/header/header.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './homepage/slider/slider.component';
import { Jumboltron1Component } from './homepage/jumboltron1/jumboltron1.component';
import { Section1Component } from './homepage/section1/section1.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

import { UserpageComponent } from './userpage/userpage.component';
import {  FormsModule,ReactiveFormsModule} from "@angular/forms";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
MatSelectModule,
MatRadioModule,MatCheckboxModule
} from '@angular/material';

import { ModalModule } from "ngx-bootstrap";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingCreated} from './UserPage/BookingService';
import { UserpageHeaderComponent } from './UserPage/userpage-header/userpage-header.component';
import { MyBookingsComponent } from './userpage/my-bookings/my-bookings.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    Jumboltron1Component,
    Section1Component,
    FooterComponent,
    HomepageComponent,

    UserpageComponent,
    UserpageHeaderComponent,
    MyBookingsComponent,
   
  
    
  
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,MatInputModule,
    MatInputModule,ReactiveFormsModule,MatSelectModule,MatRadioModule,MatCheckboxModule
  ],
  providers: [ BookingCreated],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

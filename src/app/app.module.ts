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
import { Userpage1Component } from './userpage/userpage1/userpage1.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    Jumboltron1Component,
    Section1Component,
    FooterComponent,
    HomepageComponent,
    Userpage1Component,
  
    
    
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

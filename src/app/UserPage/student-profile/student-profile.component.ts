import { Component, OnInit } from '@angular/core';
import { BookingService } from '../BookingService';
import { Router } from '@angular/router';
import { UserDetails } from '../classes/userDetails';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

 userdetails:UserDetails
 

  constructor(private bookingservice: BookingService,
              private router:Router) { }

  ngOnInit() {
    this.bookingservice.getUserDetails().subscribe
    (
      data=>
      {
        this.userdetails=data
       
        
      }
      
    )
  }

}

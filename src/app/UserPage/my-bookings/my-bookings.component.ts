import { Component, OnInit, Input } from '@angular/core';
import { BookingResponse } from 'src/app/Response/bookingResponse';
import { Router } from '@angular/router';
import { BookingService} from '../BookingService';
import { Cancel } from '../classes/cancel';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

id:number
  responsebooking:BookingResponse
 

  constructor(private bookingservice: BookingService,
              private router:Router) { }

  ngOnInit() {
    
    this.bookingservice.getBooking().subscribe
    (
      data=>
      {
        this.responsebooking=data
       
        
      }
      
    )
    
  }
  deleteBooking(){
    this.bookingservice.cancelBooking(this.responsebooking.id).subscribe(
      ()=>console.log("cancelled")
    )
  }

  update(){
    this.router.navigate(['/reschedule',this.responsebooking.id])
  }

  

}

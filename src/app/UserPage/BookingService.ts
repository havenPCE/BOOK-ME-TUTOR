import { Injectable } from '@angular/core';

import {Booking } from './Booking';

@Injectable({
        providedIn:'root'
})
export class BookingCreated {
private listBooking:Booking[]=[ ];

createBooking(booking:Booking){
this.listBooking.push(booking);
};
  

constructor( ){}
}
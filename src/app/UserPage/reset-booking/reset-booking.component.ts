import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BookingResponse } from 'src/app/Response/bookingResponse';

@Component({
  selector: 'app-reset-booking',
  templateUrl: './reset-booking.component.html',
  styleUrls: ['./reset-booking.component.css']
})
export class ResetBookingComponent implements OnInit {
reset:FormGroup

todaydate=new Date();
date1= this.todaydate.setDate(this.todaydate.getDate() + 1);
getdate1=this.todaydate.getDate();
firstdate=('0'+this.getdate1).slice(-2)
getmonth1=this.todaydate.getMonth()+1;
firstmonth=('0'+this.getmonth1).slice(-2)
 firstyear=this.todaydate.getFullYear();
 selectDate1:string=this.firstyear+'-'+this.firstmonth+'-'+this.firstdate;

 date2= this.todaydate.setDate(this.todaydate.getDate() + 1);
 getdate2=this.todaydate.getDate();
seconddate=('0'+this.getdate2).slice(-2)
getmonth2=this.todaydate.getMonth()+1;
secondmonth=('0'+this.getmonth2).slice(-2)
secondyear=this.todaydate.getFullYear();
selectDate2:string=this.secondyear+'-'+this.secondmonth+'-'+this.seconddate;

date3= this.todaydate.setDate(this.todaydate.getDate() + 1);
getdate3=this.todaydate.getDate()
thirddate=('0'+this.getdate2).slice(-2)
getmonth3=this.todaydate.getMonth()+1;
thirdmonth=('0'+this.getmonth3).slice(-2)
thirdyear=this.todaydate.getFullYear();
selectDate3:string=this.thirdyear+'-'+this.thirdmonth+'-'+this.thirddate;

@Input() responsebooking:BookingResponse

  constructor() { }

  ngOnInit() {
    this.reset = new FormGroup({
      'new_date': new FormControl(null, Validators.required),
      'comment':new FormControl(),
      'score':new FormControl(),
    
       });
  }

}

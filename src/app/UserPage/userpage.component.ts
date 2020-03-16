import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Booking } from './Booking';
import { BookingCreated } from './BookingService';

interface Board{
  value:String;
  display:String;
}
interface Class{
  value:number;
  display:number;
}
interface Location{
  display:String;
  value:String
}
interface Subject{
  value:String;
  display:String;
}
interface Topics{
  value:String;
  display:String;
}
interface Time{
  value:String;
  display:String;
}
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css'],

})

export class UserpageComponent implements OnInit {

  /*step1*/
board:Board[]=[
  {display:'CBSE',value:'CBSE'},
  {display:'ICSE',value:'ICSE'}]
  
class:Class[]=[
  {display:9,value:9}, {value:10,display:10},  {value:11,display:11},  {value:12,display:12} ];

location:Location[]=[
 {display:'sector-3',value:'sector-3'}, {display:'sector-1',value:'sector-1'}, 
 {display:'sector-4',value:'sector-4'}, {display:'sector-5',value:'sector-5'}
];
subject:Subject[]=[
{display:'physics',value:'physics'},{ display:'chemistry',value:'chemistry'},
 {display:'biology',value:'biology'}, {display:'Mathematics',value:'Mathematics'},
  {display:'computerSc',value:'computerSc'}
];
/*step2*/
topics:Topics[]=[
  {display:'abc',value:'abc'},
  {display:'xyzs',value:'xyz'},
  {display:'light',value:'light'},
  {display:'real no',value:'real no'}
];
/*step3*/
  todaydate=new Date();
  firstdate=this.todaydate.setDate(this.todaydate.getDate() + 1);
  seconddate=this.todaydate.setDate(this.todaydate.getDate() + 1);
  thirddate=this.todaydate.setDate(this.todaydate.getDate()+ 1);
/*step*/
  time:Time[]=[
    {display:'9:00A.M-10:00A.M',value:'9:00A.M-10:00A.M'},{display:'10:00A.M-11:00A.M',value:'10:00A.M-11:00A.M' },
   {display:'11:00A.M-12:00P.M',value:'11:00A.M-12:00P.M' },{display:'12:00P.M-1:00P.M',value:'12:00P.M-1:00P.M' },
   {display:'1:00P.M-2:00P.M',value:'1:00P.M-2:00P.M' },
   {display:'2:00P.M-3:00P.M',value:'2:00P.M-3:00P.M' },{display:'3:00P.M-4:00P.M',value:'3:00P.M-4:00P.M' },
   {display:'4:00P.M-5:00P.M',value:'4:00P.M-5:00P.M' },{display:'5:00P.M-6:00P.M',value:'5:00P.M-6:00P.M' },
   {display:'6:00P.M-7:00P.M',value:'6:00P.M-7:00P.M' },
   {display:'7:00P.M-8:00P.M',value:'7:00P.M-8:00P.M' },{display:'8:00P.M-9:00P.M',value:'8:00P.M-9:00P.M' },
  ];
  

constructor(private bookingcreated: BookingCreated) {}
 formSubmitted: boolean=false;
 mySelections: string[];
 topicsSelected:any=[];


 Step1: FormGroup;
 Step2:FormGroup;
 Step3:FormGroup;
 Step4:FormGroup;
ngOnInit() {

        this. Step1=new FormGroup({
         'boardcontrol':new  FormControl(null, Validators.required),
          'classcontrol': new   FormControl(null,Validators.required),
          'locationcontrol': new  FormControl(null, Validators.required),
         'subjectcontrol':new FormControl(null,Validators.required)
         });
     
      this.Step2 = new FormGroup({
        'topicscontrol': new FormControl(null, Validators.required),
         
       });
       this.Step3 = new FormGroup({
        'datecontrol': new FormControl(null, Validators.required),
        'timecontrol':new FormControl(null,Validators.required),
        'addresscontrol':new FormControl(null,Validators.required)
         });
         this.Step4=new FormGroup({
           'paycontrol':new FormControl(null, Validators.required)
         });
        }
        booking = new Booking();
       
        step1Submitted() {
     console.log(this.Step1.get('subjectcontrol').value);
      }

      changed() {
        if (this.Step2.get('topicscontrol').value.length < 3) {
          this.mySelections =this.Step2.get('topicscontrol').value;
        } else {
          this.Step2.get('topicscontrol').setValue(this.mySelections);
        }
      }
      
    Submit()
  {
    if( (this.Step1.invalid)||(this.Step2.invalid)||(this.Step3.invalid) ||(this.Step4.invalid)){
      return;	
       } 
  console.log('submitted');
  this.formSubmitted = true;
  this.booking.Board=this.Step1.get('boardcontrol').value;
  this.booking.Class=this.Step1.get('classcontrol').value;
  this.booking.Subject=this.Step1.get('subjectcontrol').value;
  this.booking.Topics=this.Step2.get('topicscontrol').value
  this.booking.Date=this.Step3.get('datecontrol').value;
  this.booking.Time=this.Step3.get('timecontrol').value;
  this.booking.Address=this.Step3.get('addresscontrol').value;

  this.bookingcreated.createBooking(this.booking);
  
  
 }

  reset(){
     this.formSubmitted=false;
     this.Step1.reset();
     this.Step2.reset();
     this.Step3.reset();
     this.Step4.reset();

  }

}




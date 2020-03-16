import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Register } from 'src/app/Request/register';
import{Router} from '@angular/router';
import { AuthenticateService } from 'src/app/Auth/authenticate.service';

@Component({
  selector: 'app-student-reg',
  templateUrl: './student-reg.component.html',
  styleUrls: ['./student-reg.component.css']
})
export class StudentRegComponent implements OnInit {
  studentForm:FormGroup;
  error:String;
  
  constructor(private authenticationService:AuthenticateService,
               private router:Router) { }

  ngOnInit() {
    this.studentForm=new FormGroup
({
    first_name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    last_name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required,Validators.max(10),Validators.min(6)]),
    gender:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    

});
  }
  register=new Register();
  

  studentSubmit()
{
  if(this.studentForm.invalid){return}
  this. register=this.studentForm.value;
  console.log(this.register)
  this.studentForm.reset();
  this.authenticationService.createRegisterPost(this.register).subscribe(
   res=>{
        console.log('success',res)
         alert("Registration Successful !!please verify your account through email sent to you and then Login to proceed further")
         this.router.navigate(['/login'])
        },
            
         error=>alert("Email already exists")
  )
}


reset(){
  this.studentForm.reset();
}

}

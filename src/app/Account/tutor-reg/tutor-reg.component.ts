import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TutorRegister } from 'src/app/Request/tutorRegister';
import { AuthenticateService } from 'src/app/Auth/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-reg',
  templateUrl: './tutor-reg.component.html',
  styleUrls: ['./tutor-reg.component.css']
})
export class TutorRegComponent implements OnInit {

  tutorForm:FormGroup;
  constructor(private authenticationService:AuthenticateService,
    private router:Router) { }

   

  ngOnInit() {
    this.tutorForm=new FormGroup
({
    first_name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    last_name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    password:new FormControl('',[Validators.required,Validators.max(10),Validators.min(6)]),
    gender:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    qualification:new FormControl('',Validators.required),
    line1:new FormControl('',Validators.required),
    line2:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    pincode:new FormControl('',Validators.required),
    

});
  }
 tutorRegister=new TutorRegister();

  tutorSubmit()
{
  if(this.tutorForm.invalid){return}
  this.tutorRegister=this.tutorForm.value;
  console.log(this.tutorRegister)
  this.tutorForm.reset();
  this.authenticationService.createTutorRegisterPost(this.tutorRegister).subscribe(
   res=>{
        console.log('success',res)
         alert("Registration Successful !!please verify your account through email sent to you and then Login to proceed further")
         this.router.navigate(['/login'])
        },
            
         error=>alert("Email already exists")
  )

}


reset(){
  this.tutorForm.reset();
}

}


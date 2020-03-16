import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { LoginComponent } from './login/login.component';
import { TutorRegComponent } from './Account/tutor-reg/tutor-reg.component';
import { StudentRegComponent } from './Account/student-reg/student-reg.component';
import{AuthGuard} from './Auth/auth.guard';




const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'userpage', component: UserpageComponent ,
    canActivate:[AuthGuard] },
    
  { path: 'login', component:LoginComponent },
  { path: 'studentSignup', component:StudentRegComponent },
  { path: 'tutorSignup', component:TutorRegComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
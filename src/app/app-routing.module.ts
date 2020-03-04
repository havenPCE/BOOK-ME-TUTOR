import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'userpage1', component: UserpageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
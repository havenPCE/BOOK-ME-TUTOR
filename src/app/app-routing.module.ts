import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserpageHeaderComponent } from './UserPage/userpage-header/userpage-header.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'userpage', component: UserpageComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
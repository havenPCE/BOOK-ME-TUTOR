import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  odd:number[]=[];
  even:number[]=[];
  onintervalfire(Intervaldata:number)
  {
//console.log(Intervaldata);
if(Intervaldata%2==0)
{
  this.even.push(Intervaldata);
}
else
{
  this.odd.push(Intervaldata);
}
  }

}

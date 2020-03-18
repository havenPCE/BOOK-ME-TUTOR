import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/Auth/authenticate.service';
import { NgbModule, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  constructor(private authenticationService:AuthenticateService ) { }
  
 

}

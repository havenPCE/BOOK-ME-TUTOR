import { Component, OnInit ,ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('loginModal', { static: false }) loginModal: ModalDirective;
 
  showLoginModal(): void {
    this.loginModal.show();
  }
 
  hideLoginModal(): void {
    this.loginModal.hide();
  }
  @ViewChild('signupModal', { static: false }) signupModal: ModalDirective;
 
  showSignupModal(): void {
    this.signupModal.show();
  }
 
  hideSignupModal(): void {
    this.signupModal.hide();
  }
}


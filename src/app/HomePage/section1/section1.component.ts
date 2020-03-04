import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('signupModal', { static: false }) signupModal: ModalDirective;
 
  showSignupModal(): void {
    this.signupModal.show();
  }
 
  hideSignupModal(): void {
    this.signupModal.hide();
  }
}

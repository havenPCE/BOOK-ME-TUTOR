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
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
 
  showChildModal(): void {
    this.childModal.show();
  }
 
  hideChildModal(): void {
    this.childModal.hide();
  }
}

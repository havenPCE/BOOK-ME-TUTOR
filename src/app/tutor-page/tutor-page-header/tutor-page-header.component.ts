import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Auth/authenticate.service';
@Component({
  selector: 'app-tutor-page-header',
  templateUrl: './tutor-page-header.component.html',
  styleUrls: ['./tutor-page-header.component.css']
})
export class TutorPageHeaderComponent implements OnInit {

  constructor(private authenticateService:AuthenticateService) { }

  ngOnInit() {
  }

}

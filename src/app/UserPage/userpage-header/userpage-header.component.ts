import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/Auth/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userpage-header',
  templateUrl: './userpage-header.component.html',
  styleUrls: ['./userpage-header.component.css']
})
export class UserpageHeaderComponent implements OnInit {
  
  constructor(private authenticateService:AuthenticateService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {


 }


}

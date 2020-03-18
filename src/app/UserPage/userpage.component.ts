import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-userpage',
    templateUrl: './userpage.component.html',
    styleUrls: ['./userpage.component.css'],
  
  })
  
  export class UserpageComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }

}

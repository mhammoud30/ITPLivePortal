import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {UserService} from '../../../Service/user.service';
import { BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  parts: any;
  payload: any;
  userID : any;
  token:any;
  user: any;

  constructor( private service: UserService) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.parts = this.token.split('.');
    this.payload = JSON.parse(atob(this.parts[1]));
    this.userID = parseInt(this.payload.id);

    this.service.getUserByID(this.userID).subscribe( item => {
      this.user = item;
      console.log(item);
    })
  }

}

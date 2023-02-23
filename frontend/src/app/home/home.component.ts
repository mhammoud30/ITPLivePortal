import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {UserService} from '../Service/user.service';
import { BreakpointObserver} from '@angular/cdk/layout';
import { UserModel } from '../Model/UserModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  parts: any;
  payload: any;
  userID : any;
  token:any;
  user: any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private service: UserService, private router: Router) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.parts = this.token.split('.');
    this.payload = JSON.parse(atob(this.parts[1]));
    this.userID = parseInt(this.payload.id);

    this.service.getUserByID(this.userID).subscribe( item => {
      this.user = item;
      /* console.log(item); */
    })
  }

  redirectToUrl() {
    this.router.navigate(['home']);
  }
}





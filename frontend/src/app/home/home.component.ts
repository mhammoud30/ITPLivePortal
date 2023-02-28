import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {UserService} from '../Service/user.service';
import { BreakpointObserver} from '@angular/cdk/layout';

import { Router } from '@angular/router';
import { SalesService } from '../Service/sales.service';
import { TaskService } from '../Service/task.service';


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

  menu:any;
  talentHeadNotificationCount: any;
  talentEmployeeNotificationCount: any;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private service: UserService, private router: Router, private salesService : SalesService, private taskService : TaskService) {}

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
    const load = {'assigned_to': this.userID}


    this.service.getUserByID(this.userID).subscribe( item => {
      this.user = item;

    })

    this.salesService.getSalesBriefsNotViewedByTalent().subscribe( item => {
      this.talentHeadNotificationCount = item;
    })


     this.taskService.getUnfinishedTasks(load ).subscribe( item => {
      console.log(item);

      this.talentEmployeeNotificationCount = item;
    })




  }

 /*  redirectToUrl() {
    this.router.navigate(['home']);
  } */
}





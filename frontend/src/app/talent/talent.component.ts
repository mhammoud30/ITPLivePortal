import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {
  pl: any;


  constructor(private router: Router){

 
  }

  ngOnInit(): void {
      this.getPrivilegeLevel();
  }

  redirectToInfluencers(){
    this.router.navigate(['talent/influencers'])
  }

  redirectToNewInfluencer(){
    this.router.navigate(['talent/newInfluencer'])
  }

  redirectToNewLog(){
    this.router.navigate(['talent/newLog'])
  }

  redirectToNewCelebrity(){
    this.router.navigate(['talent/newCelebrity'])
  }

  redirectToCelebrities(){
    this.router.navigate(['talent/celebrities'])
  }

  redirectToLogs(){
    this.router.navigate(['talent/logs'])
  }

  getPrivilegeLevel(){
    var token = localStorage.getItem('token');
    var parts = token!.split('.');
    var payload = JSON.parse(atob(parts[1]));
    this.pl = payload.pl;

  }

}

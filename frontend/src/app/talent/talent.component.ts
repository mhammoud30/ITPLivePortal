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
    this.router.navigate(['home/influencers'])
  }

  redirectToNewInfluencer(){
    this.router.navigate(['home/newInfluencer'])
  }

  redirectToNewLog(){
    this.router.navigate(['home/newLog'])
  }

  redirectToNewCelebrity(){
    this.router.navigate(['home/newCelebrity'])
  }

  redirectToCelebrities(){
    this.router.navigate(['home/celebrities'])
  }

  getPrivilegeLevel(){
    var token = localStorage.getItem('token');
    var parts = token!.split('.');
    var payload = JSON.parse(atob(parts[1]));
    this.pl = payload.pl;

  }

}

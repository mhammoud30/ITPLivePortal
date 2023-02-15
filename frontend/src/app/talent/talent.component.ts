import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent {
  constructor(private router: Router){}
  redirectToUrl(){
    this.router.navigate(['home/influencers'])
  }

  redirectToUrl1(){
    this.router.navigate(['home/newInfluencer'])
  }

}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './core/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ITP Live Portal';


  constructor(private router: Router, private userService: UserService){
    
  }
}


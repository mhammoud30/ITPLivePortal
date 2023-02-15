import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver} from '@angular/cdk/layout';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  parts: any;
  payload: any;
  userID : any;
  token:any;
  user: any;


  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private service: UserService){}

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
      console.log(item);
    })
  }
}

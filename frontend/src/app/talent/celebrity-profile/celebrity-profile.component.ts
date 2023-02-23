import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CelebrityService } from 'src/app/Service/celebrity.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-celebrity-profile',
  templateUrl: './celebrity-profile.component.html',
  styleUrls: ['./celebrity-profile.component.css']
})
export class CelebrityProfileComponent implements OnInit{
  id: any;
  celeberityData : any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private service: CelebrityService){}

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      this.GetCelebrityData(this.id)

    })
  }

  GetCelebrityData(inputdata: any) {
    return this.service.getCelebrity(inputdata).subscribe((item) => {
        this.celeberityData = item;

    })}

  backButton() {
    this.route.navigate(['home/talent'])
  }

}

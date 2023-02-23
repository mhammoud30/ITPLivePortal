import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfluencerService } from 'src/app/Service/influencer.service';

@Component({
  selector: 'app-influencer-profile',
  templateUrl: './influencer-profile.component.html',
  styleUrls: ['./influencer-profile.component.css']
})
export class InfluencerProfileComponent implements OnInit{
  id: any;
  influencerData : any;

  
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private service: InfluencerService){}

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      this.GetInfluencerData(this.id)

    })
  }

  GetInfluencerData(inputdata: any) {
    return this.service.getInfluencer(inputdata).subscribe((item) => {
        this.influencerData = item;

    })}

  backButton() {
    this.route.navigate(['home/talent'])
  }
}

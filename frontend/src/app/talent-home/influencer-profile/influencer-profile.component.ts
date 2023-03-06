
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { LogService } from 'src/app/core/Services/log.service';
import { InfluencerService } from 'src/app/core/Services/influencer.service';
import { LogModel } from 'src/app/Models/LogModel';


@Component({
  selector: 'app-influencer-profile',
  templateUrl: './influencer-profile.component.html',
  styleUrls: ['./influencer-profile.component.css']
})
export class InfluencerProfileComponent implements OnInit{
  id: any;
  influencerData : any;

  dataSource: any;
  UserDetails: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort !: MatSort;

  constructor(private route: Router,private logService : LogService, private activatedRoute: ActivatedRoute, private service: InfluencerService){}

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      this.GetInfluencerData(this.id)
      this.GetLogs(this.id)

    })
  }

  GetInfluencerData(inputdata: any) {
    return this.service.getInfluencer(inputdata).subscribe((item) => {
        this.influencerData = item;

    })}

  backButton() {
    this.route.navigate(['home/talent/forms'])
  }

  GetLogs(id:any) {
    this.logService.getInfluencerLogs(id).subscribe((item) => {
      this.UserDetails = item;
      this.dataSource = new MatTableDataSource<LogModel>(this.UserDetails.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  displayedColumns: string[] = ['Influencer', 'Campaign', 'Platform', 'Deliverable', 'Currency', 'Rate', 'Contact', 'Date'];
}

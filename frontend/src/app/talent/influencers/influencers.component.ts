import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InfluencerModel } from 'src/app/Model/InfluencerModel';
import { InfluencerService } from 'src/app/Service/influencer.service';

import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.css']
})
export class InfluencersComponent implements OnInit{
  dataSource:any;
  UserDetails: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;

  }



  constructor(private service: InfluencerService, private route: Router){


  }


  ngOnInit(): void {
    this.GetAllInfluencers();

    }

    GetAllInfluencers(){
      this.service.getInfluencers().subscribe( (item) => {
        this.UserDetails = item;
        this.dataSource = new MatTableDataSource<InfluencerModel>(this.UserDetails);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;



      })}

      applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }


      backButton(){
        this.route.navigate(['home/talent'])
      }

      displayedColumns: string[] = ['ID', 'Name', 'Gender',  'InstagramHandle', 'InstagramFollowers','CountryLocation', 'MainVertical', 'Action'];
    }



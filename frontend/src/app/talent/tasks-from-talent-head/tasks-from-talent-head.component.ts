import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SalesService } from 'src/app/Service/sales.service';
import { Location } from '@angular/common';
import { TaskService } from 'src/app/Service/task.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-tasks-from-talent-head',
  templateUrl: './tasks-from-talent-head.component.html',
  styleUrls: ['./tasks-from-talent-head.component.css']
})
export class TasksFromTalentHeadComponent {
  briefDetails: any;
  dataSource: any;
  userID: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;


  constructor(private salesService : SalesService, private route: Router, private location: Location, private taskService : TaskService, private userService : UserService) { }

  ngOnInit(): void {
    this.userID = this.userService.getID();

    this.getMyTasks({assigned_to :this.userID })
  }

  backButton() {
    this.route.navigate(['talent/forms'])
  }

  displayedColumns: string[] =  ['Agency', 'Client','ClientIndustry', 'CampaignObjective', 'NumberofRecommendations', 'status', 'Action' ];

  getMyTasks(id:any){
    this.taskService.getMyTasks(id).subscribe((data:any)=>{
      this.briefDetails = data
      console.log(this.briefDetails.data);

      this.dataSource = new MatTableDataSource(this.briefDetails.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  })
  }

  onRowClicked(row: any) {
    /* this.route.navigate([`talent/influencerProfile/${row.id}`]) */
  }

  viewedTask(id:any){


    this.taskService.updateStatus({ assigned_to : this.userID}).subscribe((data:any)=>{
      console.log(data)
    })
    this.route.navigate([`talent/viewTask/${id}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/Service/sales.service';
import { TaskService } from 'src/app/Service/task.service';
import { UserService } from 'src/app/Service/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-view-sales-brief',
  templateUrl: './view-sales-brief.component.html',
  styleUrls: ['./view-sales-brief.component.css']
})
export class ViewSalesBriefComponent implements OnInit{

  brief: any = {};
  id: any;
  date: any
  originalDate: any
  talentEmployees: any;
  user_id = this.userService.getID();
  assignForm : FormGroup;

  constructor(private salesService: SalesService, private activatedRoute:  ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private taskService: TaskService) {
    this.assignForm = new FormGroup({
      Employee: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.loadBriefData();
    this.loadTalentNames();
  }


  loadBriefData() {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id']
      this.salesService.getSalesBrief(this.id).subscribe((data: any) => {
        this.brief = data;
        console.log(data);

        /* this.originalDate = new Date(this.brief.date).toDateString();
        this.date = new Intl.DateTimeFormat('en-US', this.options).format(this.originalDate); */
      });
    })
  }

  loadTalentNames(){

    this.userService.getUserNames().subscribe((data: any) => {

      this.talentEmployees = data.data;
    });
  }

  assign(){

    console.log({assigned_by: this.user_id , assigned_to : this.assignForm.value.Employee, brief_id : this.brief.data.id});


    this.taskService.createTask({assigned_by: this.userService.getID() , assigned_to : this.assignForm.value.Employee, brief_id : this.brief.data.id}).subscribe((data: any) => {
        alertify.success('Task Assigned');
    });
  }


}

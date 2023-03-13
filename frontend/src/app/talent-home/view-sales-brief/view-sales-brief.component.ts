import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from 'src/app/core/Services/sales.service';
import { TaskService } from 'src/app/core/Services/task.service';
import { UserService } from 'src/app/core/Services/user.service';
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
  role = this.userService.getRole();
  privilege_level = this.userService.getPrivilegeLevel();
  assignForm : FormGroup;

  constructor(private salesService: SalesService, private activatedRoute:  ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private taskService: TaskService) {
    this.assignForm = this.formBuilder.group({
      Employee: ['', Validators.required],
      Weight: ['', Validators.required, Validators.min(1), Validators.max(10)],
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

    this.userService.getTalentUserIdNames().subscribe((data: any) => {

      this.talentEmployees = data.data;
      console.log(data.data);
    });
  }

  assign(){
    console.log({assigned_by: this.userService.getID() , assigned_to : this.assignForm.value.Employee, brief_id : this.brief.data.id, weight: this.assignForm.value.Weight});

    this.taskService.createTask({assigned_by: this.userService.getID() , assigned_to : this.assignForm.value.Employee, brief_id : this.brief.data.id, weight: this.assignForm.value.Weight}).subscribe((data: any) => {
        alertify.success('Task Assigned');
    });
  }

  backButton(){
    window.history.back();
  }


}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';
import { SalesService } from 'src/app/Service/sales.service';
import { UserService } from 'src/app/Service/user.service';

import { campaignobjectives, clientIndustries, currencies } from 'src/assets/influencer-form-arrays';

@Component({
  selector: 'app-new-brief',
  templateUrl: './new-brief.component.html',
  styleUrls: ['./new-brief.component.css'],
})
export class NewBriefComponent {
  newSalesBriefForm: FormGroup;
  clientIndustries: string[] = clientIndustries;
  campaignobjectives: string[] = campaignobjectives;
  currencies: string[] = currencies;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private salesService: SalesService,
    private userService: UserService
  ) {
    this.newSalesBriefForm = this.formBuilder.group({
      Agency: ['', [Validators.required]],
      Client: ['', [Validators.required]],
      ClientIndustry: ['', [Validators.required]],
      CampaignName: ['', [Validators.required]],
      CampaignOverview: [''],
      CampaignObjective: [''],
      CampaignObjectiveDetails: [''],
      NumberofRecommendations: [''],
      Currency: [''],
      Budget: [''],
    });
  }

  createSalesBrief() {
    const createdByUserId = this.userService.getID();
    const salesBrief = {
      ...this.newSalesBriefForm.value,
      Ready: false,
      ViewedByTalent: false,
    };
    console.log( {CreatedbyID: createdByUserId, ...salesBrief });

    this.salesService.createBrief({ CreatedbyID: createdByUserId, ...salesBrief }).subscribe(
      () => {
        alertify.success('Sales brief created successfully');
        this.router.navigate(['sales/forms']);
      },
      (error) => {
        console.error('An error occurred while creating the sales brief: ', error);
        alertify.error('An error occurred while creating the sales brief');
        // Display a user-friendly error message to the user.
      }
    );
  }

  navigateToForms() {
    this.router.navigate(['sales/forms']);
  }
}


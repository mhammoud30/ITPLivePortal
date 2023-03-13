import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { InfluencerService } from 'src/app/core/Services/influencer.service';
import { LogService } from 'src/app/core/Services/log.service';
import { UserService } from 'src/app/core/Services/user.service';
import { currencies, platforms } from 'src/assets/influencer-form-arrays';

import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-new-package-log',
  templateUrl: './new-package-log.component.html',
  styleUrls: ['./new-package-log.component.css']
})
export class NewPackageLogComponent {
  form: FormGroup = this.fb.group({});
  logForm: FormGroup = this.fb.group({});
  userID: any;
  data: any;
  currencies = currencies;
  influencers: any;

  platforms = platforms;
  deliverables = [''];
  influencerData: any;
  submitted = false;

  constructor(private fb: FormBuilder, private route: Router, private service: InfluencerService, private userService: UserService, private logService: LogService) { }

  ngOnInit(): void {
    this.getInfluencers();



    this.logForm = this.fb.group({
      Influencer: ['', Validators.required],
      Campaign: ['', Validators.required],
      Currency: ['', Validators.required],
      Rate: ['', Validators.required],
      Notes: [''],
      Time_to_reply: ['',Validators.required],
    })

    this.form = this.fb.group({
      fields: this.fb.array([])
    });

    this.addFields();

    if(sessionStorage.getItem('influencerData') != null){
      this.influencerData = JSON.parse(sessionStorage.getItem('influencerData') || '{}');
      this.logForm.controls['Influencer'].setValue(this.influencerData.id);
    sessionStorage.removeItem('influencerData');
    }
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addFields() {
    const index = this.fields.length;
    const fields = this.fb.group({
      Platform: ['', Validators.required],
      Deliverable: ['', Validators.required],

    });

    this.fields.push(fields);

  }

  getInfluencers() {
    return this.service.getInfluencers().subscribe(item => {
      this.influencers = item;
    })
  }




  onSubmit() {
    if (this.submitted) {
      return;
    }

    this.submitted = true;

    if (this.form.valid) {
      const inputData = { UserID: this.userService.getID(), InfluencerID: this.logForm.value.Influencer, Campaign: this.logForm.value.Campaign, Currency: this.logForm.value.Currency, Rate: this.logForm.value.Rate, Notes: this.logForm.value.Notes, Time_to_reply: this.logForm.value.Time_to_reply, length: this.form.value.fields.length, fields: this.form.value.fields }
      this.logService.addLog(inputData).subscribe(item => {
        this.data = item;
        if (this.data.status === "success") {
          alertify.success("Log created successfully.")
          this.route.navigate(['home/talent/logs'])
        }
        else {
          alertify.error("Log was not created");
        }

      })
    }
    setTimeout(() => {
      this.submitted = false;
    }, 1000);
  }




  getAvailableDeliverables(platformIndex: number): string[]{
    const platform = this.fields.controls[platformIndex].get('Platform')?.value;
    switch (platform) {
      case 'Instagram':
        return ['Static image posts', 'Carousel posts', 'Instagram Stories', 'Instagram Reels', 'IGTV', 'Influencer partnerships and collaborations'];
      case 'Tiktok':
        return ['Short-form video content', 'Hashtag challenges', 'Influencer partnerships and collaborations'];
      case 'Snapchat':
        return ['Snap stories', 'Geofilters and lenses', 'Influencer partnerships and collaborations'];
      case 'Twitter':
        return ['Tweets', 'Retweets', 'Twitter threads', 'Hashtags', 'Influencer partnerships and collaborations'];
      case 'Facebook':
        return ['Facebook posts', 'Facebook Stories', 'Live videos', 'Groups', 'Influencer partnerships and collaborations'];
      case 'Youtube':
        return ['Video content', 'Livestreams', 'Live videos', 'Collaborations with other YouTubers or brands', 'Product reviews or demonstrations', 'Influencer partnerships and collaborations'];
      default:
        return [];
    }
  }

  onPlatformChange(platformIndex: number):void {
    const platform = this.fields.controls[platformIndex].get('Platform')?.value;
    const deliverableControl = this.fields.controls[platformIndex].get('Deliverable');
    deliverableControl?.setValue(null);
    deliverableControl?.enable();
    if (platform) {
      deliverableControl?.setValidators(Validators.required);
    } else {
      deliverableControl?.clearValidators();
    }
  }


  backButton() {
    window.history.back();
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfluencerService } from 'src/app/Service/influencer.service';
import { UserService } from 'src/app/Service/user.service';
import { currencies } from 'src/assets/influencer-form-arrays';

@Component({
  selector: 'app-new-package-log',
  templateUrl: './new-package-log.component.html',
  styleUrls: ['./new-package-log.component.css']
})
export class NewPackageLogComponent {
  form: FormGroup = this.fb.group({});
  logForm: FormGroup = this.fb.group({});
  userID: any;

  currencies = currencies;
  influencers: any;
  constructor(private fb: FormBuilder, private route: Router,  private service: InfluencerService, private userService: UserService) { }

  ngOnInit(): void {
    this.getInfluencers();


    this.logForm = this.fb.group({
      Influencer: ['', Validators.required],
      Campaign: ['', Validators.required],
    })

    this.form = this.fb.group({
      fields: this.fb.array([])
    });

    this.addFields();
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray;
  }

  addFields() {
    const fields = this.fb.group({
      Platform: ['', Validators.required],
      Deliverable: ['', Validators.required],
      Currency: ['', Validators.required],
      Rate: ['', Validators.required],
    });

    this.fields.push(fields);
  }

  getInfluencers(){
    return this.service.getInfluencers().subscribe( item => {
      this.influencers = item;
    })
  }




  onSubmit(){
    console.log(this.userService.getID());

    if(this.form.valid){
    console.log(this.logForm.value);
    /* console.log(this.logForm.value.Campaign); */
    console.log(this.form.value)
    }
  }




  backButton() {
    this.route.navigate(['home/talent'])
  }
}

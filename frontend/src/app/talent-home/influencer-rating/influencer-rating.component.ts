import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-influencer-rating',
  templateUrl: './influencer-rating.component.html',
  styleUrls: ['./influencer-rating.component.css']
})
export class InfluencerRatingComponent implements OnInit {
  influencerForm!: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.influencerForm = this.fb.group({
      authenticity: ['', Validators.required],
      engagement: ['', Validators.required],
      transparency: ['', Validators.required],
      relevance: ['', Validators.required],
      consistency: ['', Validators.required],
      creativity: ['', Validators.required],
      influence: ['', Validators.required],
      trustworthiness: ['', Validators.required],
      responsiveness: ['', Validators.required],
      personality: ['', Validators.required],
      notes: ['', Validators.maxLength(500)]
    });
  }

  onRatingClicked(event: any, fieldName: string): void {
    const rating = parseInt(event.target.dataset.rating, 10);
    this.influencerForm.controls[fieldName].setValue(rating);
  }

  onSubmit(): void {
    console.log(this.influencerForm.value);
  }

}

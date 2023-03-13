import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {


  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      status: ['', Validators.required],
      role: ['', Validators.required],
      privilege_level: ['', Validators.required],
      parentId: [''],
      hash: ['', Validators.required],
      createdAt: [new Date(), Validators.required],
      updatedAt: [new Date(), Validators.required]
    });
   }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.userForm.valid) {
      // Submit form data to backend
      console.log(this.userForm.value);
      // Show success message to user

      
      // Reset form
      this.userForm.reset();
    } else {
      // Show error message to user

    }
  }






  backButton() {
    window.history.back();
  }

}

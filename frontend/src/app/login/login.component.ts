import * as alertify from 'alertifyjs';
import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  data: any;

  ngOnInit(): void {
    localStorage.clear();
  }
 

  constructor(private formBuilder: FormBuilder, private service: UserService, private route: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  onSubmit() {
    const email = this.loginForm.value.email ;
    const password = this.loginForm.get('password')?.value;

    this.service.logIn(this.loginForm.value).subscribe((res) => {

      this.data = res;
      if(this.data!=null){
        localStorage.setItem('token',this.data.data.token)
        this.route.navigate(['home/talent'])
      }else{
        alertify("Login failed.")
      }


    });
  }
}

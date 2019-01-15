import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../service//auth.service';
import { Router } from '@angular/router'



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  displayMessage: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder /*, private auth: AuthService,
     private router: Router */) {
    /* Declare Reactive Form Group here */
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]],
      password: ['', [
        Validators.minLength(8),
        Validators.required
      ]],
    });

  }

  submitForm() {
    this.submitted = true;
    /* Change the display message on button click / submit form */
    if (this.loginForm.valid) {
      // this.loginUser();
    }

  }

  // loginUser() {
  //   this.auth.loginUser(this.loginForm.value)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         localStorage.setItem('token', res.token)
  //         this.router.navigate(['/blog'])
  //       },
  //       err => console.log(err)
  //     )
  // }


}

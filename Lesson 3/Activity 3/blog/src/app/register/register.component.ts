import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'
import { Users } from '../users';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new Users('', '', '');
  constructor(/*private auth: AuthService,
    private router: Router*/) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.registerUser();
  }


  // registerUser() {
  //   this.auth.registerUser(this.model)
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

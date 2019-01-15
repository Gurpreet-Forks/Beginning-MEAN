import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:4000/auth/register";
  private loginUrl = "http://localhost:4000/auth/sign_in";

  constructor(private http: HttpClient,
              private router: Router) { }

  registerUser(user) {
    console.log(user);
    return this.http.post<any>(this.registerUrl, user)
  }

  loginUser(user) {
    console.log(user);
    return this.http.post<any>(this.loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}

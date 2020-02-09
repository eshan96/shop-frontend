import { Component} from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { AuthService } from './../services/auth.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
     invalidLogin: boolean 

  constructor(
    private authService: AuthService,
    private router: Router) { }

  signIn(credentials) {
    this.authService.login(credentials)
    .subscribe(response => {
      console.log(response.json())
      localStorage.setItem('token', response.json().data.token);
      if(response.json().data.decoded.isAdmin == true) {
        this.router.navigate(['/admin-home'])
      }else if(response.json().data.decoded.isAdmin == false){
        this.router.navigate(['/user-home'])
      }
        this.invalidLogin = true;
      
    },
    error => {
      console.log('Error in code', error)
    })
  }
}

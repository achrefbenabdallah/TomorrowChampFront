import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'achref'
  password = ''
  invalidLogin = false
  errorMessage='Invalid Credentials'
  
  

  constructor(private router:Router,private hardcodedAuthentication :HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['home'])
      this.invalidLogin=false
    } else {
      this.invalidLogin=true
    }
  }

}

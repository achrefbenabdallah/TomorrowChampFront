import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scout } from '../models/scout';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { ScoutServiceService } from '../service/scout-service.service';

@Component({
  selector: 'app-register-scout',
  templateUrl: './register-scout.component.html',
  styleUrls: ['./register-scout.component.css']
})
export class RegisterScoutComponent implements OnInit {

  scout :Scout=new Scout()

  constructor(
    private serviceScout: ScoutServiceService,
    private router: Router,
    private auth:HardcodedAuthenticationService) { }

  ngOnInit() {
    this.scout = {
      id: null,nom:null,prenom:null,email:null,joueurs:null,password:null,role:null 
    }
  }

  addScout(scout: any) {
    return this.serviceScout.addScout(this.scout).subscribe(
      response => console.log(response),
      () => { },
      () => {
        this.router.navigate(['joueur'])
        this.auth.authenticate('achref','')
      }
      
    )
  }
  GoBack() {
    return this.router.navigate(['register'])
  }

}

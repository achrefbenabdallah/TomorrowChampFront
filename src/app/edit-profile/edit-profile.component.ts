import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Joueur } from '../models/joueur';
import { PlayersDataService } from '../service/data/players-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  joueur: Joueur = new Joueur();

  constructor(
    private serviceJoueur: PlayersDataService,
    private router: Router,
    private auth:HardcodedAuthenticationService
  ) { }

  ngOnInit() {
    this.joueur = {
      id: null,
      adresse: null,
      caracteristique: null,
      disponibilite: null, nationalite: null, nom: null, parties: null, password: null, prenom:null,role:null,scout:null,videos:null
    }
  }

  editJoueur(id:any,data:any) {
    this.serviceJoueur.updatePlayer(id, data).subscribe(
      response=>response
    )
  }

  GoBack() {
    return this.router.navigate(['register'])
  }

}

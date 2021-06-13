import { Component, OnInit } from '@angular/core';
import { Joueur } from '../models/joueur';
import { PlayersDataService } from '../service/data/players-data.service';

@Component({
  selector: 'app-register-joueur',
  templateUrl: './register-joueur.component.html',
  styleUrls: ['./register-joueur.component.css']
})
export class RegisterJoueurComponent implements OnInit {
  joueur: Joueur = new Joueur();

  constructor(
    private serviceJoueur:PlayersDataService
  ) { }

  ngOnInit() {
    this.joueur = {
      id: null,
      adresse: null,
      caracteristique: null,
      disponibilite: null, nationalite: null, nom: null, parties: null, password: null, prenom:null,role:null,scout:null,videos:null
    }
  }

  createJoueur(joueur:any)  {
   
      this.serviceJoueur.addPlayer(this.joueur).subscribe(
        response=> console.log(response)
      )
  }
  

}

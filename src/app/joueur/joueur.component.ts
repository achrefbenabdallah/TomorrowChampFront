import { Component, OnInit } from '@angular/core';
import { Joueur } from '../models/joueur';
import { PlayersDataService } from '../service/data/players-data.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  joueur:Joueur

  players : any
  constructor(private service : PlayersDataService) { }

  ngOnInit() {
    this.joueur = {
      id: null,
      adresse: null,
      caracteristique: null,
      disponibilite: null, nationalite: null, nom: null, parties: null, password: null, prenom:null,role:null,scout:null,videos:null
    }
  }

  getListPlayers() {
    console.log(this.service.getAllPlayers());

    this.service.getAllPlayers().subscribe(
      response => this.players = response
    );
  }

  addJoueur(j: any) {
    this.service.addPlayer(j).subscribe(
      response=> console.log(response)
    )
  }

}

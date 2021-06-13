import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaracteristiqueComponent } from '../caracteristique/caracteristique.component';
import { Caracteristique } from '../models/caracteristique';
import { Joueur } from '../models/joueur';
import { PlayersDataService } from '../service/data/players-data.service';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
  id: number
  name:string
  joueur: Joueur
  caracteristique : Caracteristique

  players : any
  constructor(
    private service: PlayersDataService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    //this.id = this.route.snapshot.params['id'];

    this.joueur = {
      id: null,
      adresse: null,
      caracteristique: null,
      disponibilite: null, nationalite: null, nom: null, parties: null, password: null, prenom:null,role:null,scout:null,videos:null
    }

    this.caracteristique = {
      id: null,
      tir: null, attaque: null, defense: null, dribble: null, hauteur: null, pass: null,
      physique: null, piedfort: null, poids: null, position: null, precisions: null, vitesse: null
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

  goCaracteristiqueDetails(id:any,name:any) {

    //console.log("carac "+`${id}`)
    return this.router.navigate(['caracteristique/', { id, name }])
    
  }

}

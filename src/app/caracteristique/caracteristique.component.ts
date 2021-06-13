import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Caracteristique } from '../models/caracteristique';
import { CaracteristiqueService } from '../service/caracteristique.service';
import { PlayersDataService } from '../service/data/players-data.service';

@Component({
  selector: 'app-caracteristique',
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.css']
})
export class CaracteristiqueComponent implements OnInit {
  carac: any
  test=false
  id: number
  name:string

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceJoueur: PlayersDataService,
    private serviceCarac:CaracteristiqueService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.name=this.route.snapshot.params['name']
  }

  getCaracteristiqueById(id: any) {
    this.test=true
    return this.serviceCarac.getCaracteristiqueById(id).subscribe(
      response => this.carac = response
      , () => { }
      , () => console.log(this.carac)
    )
  }

  GoBack() {
    return this.router.navigate(['joueur'])
  }








}

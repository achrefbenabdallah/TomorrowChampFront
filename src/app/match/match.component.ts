import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../models/match';
import { MatchesDataService } from '../service/data/matches-data.service';
import { PlayersDataService } from '../service/data/players-data.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  match: Match = new Match();
  listplayers: any;

  constructor(private serviceJoueur: PlayersDataService,
    private serviceMatch: MatchesDataService,
    private router:Router) { }

  ngOnInit() { }

  getListJoueurs() {
    return this.serviceJoueur.getAllPlayers().subscribe(
      response => this.listplayers = response
    )
  }

  createMatch(match: any) {
     this.serviceMatch.createPartie(this.match).subscribe(
      response => console.log(response),
      () => { },
      ()=>  this.router.navigate['/partie']
    )
  }

  GoBack() {
    return this.router.navigate(['partie'])
  }


  
}

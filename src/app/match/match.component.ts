import { Component, OnInit } from '@angular/core';
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
  private serviceMatch:MatchesDataService) { }

  ngOnInit() { }

  getListJoueurs() {
    return this.serviceJoueur.getAllPlayers().subscribe(
      response => this.listplayers = response
    )
  }

  createMatch(match: any) {
    return this.serviceMatch.createPartie(this.match).subscribe(
      response=> console.log(response)
    )
  }
  
}

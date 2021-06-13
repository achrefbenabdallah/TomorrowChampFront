import { Component, OnInit } from '@angular/core';
import { PlayersDataService } from '../service/data/players-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  players : any

  constructor(private service : PlayersDataService) { }

  ngOnInit() {
  }

   getListPlayers() {
    console.log(this.service.getAllPlayers());

    this.service.getAllPlayers().subscribe(
      response => this.players = response
    );
  }
}

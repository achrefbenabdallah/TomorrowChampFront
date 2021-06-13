import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesDataService } from '../service/data/matches-data.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  parties: any
  
  constructor(private matcheService: MatchesDataService,
  private router:Router) { }

  ngOnInit() {
  }

  getListParties() {
    return this.matcheService.getAllParties().subscribe(
      response => this.parties = response
    
    )
  }

  addMatch() {
    return this.router.navigate(['/match'])
  }

}

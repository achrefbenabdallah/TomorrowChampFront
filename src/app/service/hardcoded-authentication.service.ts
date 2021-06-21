import { Injectable } from '@angular/core';
import { PlayersDataService } from './data/players-data.service';
import { ScoutServiceService } from './scout-service.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  AllPlayers: any
  allScouts:any

  constructor(
    private servicejoueur: PlayersDataService,
    private serviceScout:ScoutServiceService
  ) { }

  authenticate(username, password) {

    if (username === 'achref' && password === 'iheb') {
      sessionStorage.setItem('authenticaterUser',username)
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }

  /*getAllScouts() {
    return this.serviceScout.getAllScouts().subscribe(
      response => this.allScouts = response,
      () => { },
      () => console.log(this.allScouts)
    )
  }

  getAllPlayers() {
    return this.servicejoueur.getAllPlayers().subscribe(
      response => this.AllPlayers = response,
      () => { },
      () => console.log(this.AllPlayers)
    )
  }*/

  






}

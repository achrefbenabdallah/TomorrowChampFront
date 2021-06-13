import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JoueurComponent } from "src/app/joueur/joueur.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlayersDataService {

  URL="http://localhost:8090/api/joueurs"
  constructor(private http: HttpClient) {}

 

  getAllPlayers() {
    /*let basicAuthHeaderString = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({
      Authorization : basicAuthHeaderString
    })*/
    return this.http.get("http://localhost:8090/api/joueurs");
    //console.log("all players here!!")
  }

  addPlayer(joueur:any) :Observable<Object>{
    return this.http.post(`${this.URL}`,joueur)
  }

  getPlayerById(id: any) {
    return this.http.get(`${this.URL}${id}`)
  }

  setScoutInJoueur(idjoueur,idscout:any,data:any) {
    return this.http.put(`${this.URL}${idjoueur}${idscout}`,data)
  }

  

  

  /*createBasicAuthenticationHeader() {
    let username = "";
    let password = "";
    let basicAuthenticationHeader = "Basic " + window.btoa(username + ":" + password);
    return basicAuthenticationHeader;
  }*/
}

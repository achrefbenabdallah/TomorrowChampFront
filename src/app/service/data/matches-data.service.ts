
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesDataService {

  URL="http://localhost:8090/api/parties"

  constructor(private http: HttpClient) { }

  getAllParties() {
    return this.http.get("http://localhost:8090/api/parties")
  }

  createPartie(partie: any) :Observable<Object>{
    return this.http.post(`${this.URL}`, partie)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoutServiceService {

  URL="http://localhost:8090/api/scouts"

  constructor(private http: HttpClient) { }
  
  addScout(scout: any) {
    return this.http.post(`${this.URL}`,scout)
  }

  getAllScouts() {
    return this.http.get("http://localhost:8090/api/scouts")
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaracteristiqueService {

  URL="http://localhost:8090/api/carac"

  constructor(
    private http:HttpClient
  ) { }

  getCaracteristiqueById(id: any) {
    return this.http.get(`${this.URL}/${id}`)
  }
}

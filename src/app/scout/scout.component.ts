import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scout } from '../models/scout';

import { ScoutServiceService } from '../service/scout-service.service';

@Component({
  selector: 'app-scout',
  templateUrl: './scout.component.html',
  styleUrls: ['./scout.component.css']
})
export class ScoutComponent implements OnInit {

  scout:Scout 
  scouts:any

  constructor(private service: ScoutServiceService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    this.scout={
      id :null,role:null,password:null,joueurs:null,email:null,prenom:null,nom:null
    }
  }

  getListScouts() {
    console.log(this.service.getAllScouts());

    this.service.getAllScouts().subscribe(
      response => this.scouts = response
    );
  }

  addScout(j: any) {
    this.service.addScout(j).subscribe(
      response=> console.log(response)
    )
  }

}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddCaracteristiqueComponent } from "./add-caracteristique/add-caracteristique.component";
import { CaracteristiqueComponent } from "./caracteristique/caracteristique.component";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { JoueurComponent } from "./joueur/joueur.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { MatchComponent } from "./match/match.component";
import { MatchesComponent } from "./matches/matches.component";
import { RegisterJoueurComponent } from "./register-joueur/register-joueur.component";
import { RegisterScoutComponent } from "./register-scout/register-scout.component";
import { RegisterComponent } from "./register/register.component";
import { ScoutComponent } from "./scout/scout.component";
import { RouteGuardService } from "./service/route-guard.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent ,canActivate:[RouteGuardService]},
  { path: "joueur", component: JoueurComponent ,canActivate:[RouteGuardService]},
  { path: "scout", component: ScoutComponent, canActivate: [RouteGuardService] },
  { path: "partie", component: MatchesComponent ,canActivate:[RouteGuardService]},
  { path: "logout", component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: "match", component: MatchComponent, canActivate: [RouteGuardService] },
  { path: "registerjoueur", component: RegisterJoueurComponent },
  { path: "registerscout", component: RegisterScoutComponent },
  { path: "register", component: RegisterComponent },
  { path: "addcaracteristique", component: AddCaracteristiqueComponent, canActivate: [RouteGuardService] },
  { path: "caracteristique/:id/:name", component: CaracteristiqueComponent, canActivate: [RouteGuardService] },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

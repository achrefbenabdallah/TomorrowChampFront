import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { JoueurComponent } from "./joueur/joueur.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ScoutComponent } from "./scout/scout.component";
import { RouteGuardService } from "./service/route-guard.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent ,canActivate:[RouteGuardService]},
  { path: "joueur", component: JoueurComponent ,canActivate:[RouteGuardService]},
  { path: "scout", component: ScoutComponent ,canActivate:[RouteGuardService]},
  { path: "logout", component: LogoutComponent ,canActivate:[RouteGuardService]},
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

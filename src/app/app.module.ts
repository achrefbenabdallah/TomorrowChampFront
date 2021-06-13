import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { JoueurComponent } from "./joueur/joueur.component";
import { ScoutComponent } from "./scout/scout.component";
import { FormsModule } from "@angular/forms";
import { LogoutComponent } from "./logout/logout.component";
import { HttpClientModule } from "@angular/common/http";
import { MatchesComponent } from './matches/matches.component';
import { MatchComponent } from './match/match.component';
import { RegisterJoueurComponent } from './register-joueur/register-joueur.component';
import { RegisterScoutComponent } from './register-scout/register-scout.component';
import { RegisterComponent } from './register/register.component';
import { CaracteristiqueComponent } from './caracteristique/caracteristique.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    JoueurComponent,
    ScoutComponent,
    LogoutComponent,
    MatchesComponent,
    MatchComponent,
    RegisterJoueurComponent,
    RegisterScoutComponent,
    RegisterComponent,
    CaracteristiqueComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

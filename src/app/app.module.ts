import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RacewinnersComponent } from './racewinners/racewinners.component';
import { WinnerHttpServiceComponent } from './winner-http-service/winner-http-service.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TeamsideComponent } from './teamside/teamside.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RacewinnersComponent,
    WinnerHttpServiceComponent,
    TeamsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

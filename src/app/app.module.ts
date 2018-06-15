import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import 'rxjs/add/operator/map';

// Animaciones
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';

// Componentes
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/matches/match/match.component';
import { MatchesListComponent } from './components/matches/matches-list/matches-list.component';

// Services
import { MatchService } from './services/match/match.service';


import { environment } from '../environments/environment';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    MatchComponent,
    MatchesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DataTablesModule,
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      cancelButtonText: 'Cancelar',
      confirmButtonClass: 'btn btn-xs btn-success',
      cancelButtonClass: 'btn btn-xs btn-danger',
    })
  ],
  providers: [
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

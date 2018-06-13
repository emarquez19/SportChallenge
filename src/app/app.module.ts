import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import 'rxjs/add/operator/map';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatFormFieldModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ExchangeCurrencyComponent, KeysPipe } from './exchange-currency/exchange-currency.component';
import { AddCountryComponent } from './add-country/add-country.component';

const appRoutes:Routes = [

  { path: '', component: ExchangeCurrencyComponent },
  { path: 'add_country', component: AddCountryComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ExchangeCurrencyComponent,
    KeysPipe,
    AddCountryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

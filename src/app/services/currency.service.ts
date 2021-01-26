import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _httpClient: HttpClient) {
  }

  private getCurrencyURL = environment.baseUrl + 'get_currency';
  private getCurrencyRateByCountryCodeURL = environment.baseUrl + 'get_currency/';
  private postCurrencyURL = environment.baseUrl + "post_currency";

  getCurrenyForDropdown(): Observable<any> {
    return this._httpClient.get(this.getCurrencyURL);
  }

  getCurrencyRateByCountryCode(code): Observable<any> {
    if (!code) code = 'EUR';
    return this._httpClient.get(this.getCurrencyRateByCountryCodeURL + code);
  }

  postCurrency(model) {
    return this._httpClient.post(this.postCurrencyURL, model)
  }

}

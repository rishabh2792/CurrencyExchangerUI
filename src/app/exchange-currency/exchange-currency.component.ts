import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { CurrencyService } from '../services/currency.service';


@Component({
  selector: 'app-exchange-currency',
  templateUrl: './exchange-currency.component.html',
  styleUrls: ['./exchange-currency.component.css']
})
export class ExchangeCurrencyComponent implements OnInit {

  currencyData: any = [];
  country_rates: any;
  code: string= '';
  title = 'Currency Exchange Rate';

  constructor(private _currencyService: CurrencyService) { }

  ngOnInit() {
    this.getCurrency();
    this.selectedCountry();
  }

  getCurrency() {
    this._currencyService.getCurrenyForDropdown().subscribe((res) => {
      this.currencyData = res
    })
  }

  selectedCountry(event?) {
    this._currencyService.getCurrencyRateByCountryCode(event?event.value:'').subscribe((res) => {
      this.country_rates = res.rates;
      this.code = res.base;
    })
  }

}

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let key in value) {
      keys.push({ key: key, value: value[key] });
    }
    return keys;
  }
}

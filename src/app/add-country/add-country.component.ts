import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  countryForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _currencyService: CurrencyService
  ) { }

  ngOnInit() {

    this.countryForm = this._fb.group({
      country: [''],
      code: ['']
    })

  }

  onSubmit() {
    let obj = {
      country: this.countryForm.controls.country.value,
      code: this.countryForm.controls.code.value
    }
    this._currencyService.postCurrency(obj).subscribe((resp:any) => {
      if (resp.success) this._router.navigate(['']);
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cartpaymentmethod',
  templateUrl: './cartpaymentmethod.component.html',
  styleUrls: ['./cartpaymentmethod.component.css'],
})
export class CartpaymentmethodComponent implements OnInit {
  selected: any;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;

  selectedstatement = true;

  methods: any[] = [
    'MasterCard',
    'VisaCard',
    'PayPal',
    'BitCoin',
    'Skrill',
    'Cash on Delivery',
  ];
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
      sixthCtrl: ['', Validators.required],
      seaventhCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      eigththCtrl: ['', Validators.required],
      ninthCtrl: ['', Validators.required],
      tenthCtrl: ['', Validators.required],
      eleventhCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      selectCtrl: ['', Validators.required],
    });
  }
  displaySelection() {
    this.selectedstatement = false;
  }
}

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
  selectedstatement = true;

  firstName:any=''
  personfirstName:any=''
  lastName:any=''
  email:string=''
  address:any=''
  phoneNumber:any=''
  streetAddress:any=''
  pesronNumber:any=''

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
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }
  displaySelection() {
    this.selectedstatement = false;
  }
  addContactDetail(){
  
         
  }
}

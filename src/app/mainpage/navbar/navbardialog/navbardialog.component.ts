import { Component, OnInit } from '@angular/core';
import { KifayatService } from 'src/app/kifayat.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-navbardialog',
  templateUrl: './navbardialog.component.html',
  styleUrls: ['./navbardialog.component.css'],
})
export class NavbardialogComponent implements OnInit {
  array: any[] = [];
  arrayOfProducts: any[] = [];
  updatedItems: any[] = [];
  totalPriceOfProduct:any;
  count:any;

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'Quantity',
    'symbol',
    'DisCart',
  ];

  constructor(private service: KifayatService) {}

  ngOnInit(): void {
    this.array = this.service.array;
    console.log('dialo', this.array);
    let productObject;
    this.array.forEach((data) => {
      productObject = {
        name: data.name,
        items: 1,
        price: Math.round(data.discounted_price),
        id: data.product_id,
        description: data.description,
      };
      this.arrayOfProducts.push(productObject);
    });
    this.count = this.arrayOfProducts.length;
  }

  incrementProduct(data: any) {
    data.items = data.items+1;
    console.log("dd", this.count);
  }

  decrementProduct(data: any) {
    if(data.items!=1){
      data.items = data.items-1;
    }
  }
  deleteThisItem(index:any){
    console.log("index",index)
    this.arrayOfProducts.splice(0, 1);
    console.log(this.arrayOfProducts,"Del")
  }

  givingTheCountofProducts(){
    this.service.gettingCount(this.count);
  }
}

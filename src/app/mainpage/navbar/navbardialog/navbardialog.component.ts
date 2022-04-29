import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  totalPriceOfProduct: any;
  count: any;
  total: any;

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
    this.total = this.arrayOfProducts.reduce((sum: any, item: any) => {
      return sum + item.price * item.items;
    }, 0);
  }

  incrementProduct(data: any) {
    data.items = data.items + 1;
    this.total = this.arrayOfProducts.reduce((sum: any, item: any) => {
      return sum + item.price * item.items;
    }, 0);
    console.log('CC', this.count);
  }

  decrementProduct(data: any) {
    if (data.items != 1) {
      data.items = data.items - 1;
      this.total = this.arrayOfProducts.reduce((sum: any, item: any) => {
        return sum + item.price * item.items;
      }, 0);
    }
  }
  deleteThisItem(index: any) {
    console.log('index', index);
    this.arrayOfProducts;
    console.log('indexArray', this.arrayOfProducts);
  }

  givingTheCountofProducts() {
    this.service.gettingCount(this.count);
  }
}

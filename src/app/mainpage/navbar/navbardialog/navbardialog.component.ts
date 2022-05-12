import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
  cartArray: any[] = [];
  cartArrayUpdated: any[] = [];
  total: any;

  cartArray$: Observable<any> = this.store.select((state) => {
    return (this.cartArray = state.cart);
  });

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'Quantity',
    'symbol',
    'DisCart',
  ];

  constructor(private store: Store<{ cart: any }>) {}

  ngOnInit(): void {
    this.cartArray$.subscribe();
    this.cartArray.forEach((data) => {
      let productObject;
      productObject = {
        name: data.cart.name,
        items: 1,
        price: Math.round(data.cart.discounted_price),
        id: data.cart.product_id,
        description: data.cart.description,
      };
      this.cartArrayUpdated.push(productObject);
    });
    this.total = this.cartArrayUpdated.reduce((sum: any, item: any) => {
      return sum + item.price * item.items;
    }, 0);
  }

  incrementProduct(data: any) {
    console.log('k', this.cartArrayUpdated);
    data.items = data.items + 1;
    this.total = this.cartArrayUpdated.reduce((sum: any, item: any) => {
      return sum + item.price * item.items;
    }, 0);
  }

  decrementProduct(data: any) {
    if (data.items != 1) {
      data.items = data.items - 1;
      this.total = this.cartArrayUpdated.reduce((sum: any, item: any) => {
        return sum + item.price * item.items;
      }, 0);
    }
  }
}


import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  FixedSizeVirtualScrollStrategy,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { loadProducts } from './store/kifayat.actions';
import { Categories } from './store/data.state';


export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 250, 500);
  }
}


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [
    { provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy },
  ],
})
export class SidebarComponent implements OnInit {

  
  getId: any;
  array: any[] = Categories;
  arrayOfProducts: any[] = [];

  cartArray:any[]=[];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts(null));
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
    });
  }

  onSelectCategory(data: any) {
    this.store.dispatch(loadProducts({ data: data }));
  }

  addToCart(data:any){
    console.log("gettingData", data);
    this.cartArray.push(data);
  }

}

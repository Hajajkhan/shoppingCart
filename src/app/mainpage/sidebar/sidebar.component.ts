import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  FixedSizeVirtualScrollStrategy,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { loadProducts } from './store/kifayat.actions';
import { Categories } from './store/data.state';
import { KifayatService } from 'src/app/kifayat.service';

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
  searchedArray:any[]=[];

  cartArray: any[] = [];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(private store: Store, private service: KifayatService) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts(null));
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
    });
  }

  onSelectCategory(data: any) {
    this.store.dispatch(loadProducts({ data: data }));
  }

  addToCart(data: any) {
    console.log('gettingData', data);
    this.cartArray.push(data);
    this.service.getDataForSharingToComponents(this.cartArray, this.arrayOfProducts);
    console.log("SSV", this.searchedArray);

  }

  gettingReviewsOfProduct(id:any){
    this.service.gettingReviews(id);
  }
}

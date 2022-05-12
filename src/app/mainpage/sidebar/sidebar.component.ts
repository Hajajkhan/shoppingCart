import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavbardialogComponent } from '../navbar/navbardialog/navbardialog.component';
import { Store } from '@ngrx/store';
import {
  FixedSizeVirtualScrollStrategy,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import {
  loadProducts,
  increment,
  loadProductsByCategory,
  loadCart,
  loadReviews,
} from './store/kifayat.actions';
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
  categories: any[] = Categories;
  arrayOfProducts: any[] = [];
  cartArray: any[] = [];

  cartItems$: Observable<any> = this.store.select((state) => {
    return state.cart;
  });
  $product = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(
    private store: Store<{ counter: Number; cart: any }>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.$product.subscribe((data: any) => {
      this.arrayOfProducts = data;
      this.$product.subscribe();
    });
    this.cartItems$.subscribe();
  }

  onSelectCategory(data: any) {
    this.store.dispatch(loadProductsByCategory({ data: data }));
  }

  addToCart(data: any) {
    this.store.dispatch(increment());
    this.store.dispatch(loadCart({ cart: data }));
    const dialogRef = this.dialog.open(NavbardialogComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }

  gettingReviewsOfProduct(id: any) {
    this.store.dispatch(loadReviews({ id: id }));
  }
}

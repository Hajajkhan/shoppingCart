import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProducts } from './store/kifayat.actions';
import { Categories } from './store/data.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  getId: any;
  array: any[] = Categories;
  arrayOfProducts: any[] = [];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
    });
  }

  onSelectCategory(data: any) {
    this.store.dispatch(loadProducts({ data: data }));
  }
}

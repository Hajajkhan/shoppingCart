import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-snapshot-detail',
  templateUrl: './snapshot-detail.component.html',
  styleUrls: ['./snapshot-detail.component.css'],
})
export class SnapshotDetailComponent implements OnInit {
  productId: any = '';
  arrayOfProducts: any[] = [];
  snapShotedItem: any[] = [];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(private store: Store, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.activatedroute.snapshot.params['id'];
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
    });
    this.arrayOfProducts.forEach((item) => {
      if (item.product_id === parseInt(this.productId)) {
        this.snapShotedItem = item;
      }
    });
    console.log(this.snapShotedItem);
  }
}

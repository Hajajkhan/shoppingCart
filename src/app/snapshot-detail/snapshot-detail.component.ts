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
  snapShotedItem: any = '';
  prodcutDetail: any[] = [];

  displayedColumns: string[] = ['name', 'review', 'rating'];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  $reviews: Observable<any> = this.store.select((state: any) => {
    return state.reviews.reviews;
  });

  constructor(
    private store: Store<{ reviews: any }>,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.$reviews.subscribe();
    this.productId = this.activatedroute.snapshot.params['id'];
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
    });
    this.arrayOfProducts.forEach((item) => {
      if (item.product_id === parseInt(this.productId)) {
        this.snapShotedItem = item;
        this.prodcutDetail.push(this.snapShotedItem);
      }
    });
  }
}

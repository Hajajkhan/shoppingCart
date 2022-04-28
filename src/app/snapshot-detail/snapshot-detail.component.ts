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
  review: any = '';
  comment: any[] = [];
  showComment: boolean = false;
  productId: any = '';
  arrayOfProducts: any[] = [];
  snapShotedItem: any = '';
  prodcutDetail: any[] = [];

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(private store: Store, private activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.activatedroute.snapshot.params['id'];
    this.$product.subscribe((data) => {
      this.arrayOfProducts = data;
      console.log('aray', this.arrayOfProducts);
    });
    this.arrayOfProducts.forEach((item) => {
      if (item.product_id === parseInt(this.productId)) {
        this.snapShotedItem = item;
        this.prodcutDetail.push(this.snapShotedItem);
        console.log('sssd', this.prodcutDetail);
      }
    });
    console.log(this.snapShotedItem);
  }
  addReview(data: any) {
    this.comment.push(data);
    this.review = '';
    this.showComment = true;
  }
}

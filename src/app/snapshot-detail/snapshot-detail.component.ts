import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { KifayatService } from '../kifayat.service';

@Component({
  selector: 'app-snapshot-detail',
  templateUrl: './snapshot-detail.component.html',
  styleUrls: ['./snapshot-detail.component.css'],
})
export class SnapshotDetailComponent implements OnInit {
  review: any = '';
  comment: any[] = [];
  showreview: boolean = false;
  productId: any = '';
  arrayOfProducts: any[] = [];
  snapShotedItem: any = '';
  prodcutDetail: any[] = [];
  reviewsArray:any;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  displayedColumns: string[] = ['name', 'review', 'rating'];
  

  $product: Observable<any> = this.store.select((state: any) => {
    return state.products.products;
  });

  constructor(private store: Store, private activatedroute: ActivatedRoute, private service:KifayatService) {}

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
    this.showreview = true;
    this.reviewsArray = this.service.reviews;
    console.log("ReviewsSnap", this.reviewsArray);

  }
 
 
}

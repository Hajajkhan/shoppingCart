import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import {
  loadProductsSucceed,
  loadProducts,
  loadProductsByCategory,
  loadProductsBySearch,
  loadProductsByCategorySucceed,
  loadProductsBySearchSucceed,
  loadReviews,
  loadReviewsSucceed,
} from './kifayat.actions';
import { KifayatService } from 'src/app/kifayat.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProducts),
      mergeMap(() => {
        return this.service.getDefaultProducts().pipe(
          //  tap((data) => console.log('TAPPING', data)),
          map((data) => loadProductsSucceed({ products: data }))
        );
      })
    )
  );

  loadCategorizedProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProductsByCategory),
      mergeMap((actions) => {
        return this.service.getProductsData(actions.data).pipe(
          //  tap((data) => console.log('TAPPINGCat', data)),
          map((data) => loadProductsByCategorySucceed({ products: data }))
        );
      })
    )
  );

  loadSearchedProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProductsBySearch),
      mergeMap((actions) => {
        return this.service.getSearchedData(actions.searched).pipe(
          //  tap((data) => console.log('TAPPINGSearch', data)),
          map((data) => loadProductsBySearchSucceed({ products: data }))
        );
      })
    )
  );

  loadReviews$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadReviews),
      mergeMap((actions) => {
        return this.service
          .gettingReviews(actions.id)
          .pipe(map((data) => loadReviewsSucceed({ reviews: data })));
      })
    )
  );

  constructor(private action$: Actions, private service: KifayatService) {}
}

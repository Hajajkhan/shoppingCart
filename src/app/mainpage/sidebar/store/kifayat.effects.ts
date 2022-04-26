import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, tap } from 'rxjs';
import {
  loadProductsSucceed,
  loadProducts,
} from './kifayat.actions';
import { KifayatService } from 'src/app/kifayat.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.service
          .getProductsData()
          .pipe(
            // tap((data) => console.log('TAPPING', data)),
            map((data) => 
            loadProductsSucceed({ products: data })))
      )
    )
  );
  constructor(private action$: Actions, private service: KifayatService) {}
}

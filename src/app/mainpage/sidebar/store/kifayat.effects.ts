import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, of, tap } from 'rxjs';
import { loadProductsSucceed, loadProducts } from './kifayat.actions';
import { KifayatService } from 'src/app/kifayat.service';

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProducts),
      mergeMap((actions) => {
        console.log('actions', actions);
        return this.service.getProductsData(actions.data).pipe(
          // tap((data) => console.log('TAPPING', data)),
          map((data) => loadProductsSucceed({ products: data }))
        );
      })
    )
  );
  constructor(private action$: Actions, private service: KifayatService) {}
}


// import { Injectable } from '@angular/core';
// import { createEffect, Actions, ofType } from '@ngrx/effects';
// import { catchError, EMPTY, map, mergeMap, of, tap } from 'rxjs';
// import {
//   loadCategorySucceed,
//   loadCategory,
//   loadProducts,
//   loadProductsSucceed,
// } from './kifayat.actions';
// import { KifayatService } from 'src/app/kifayat.service';
// import { Action } from '@ngrx/store';

// export class ProductEffects {
//     loadCategory$ = createEffect(() =>
//       this.action$.pipe(
//         ofType(loadCategory),
//         mergeMap(() =>
//           this.service
//             .getCategoriesData()
//             .pipe(
//               // tap((data) => console.log('TAPPING', data)),
//               map((data) => 
//               loadCategorySucceed({ category: data })))
//         )
//       )
//     );
//     constructor(private action$: Actions, private service: KifayatService) {}
//   }
  
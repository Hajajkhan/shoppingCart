import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[SideBarComponent] load products',
  props<any>()
);
export const loadProductsSucceed = createAction(
  '[SideBarComponent] load products succeed',
  props<any>()
);
export const loadProductsError = createAction(
  '[SideBarComponent] loading products failed'
);

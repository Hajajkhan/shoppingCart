import { createAction, props } from '@ngrx/store';

// export const loadCategory = createAction('[SideBarComponent] load category');
// export const loadCategorySucceed = createAction(
//   '[SideBarComponent] load category succeed',
//   props<any>()
// );
// export const loadCategoryError = createAction('[SideBarComponent] loading failed');

// Actions for Products
export const loadProducts = createAction('[SideBarComponent] load products');
export const loadProductsSucceed = createAction(
  '[SideBarComponent] load products succeed',
  props<any>()
);
export const loadProductsError = createAction('[SideBarComponent] loading products failed');
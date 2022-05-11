import { createAction, props } from '@ngrx/store';

//actions For Load Products
export const loadProducts = createAction('[SideBarComponent] load products');
export const loadProductsSucceed = createAction(
  '[SideBarComponent] load products succeed',
  props<any>()
);
export const loadProductsError = createAction(
  '[SideBarComponent] loading products failed'
);

//actions For Load Products by selected Categories
export const loadProductsByCategory = createAction(
  '[SideBarComponent] load category products',
  props<any>()
);
export const loadProductsByCategorySucceed = createAction(
  '[SideBarComponent] load category products succeed',
  props<any>()
);
export const loadProductsByCategoryError = createAction(
  '[SideBarComponent] loading category products failed'
);

//actions For Load Products by Searched
export const loadProductsBySearch = createAction(
  '[SideBarComponent] load searched products',
  props<any>()
);
export const loadProductsBySearchSucceed = createAction(
  '[SideBarComponent] load searched products succeed',
  props<any>()
);
export const loadProductsBySearchError = createAction(
  '[SideBarComponent] loading searched products failed'
);

//Increment actions
export const increment = createAction('[CounterComponnet] Increment');

export const loadCart = createAction(
  '[SideBar Component] addToCart',
  props<any>()
);

//actions for Load Reviews
export const loadReviews = createAction(
  '[SideBar Component] loadReviews',
  props<any>()
);

export const loadReviewsSucceed = createAction(
  '[SideBar Component] loadReviews succeed',
  props<any>()
);

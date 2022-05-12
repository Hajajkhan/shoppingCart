import { createReducer, on } from '@ngrx/store';
import {
  loadProductsSucceed,
  increment,
  loadProductsByCategorySucceed,
  loadProductsBySearchSucceed,
  loadCart,
  loadReviewsSucceed,
  loadReviews,
} from './kifayat.actions';

interface Applicationstate {
  data: any[];
}

const initialstate: Applicationstate = {
  data: [],
};

const cartItem: any[] = [];
const review: any[] = [];

const count = 0;

const _productsReducer = createReducer(
  initialstate,
  on(loadProductsSucceed, (state, { products }) => {
    let product = products.rows;
    return { ...state, products: product };
  }),

  on(loadProductsByCategorySucceed, (state, { products }) => {
    let product = products.rows;
    return { ...state, products: product };
  }),

  on(loadProductsBySearchSucceed, (state, { products }) => {
    let product = products.rows;
    return { ...state, products: product };
  })
);

const _counterReducer = createReducer(
  count,
  on(increment, (state) => state + 1)
);

const _cartItemReducer = createReducer(
  cartItem,
  on(loadCart, (state, value) => {
    return [...state, value];
  })
);

const _reviwesReducer = createReducer(
  review,
  on(loadReviewsSucceed, (state, { reviews }) => {
    console.log('rev', reviews);
    return { ...state, reviews: reviews };
  })
);

export function productReducer(state: any, action: any) {
  return _productsReducer(state, action);
}

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

export function cartReducer(state: any, action: any) {
  return _cartItemReducer(state, action);
}

export function reviewsReducer(state: any, action: any) {
  return _reviwesReducer(state, action);
}

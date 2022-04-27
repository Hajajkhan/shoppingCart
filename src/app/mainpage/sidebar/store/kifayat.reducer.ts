import { createReducer, on } from '@ngrx/store';
import { loadProductsSucceed } from './kifayat.actions';

interface Applicationstate {
  data: any[];
}
const initialstate: Applicationstate = {
  data: [],
};
const _productsReducer = createReducer(
  initialstate,
  on(loadProductsSucceed, (state, { products }) => {
    let product = products.rows;
    // let formedArray = category.rows;
    console.log('action', product);
    return { ...state, products: product };
  })
);

export function productReducer(state: any, action: any) {
  return _productsReducer(state, action);
}

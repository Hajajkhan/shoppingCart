import { createReducer, on } from '@ngrx/store';
import {
  loadData,
  loadDataError,
  loadDataSucceed,
} from './kifayat.actions';

interface Applicationstate {
  data: any[];
}
const initialstate: Applicationstate = {
  data: [],
};

const _kifayatDataReducer = createReducer(
  initialstate,
  on(loadDataSucceed, (state, { data }) => {
      console.log("@@", data);
    
    return { ...state, data: data };
  }),
  on(loadDataError, (state: any, action: any) => {
    console.log('failing', state);
    return state;
  })
);

export function kifayatDataReducer(state: any, action: any) {
  return _kifayatDataReducer(state, action);
}
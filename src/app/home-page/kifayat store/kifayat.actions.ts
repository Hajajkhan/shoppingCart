import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[SideBarComponent] load data', props<any>());
export const loadDataSucceed = createAction(
    '[SideBarComponent] load data Succeed',
  props<any>()
);
export const loadDataError = createAction('[SideBarComponent] loadinf Failed');
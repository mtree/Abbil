import { createReducer, on } from '@ngrx/store';
import { fetchDataSuccess, postDataSuccess } from './app.actions';

// TODO: Define the AppState interface and the initial state
export interface AppState {
  data: any;
  status: any;
}

export const appReducer = createReducer(
  { data: null, status: null },
  on(fetchDataSuccess, (state, { data }) => ({ ...state, data })),
  on(postDataSuccess, (state, { status }) => ({ ...state, status }))
);

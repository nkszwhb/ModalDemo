import {combineReducers, createStore} from 'redux';

import global, {GlobalState} from './global';

export interface ReducerState {
  global: GlobalState;
}

const reducers = combineReducers({
  global,
});

export default createStore(reducers);

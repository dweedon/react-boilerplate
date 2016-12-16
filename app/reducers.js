import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { handleActions } from 'redux-actions';

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

const routeReducer = handleActions({
  [LOCATION_CHANGE]: (state, { payload }) => state.merge({
    locationBeforeTransitions: payload,
  }),
}, routeInitialState);

const createReducers = (asyncReducers) => combineReducers({
  route: routeReducer,
  ...asyncReducers,
});

export default createReducers;

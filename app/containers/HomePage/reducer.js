import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  counter: 0,
});

export default handleActions({
  INCREMENT: (state, { payload }) => state.update('counter', (curr) => curr + payload),
  DECREMENT: (state, { payload }) => state.update('counter', (curr) => curr - payload),
}, defaultState);

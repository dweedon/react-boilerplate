import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectCounter = () => createSelector(
  selectHome(),
  (state) => state.get('counter')
);

export {
  selectHome,
  selectCounter,
};

import { increment, decrement } from './actions';

export const doIncrement = (action$) =>
  action$.ofType('DO_INCREMENT')
    .delay(1000)
    .map(({ payload }) => increment(payload));

export const doDecrement = (action$) =>
  action$.ofType('DO_DECREMENT')
    .delay(1000)
    .map(({ payload }) => decrement(payload));

export default [
  doIncrement,
  doDecrement,
];

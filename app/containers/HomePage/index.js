/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCounter } from './selectors';
import { doIncrement, doDecrement } from './actions';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    onIncrement: React.PropTypes.func,
    onDecrement: React.PropTypes.func,
    counter: React.PropTypes.number,
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.props.counter}</h1>
        <button onClick={(e) => { e.preventDefault(); this.props.onIncrement(); }}>Increment</button>
        <button onClick={(e) => { e.preventDefault(); this.props.onDecrement(); }}>Decrement</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(doIncrement(1)),
  onDecrement: () => dispatch(doDecrement(1)),
});

const mapStateToProps = createStructuredSelector({
  counter: selectCounter(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

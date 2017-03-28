import { Component }  from 'react';
import { createStore } from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer, 1);

const INCREMENT = {
  type: 'INCREMENT'
};

const DECREMENT = {
  type: 'DECREMENT'
};

export default class extends Component {
  render () {
    return (
      <div onClick={() => store.dispatch(INCREMENT)}
        style={{width: '50px', background: 'blue', height: '50px'}}>{this.props.count}</div>
    );
  }
}

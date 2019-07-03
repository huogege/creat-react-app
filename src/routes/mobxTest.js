import React from 'react'
import { Link } from 'react-router-dom'

import { observable, action, autorun, useStrict } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';

//useStrict(true);

class MyState {
  @observable num = 0;
  @action addNum = () => {
    this.num++;
  };
}

const newState = new MyState();

@observer
class MobxTest extends React.Component {
  render() {
    return (
      <div>
        <p>{newState.num}</p>
        <button onClick={newState.addNum}>+1</button>
      </div>
    )
  }
}
export  default MobxTest
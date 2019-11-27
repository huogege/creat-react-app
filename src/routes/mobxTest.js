import React from 'react'
import { Link } from 'react-router-dom'

import { observable, action, autorun, useStrict } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';


class Store{
  @observable string = 'abc'
  @observable number = 123
  @observable bool = false
  @observable arr = [1, 2, 3]
  @observable obj = {
    aa: 11,
    bb: 22
  }
}

let store = new Store()
console.log(store)

class MyState {
  @observable num = 0;
  @action addNum = () => {
    this.num++;
  };
}

const newState = new MyState();

autorun(() => {
  console.log(newState.num) //自动捕捉变化的参数，并触发autorun
})
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
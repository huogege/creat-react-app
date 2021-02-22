
const createStore = (reducer) => {
  let initState = {};
  let observers = []; //储存 观察者
  function getState() {
    return initState;
  }
  function dispatch(action) {
    initState = reducer(initState, action);
    observers.forEach(fn => {
      fn()
    }) 
  }
  function subscribe(fn) {
    observers.push(fn);
  }
  dispatch({type:'@reduxInit'})  //初始化，让initState=传入的state
  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore;

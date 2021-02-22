import {createStore,  combineReducers, applyMiddleware} from 'redux'
import reducer1 from './reducer1'
import reducer2 from './reducer2'
import thunk from 'redux-thunk'
const reducers = combineReducers({reducer1,reducer2} )
const store = createStore(reducers, applyMiddleware(thunk))
export default store
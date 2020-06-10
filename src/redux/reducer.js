import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,


} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function counter(state = { count: 0 }, action) {
  
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    case 'decrease':
      return { count: count - 1 }
    default:
      return state
  }
}
function fromAjax(state={payload: {}}, action) {
  switch (action.type) {
    case 'requestGetType':
      
    case 'requestGetedType':
     
      return {
        payload : action.payload
      }

    default: return state
  }
}
const todoApp = combineReducers({
  visibilityFilter,
  todos,
  counter,
  fromAjax,
})

export default todoApp
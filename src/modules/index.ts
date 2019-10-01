import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import skills from './skills/'
import experiences from './experience'
import educations from './education'

const reducers = combineReducers({
  experiences,
  skills,
  educations
})

export function getStore(initialState: any) {
  return createStore(reducers, initialState, composeWithDevTools())
}

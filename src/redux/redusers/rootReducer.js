import {combineReducers} from 'redux'
import {tariffsReduser} from './tariffsReduser'

export const rootReducer = combineReducers({
  tariffsRed: tariffsReduser,
})

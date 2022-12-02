// import {combineReducers} from 'redux'
import {getUserDataReducer} from './Reducers'
import {combineReducers} from 'redux'

const rootCombineReducers = combineReducers({
    data:getUserDataReducer
})

export default rootCombineReducers;
import {createStore} from 'redux'
import rootCombineReducers from './rootCombineReducers'

const Store = createStore(
    rootCombineReducers
)
export default Store
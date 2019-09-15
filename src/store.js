import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import LoginReducer from './components/Login/reducer'

const rootReducer = combineReducers({
  Login: LoginReducer
})

const middleware = []
middleware.push(thunk)

export default createStore(rootReducer, applyMiddleware(...middleware))
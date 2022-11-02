import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { legacy_createStore as createStore } from 'redux'
import {
  getProfileUserReducer,
  loginUserReducer,
  registerUserReducer,
  updateProfileUserReducer,
} from './UserDetails/userReducers'

const reducer = combineReducers({
  userLogin: loginUserReducer,
  userRegister: registerUserReducer,
  userDetails: getProfileUserReducer,
  userUpdateProfile: updateProfileUserReducer,
})
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = { userLogin: { userInfo: userInfoFromLocalStorage } }
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store

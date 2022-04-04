import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {auth_reducer} from './Reducers/AuthReducer'
import { attendenceReducer} from './Reducers/AttendenceReducer'
import { student_reducer } from './Reducers/StudentReducer'

const initialState = {}

const middleware = [thunk]

const reducer = combineReducers({
    auth:auth_reducer,
    attendence:attendenceReducer,
    student:student_reducer
})

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
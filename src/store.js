import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import mainSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mainSaga)

export default store

import {createStore , applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'

import RootReducer from './redux/reducers/RootReducer'

import RootSaga from './redux/sagas/RootSagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer , applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga);

export default store
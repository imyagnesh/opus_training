/* eslint-disable require-yield */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

let middleWare = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleWare = composeEnhancers(middleWare);
}
const store = createStore(rootReducer, middleWare);

sagaMiddleware.run(rootSaga);

export default store;

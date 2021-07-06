// outsource dependencies
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';

// local dependencies
import rootSaga from './saga';
import rootReducer from './reducer';

function bindMiddleware (middleware) {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

function makeStore () {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper(makeStore, { debug: false });

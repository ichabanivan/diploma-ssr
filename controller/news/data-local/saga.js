
// outsource dependencies
import { fork, cancel, put, takeEvery } from 'redux-saga/effects';

// local dependencies
import { TYPE } from './reducer';

import main from './main.json';
import aside from './aside.json';

function * initializeSaga () {
  yield put({ type: TYPE.META, disabled: true });
  yield put({
    type: TYPE.META,
    payload: {
      list: main?.articles,
      aside: aside?.articles,
    }
  });
  yield put({ type: TYPE.META, initialized: true, disabled: false });
}

/**
 * connect page sagas
 *
 */
function * activityTasks () {
  yield takeEvery(TYPE.INITIALIZE, initializeSaga);
}

/**
 * define activity behavior
 * on component unmount we fire action clear to bring reducer data to default and here
 * we renew all sagas to prevent executing actions which does not finish yet
 */
export default function * activity () {
  let activity = yield fork(activityTasks);
  yield takeEvery(TYPE.CLEAR, function * () {
    yield cancel(activity);
    activity = yield fork(activityTasks);
  });
}


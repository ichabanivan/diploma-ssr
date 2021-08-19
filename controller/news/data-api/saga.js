
// outsource dependencies
import { fork, cancel, put, takeEvery, call } from 'redux-saga/effects';

// local dependencies
import { TYPE } from './reducer';
import instanceNEWS from '../../../services/api.service';

function * initializeSaga () {
  yield put({ type: TYPE.META, disabled: true });
  try {
    const main = yield call(instanceNEWS, {
      url: '/everything',
      params: {
        q: 'Ukraine',
        sortBy: 'publishedAt',
        apiKey: 'f01c948178be420fb162319fa7f9ff37'
      }
    });
    const aside = yield call(instanceNEWS, {
      url: '/everything',
      params: {
        q: 'sport',
        pageSize: 10,
        sortBy: 'publishedAt',
        apiKey: 'f01c948178be420fb162319fa7f9ff37'
      }
    });
    yield put({
      type: TYPE.META,
      payload: {
        list: main?.articles,
        aside: aside?.articles,
      }
    });
  } catch (error) {
    console.error(error);
  }
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


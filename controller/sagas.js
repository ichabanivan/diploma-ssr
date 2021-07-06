
// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import news from './news/sagas';

/**
 * connect all public sagas
 *
 *
 * @public
 */
export default function * () {
  yield fork(news);
}


// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import list from './list/saga';
import news from './news/saga';

/**
 * connect all public sagas
 *
 *
 * @public
 */
export default function * () {
  yield fork(list);
  yield fork(news);
}

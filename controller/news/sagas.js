
// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import news from './news/saga';
import dataAPI from './data-api/saga';
import dataLocal from './data-local/saga';
import imagesResized from './images-resized/saga';
import imagesOriginal from './images-original/saga';
import imagesCompressed from './images-compressed/saga';

/**
 * connect all public sagas
 *
 *
 * @public
 */
export default function * () {
  yield fork(news);
  yield fork(dataAPI);
  yield fork(dataLocal);
  yield fork(imagesResized);
  yield fork(imagesOriginal);
  yield fork(imagesCompressed);
}

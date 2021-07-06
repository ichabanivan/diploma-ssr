import { fork } from 'redux-saga/effects';
import controller from './controller/sagas';

export default function * () {
  yield fork(controller);
}


import { HYDRATE } from 'next-redux-wrapper';

import controller from './controller/reducers.js';

function rootReducer (state = {}, action) {
  // console.log('HYDRATE', HYDRATE, action)

  switch (action.type) {
    case HYDRATE: {
      state = { ...state, ...action.payload };
      break;
    }

    default:
      state = controller(state, action);
  }

  return state;
}

export default rootReducer;

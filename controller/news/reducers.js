// outsource dependencies
import { combineReducers } from 'redux';

// local dependencies
import news from './news/reducer';
import list from './list/reducer';
import dataAPI from './data-api/reducer';
import dataLocal from './data-local/reducer';
import imagesResized from './images-resized/reducer';
import imagesOriginal from './images-original/reducer';
import imagesCompressed from './images-compressed/reducer';

// export
const reducer = combineReducers({
  list,
  news,
  dataAPI,
  dataLocal,
  imagesResized,
  imagesOriginal,
  imagesCompressed,
});

export default reducer;

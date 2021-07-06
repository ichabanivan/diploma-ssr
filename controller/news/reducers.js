// outsource dependencies
import { combineReducers } from 'redux';

// local dependencies
import news from './news/reducer';
import list from './list/reducer';

// export
const reducer = combineReducers({
  list,
  news,
});

export default reducer;

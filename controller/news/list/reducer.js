
// TYPES
export const TYPE = (prefix => ({
  PREFIX: new RegExp(prefix, 'i'),
  // simple action
  META: `${prefix}META`,
  CLEAR: `${prefix}CLEAR`,
  // complex actions
  INITIALIZE: `${prefix}INITIALIZE`,
}))('@news/list/');

// SELECTOR
export const selector = state => state.news.list;

// INITIAL STORE
const initial = {
  initialized: false,
  errorMessage: null,
  disabled: false,

  list: [],
  category: '',
};

// REDUCER
export default function reducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case TYPE.CLEAR:
      return initial;
    case TYPE.META:
      return Object.assign({}, state, payload);
  }
}

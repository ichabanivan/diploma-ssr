// local dependencies
import news from './news/reducers';

// export
const controller = (state, action) => ({
  news: news(state.news, action),
});

export default controller;

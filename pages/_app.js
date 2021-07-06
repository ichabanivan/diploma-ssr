// outsource dependencies
import React from 'react';
import PropTypes from 'prop-types';

// local dependencies
import { wrapper } from '../store';

// styles
import '../styles/all.scss';

function App ({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
App.propTypes = {
  pageProps: PropTypes.any.isRequired,
  Component: PropTypes.any.isRequired,
};

export default wrapper.withRedux(App);

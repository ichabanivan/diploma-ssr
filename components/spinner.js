// outsource dependencies
import React from 'react';
import PropTypes from 'prop-types';

// local dependencies
import { FasIcon } from './fa-icon';

export const Spinner = ({ active, ...attr }) => !active
  ? null
  : <FasIcon icon="spinner" spin {...attr} />;

Spinner.propTypes = {
  active: PropTypes.bool.isRequired,
};
Spinner.defaultProps = {};

export default Spinner;

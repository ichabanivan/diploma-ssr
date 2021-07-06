// outsource dependencies
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// NOTE production connected icons make sure in the repo wos not present development (unused) icons
library.add(fas);

export default FontAwesomeIcon;

const defaultProps = {};
const propTypes = {
  icon: PropTypes.string.isRequired
};

export const FasIcon = memo(({ icon, ...attr }) => <FontAwesomeIcon
  icon={['fas', icon]}
  {...attr}
/>);
FasIcon.propTypes = propTypes;
FasIcon.defaultProps = defaultProps;

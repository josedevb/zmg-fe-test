import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './OutlinedButton.styled';

const OutlinedButton = ({ text, ...props }) => (
  <StyledButton {...props}>{text}</StyledButton>
);

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  inverseColors: PropTypes.bool
};

OutlinedButton.defaultProps = {
  inverseColors: false
};

export default OutlinedButton;

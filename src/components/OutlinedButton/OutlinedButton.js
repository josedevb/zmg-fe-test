import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './OutlinedButton.styled';

const OutlinedButton = ({ text }) => <StyledButton>{text}</StyledButton>;

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default OutlinedButton;

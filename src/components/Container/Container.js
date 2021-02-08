import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './Container.styled';
import { containerAnimation } from '~/constants/animations';

const Container = ({ centered, children, fluid, limit, relative, ...rest }) => (
  <StyledContainer
    {...rest}
    fluid={fluid}
    limit={limit}
    centered={centered}
    relative={relative}
    initial={containerAnimation.initial}
    animate={containerAnimation.animate}
    transition={containerAnimation.transition}
  >
    {children}
  </StyledContainer>
);

Container.propTypes = {
  limit: PropTypes.bool,
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
  relative: PropTypes.bool
};

Container.defaultProps = {
  fluid: false,
  limit: false,
  centered: true,
  relative: true
};

export default Container;

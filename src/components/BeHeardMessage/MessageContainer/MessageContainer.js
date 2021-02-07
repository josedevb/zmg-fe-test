import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Container from '~/components/Container/Container';
import { StyledContainer, StyledCloseIcon } from './MessageContainer.styled';

const MessageContainer = ({ children, containerProps }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onClickCloseIcon = () => setIsOpen(false);

  return (
    isOpen && (
      <Container {...containerProps}>
        <StyledContainer>
          {children}
          <StyledCloseIcon onClick={onClickCloseIcon}>
            <Image
              priority
              layout='fill'
              quality={100}
              loading='eager'
              objectFit='cover'
              src='/icons/close.svg'
            />
          </StyledCloseIcon>
        </StyledContainer>
      </Container>
    )
  );
};

MessageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  containerProps: PropTypes.shape({})
};

MessageContainer.defaultProps = {
  containerProps: {}
};

export default MessageContainer;

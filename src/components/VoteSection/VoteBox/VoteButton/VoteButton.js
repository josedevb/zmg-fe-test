import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { VoteSummary, VoteThumb } from './VoteButton.styled';

const VoteButton = ({ isLike, disabled, panel }) => {
  const img = isLike ? '/icons/like.svg' : '/icons/dislike.svg';

  return (
    <VoteThumb isLike={isLike} disabled={disabled} panel={panel}>
      <VoteSummary>
        <Image src={img} layout='fill' loading='lazy' objectFit='cover' />
      </VoteSummary>
    </VoteThumb>
  );
};

VoteButton.propTypes = {
  isLike: PropTypes.bool,
  disabled: PropTypes.bool,
  panel: PropTypes.bool
};

VoteButton.defaultProps = {
  isLike: false,
  disabled: false,
  panel: false
};

export default VoteButton;

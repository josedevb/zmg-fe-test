import Image from 'next/image';
import PropTypes from 'prop-types';

import { icons } from '~/config/constants/assets';
import { VoteSummary, VoteThumb } from './VoteButton.styled';

const VoteButton = (props) => {
  const { isLike } = props;
  const img = isLike ? icons.like : icons.dislike;

  return (
    <VoteThumb {...props}>
      <VoteSummary>
        <Image src={img} layout='fill' loading='lazy' objectFit='cover' />
      </VoteSummary>
    </VoteThumb>
  );
};

VoteButton.propTypes = {
  panel: PropTypes.bool,
  isLike: PropTypes.bool,
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

VoteButton.defaultProps = {
  panel: false,
  isLike: false,
  selected: false,
  disabled: false
};

export default VoteButton;

import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledPercentage,
  StyledPercentageLogo,
  StyledPercentageText
} from './VotesRating.styled';
import votesActions from '~/config/constants/votes';

const VotesRating = ({ likesPercentage, dislikesPercentage }) => (
  <StyledContainer>
    <StyledPercentage type={votesActions.like} width={`${likesPercentage}%`}>
      <StyledPercentageLogo>
        <Image
          quality={100}
          loading='lazy'
          layout='fill'
          objectFit='contain'
          src='/icons/like.svg'
        />
      </StyledPercentageLogo>
      <StyledPercentageText>{likesPercentage}</StyledPercentageText>
    </StyledPercentage>
    <StyledPercentage
      type={votesActions.dislike}
      width={`${dislikesPercentage}%`}
    >
      <StyledPercentageLogo>
        <Image
          quality={100}
          loading='lazy'
          layout='fill'
          objectFit='contain'
          src='/icons/dislike.svg'
        />
      </StyledPercentageLogo>
      <StyledPercentageText>{dislikesPercentage}</StyledPercentageText>
    </StyledPercentage>
  </StyledContainer>
);

VotesRating.propTypes = {
  likesPercentage: PropTypes.number,
  dislikesPercentage: PropTypes.number
};

VotesRating.defaultProps = {
  likesPercentage: 0,
  dislikesPercentage: 0
};

export default VotesRating;

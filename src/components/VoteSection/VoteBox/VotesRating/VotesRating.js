import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledPercentage,
  StyledPercentageLogo,
  StyledPercentageText
} from './VotesRating.styled';
import { icons } from '~/config/constants/assets';
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
          src={icons.like}
        />
      </StyledPercentageLogo>
      <StyledPercentageText>{likesPercentage}</StyledPercentageText>
    </StyledPercentage>
    <StyledPercentage
      type={votesActions.dislike}
      width={`${dislikesPercentage}%`}
    >
      <StyledPercentageText>{dislikesPercentage}</StyledPercentageText>
      <StyledPercentageLogo>
        <Image
          quality={100}
          loading='lazy'
          layout='fill'
          objectFit='contain'
          src={icons.dislike}
        />
      </StyledPercentageLogo>
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

import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import VotesRating from './VotesRating/VotesRating';
import VotesActions from './VotesAction/VotesActions';
import VoteButton from './VoteButton/VoteButton';
import {
  StyledName,
  StyledTime,
  VoteContent,
  VoteTitle,
  StyledCategory,
  VoteInformation,
  StyledContainer,
  StyledDescription,
  StyledTimeAndCategory
} from './VoteBox.styled';
import useVote from '~/hooks/useVote';
import useTranslations from '~/hooks/useTranslation';

const VoteBox = ({ person, isEven }) => {
  const { likes, dislikes } = person.votes;
  const { t } = useTranslations();
  const isLiked = likes > dislikes;

  const { likesPercentage, dislikesPercentage } = useVote({
    likes,
    dislikes
  });

  return (
    <StyledContainer isEven={isEven}>
      <Image
        src={person.image}
        layout='fill'
        loading='lazy'
        objectFit='cover'
      />
      <VoteContent>
        <VoteTitle>
          <VoteButton isLike={isLiked} disabled />
          <StyledName>{person.name}</StyledName>
        </VoteTitle>
        <VoteInformation>
          <StyledTimeAndCategory>
            <StyledTime>
              {person.time} {t('vote.month')}
            </StyledTime>
            <StyledCategory>
              {t('vote.in')} {person.category}
            </StyledCategory>
          </StyledTimeAndCategory>
          <StyledDescription>{person.description}</StyledDescription>
          <VotesActions />
        </VoteInformation>
      </VoteContent>
      <VotesRating
        likesPercentage={likesPercentage}
        dislikesPercentage={dislikesPercentage}
      />
    </StyledContainer>
  );
};

VoteBox.propTypes = {
  isEven: PropTypes.bool.isRequired,
  person: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    time: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    votes: PropTypes.shape({
      likes: PropTypes.number,
      dislikes: PropTypes.number
    })
  }).isRequired
};

export default VoteBox;

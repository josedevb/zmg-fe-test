import Image from 'next/image';
import PropTypes from 'prop-types';

import {
  StyledName,
  StyledTime,
  VoteContent,
  VoteTitle,
  StyledCategory,
  VoteInformation,
  StyledContainer,
  StyledTimeAndCategory
} from './VoteBox.styled';
import useVote from '~/hooks/useVote';
import VoteButton from './VoteButton/VoteButton';
import VotesRating from './VotesRating/VotesRating';
import VotesActions from './VotesAction/VotesActions';
import useTranslations from '~/hooks/useTranslation';

const VoteBox = ({ person, isEven }) => {
  const { t } = useTranslations();
  const { likesPercentage, dislikesPercentage } = useVote(person.votes);

  return (
    <StyledContainer isEven={isEven}>
      <Image
        layout='fill'
        loading='lazy'
        objectFit='cover'
        src={person.image}
      />
      <VoteContent>
        <VoteTitle>
          <VoteButton
            disabled
            isLike={person.votes.likes > person.votes.dislikes}
          />
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
          <VotesActions person={person} />
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

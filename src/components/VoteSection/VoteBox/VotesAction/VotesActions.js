import { useState } from 'react';
import PropTypes from 'prop-types';

import voteTypes from '~/constants/votes';
import { VoteButtons } from '../VoteBox.styled';
import VoteButton from '../VoteButton/VoteButton';
import useTranslation from '~/hooks/useTranslation';
import { StyledDescription } from './VotesActions.styled';
import updateUserVotes from '~/config/api/updateUserVotes';
import OutlinedButton from '~/components/OutlinedButton/OutlinedButton';

const VotesActions = ({ person }) => {
  const { t } = useTranslation();
  const { likes, dislikes } = person.votes;
  const [userVote, setUserVote] = useState(false);
  const [voteSelection, setVoteSelection] = useState('');

  const resetVote = () => {
    setVoteSelection('');
    setUserVote(!userVote);
  };

  const handleVote = async (id, vote) => {
    if (vote) {
      const calculatedVote =
        vote === voteTypes.like
          ? { likes: likes + 1 }
          : { dislikes: dislikes + 1 };

      await updateUserVotes(id, calculatedVote);
      setUserVote(true);
    }
  };

  return (
    <>
      <StyledDescription userVote={userVote}>
        {userVote ? t('vote.thanks') : person.description}
      </StyledDescription>
      {userVote ? (
        <OutlinedButton
          inverseColors
          onClick={resetVote}
          text={t('vote.again')}
          handleVote={handleVote}
        />
      ) : (
        <VoteButtons>
          <VoteButton
            panel
            isLike
            selected={voteSelection === voteTypes.like}
            onClick={() => setVoteSelection(voteTypes.like)}
          />
          <VoteButton
            selected={voteSelection === voteTypes.dislike}
            onClick={() => setVoteSelection(voteTypes.dislike)}
            panel
          />
          <OutlinedButton
            inverseColors
            text={t('vote.button')}
            onClick={() => handleVote(person.id, voteSelection)}
          />
        </VoteButtons>
      )}
    </>
  );
};

VotesActions.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    votes: PropTypes.shape({
      likes: PropTypes.number,
      dislikes: PropTypes.number
    })
  }).isRequired
};

export default VotesActions;

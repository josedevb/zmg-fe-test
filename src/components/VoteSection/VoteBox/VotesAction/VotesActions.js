import React from 'react';

import { VoteButtons } from '../VoteBox.styled';
import VoteButton from '~/components/VoteButton/VoteButton';
import OutlinedButton from '~/components/OutlinedButton/OutlinedButton';

const VotesActions = () => (
  <VoteButtons>
    <VoteButton panel isLike />
    <VoteButton panel />
    <OutlinedButton color='primary' text='Vote now' />
  </VoteButtons>
);

export default VotesActions;

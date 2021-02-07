import React from 'react';

import { VoteButtons } from '../VoteBox.styled';
import VoteButton from '../VoteButton/VoteButton';
import OutlinedButton from '~/components/OutlinedButton/OutlinedButton';

const VotesActions = () => (
  <VoteButtons>
    <VoteButton panel isLike />
    <VoteButton panel />
    <OutlinedButton inverseColors text='Vote now' />
  </VoteButtons>
);

export default VotesActions;

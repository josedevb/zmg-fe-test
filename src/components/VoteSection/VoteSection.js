import React from 'react';
import PropTypes from 'prop-types';

import VoteBox from './VoteBox/VoteBox';
import useTranslation from '~/hooks/useTranslation';
import Container from '~/components/Container/Container';
import { StyledSectionTitle, StyledVoteStrap } from './VoteSection.styled';

const VoteSection = ({ persons }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <StyledSectionTitle>{t('vote.title')}</StyledSectionTitle>
      <StyledVoteStrap>
        {persons.map((person, index) => (
          <VoteBox
            key={`voted-person-${index}`}
            person={person}
            isEven={index % 2 === 0}
          />
        ))}
      </StyledVoteStrap>
    </Container>
  );
};

VoteSection.propTypes = {
  persons: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default VoteSection;

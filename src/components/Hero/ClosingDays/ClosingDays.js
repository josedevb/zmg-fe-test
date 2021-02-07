import PropTypes from 'prop-types';

import {
  StyledTime,
  StyledMessage,
  StyledUnitTime,
  StyledContainer,
  StyledTimeContainer,
  StyledMessageContainer
} from './ClosingDays.styled';
import useTranslation from '~/hooks/useTranslation';

const ClosingDays = ({ days }) => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledMessageContainer>
        <StyledMessage>{t('hero.closingIn')}</StyledMessage>
      </StyledMessageContainer>
      <StyledTimeContainer>
        <StyledTime>{days}</StyledTime>
        <StyledUnitTime>{t('hero.uniteTime')}</StyledUnitTime>
      </StyledTimeContainer>
    </StyledContainer>
  );
};

ClosingDays.propTypes = {
  days: PropTypes.number.isRequired
};

export default ClosingDays;

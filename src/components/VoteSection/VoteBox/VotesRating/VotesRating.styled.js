import styled from 'styled-components';

import widthMixin from '~/styles/core/mixins';
import votesActions from '~/config/constants/votes';

export const StyledContainer = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.elevation.fixed};
  height: 45px;
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.font.secondary};
  font-size: ${({ theme }) => theme.font.size.h5};
  font-weight: 400;
`;

export const StyledPercentage = styled.div`
  ${widthMixin}
  display: flex;
  position: relative;
  align-items: center;
  justify-content: ${({ type }) =>
    type === votesActions.like ? 'flex-start' : 'flex-end'};
  padding-left: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme, type }) =>
    type === votesActions.like
      ? theme.colors.bg.goodVoteCrystal
      : theme.colors.bg.badVoteCrystal};
`;

export const StyledPercentageLogo = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`;

export const StyledPercentageText = styled.span`
  margin: ${({ theme }) => theme.spacing(2)};
  :after {
    content: '%';
    font-size: ${({ theme }) => theme.font.size.subtitle3};
  }
`;

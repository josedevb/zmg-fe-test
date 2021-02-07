import styled from 'styled-components';

export const VoteThumb = styled.div`
  padding: 5px;
  display: flex;
  position: relative;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme, panel }) =>
    panel ? theme.spacing(3) : theme.spacing(2)};
  margin-bottom: ${({ theme, panel }) => (panel ? '0px' : theme.spacing(1.8))};
  height: auto;
  width: auto;
  background-color: ${({ theme, isLike }) =>
    isLike ? theme.colors.bg.goodVote : theme.colors.bg.badVote};

  ${({ theme }) => theme.devices.laptop} {
    height: 25px;
    width: 25px;
    margin-bottom: ${({ theme, panel }) =>
      panel ? '0px' : theme.spacing(2.2)};
  }
`;

export const VoteSummary = styled.div`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

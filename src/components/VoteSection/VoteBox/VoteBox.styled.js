import styled from 'styled-components';

export const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-basis: 100%;
  min-height: 550px;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  :before {
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 450px;
    position: absolute;
    background: linear-gradient(
      180deg,
      transparent,
      ${({ theme }) => theme.gradient.lightBlack}
    );
    z-index: ${({ theme }) => theme.elevation.fixed};
  }

  ${({ theme }) => theme.devices.laptop} {
    flex-basis: 40%;
    margin: ${({ theme, isEven }) =>
      isEven ? theme.spacing(0, 6, 10, 0) : theme.spacing(0, 0, 10, 6)};
  }
`;

export const VoteContent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  z-index: ${({ theme }) => theme.elevation.fixed};
`;

export const VoteTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const StyledName = styled.h2`
  display: flex;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font.secondary};
  font-size: ${({ theme }) => theme.font.size.h4};
  ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.font.size.h2};
  }
`;

export const StyledTime = styled.p`
  color: ${({ theme }) => theme.colors.font.secondary};
  font-weight: bold;
  margin-right: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.font.size.caption};
`;

export const StyledCategory = styled.p`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.font.secondary};
  font-size: ${({ theme }) => theme.font.size.caption};
`;

export const VoteInformation = styled.div`
  padding: ${({ theme }) => theme.spacing(0, 0, 5, 10)};
`;

export const StyledTimeAndCategory = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing(1, 0, 5, 0)};
`;

export const VoteButtons = styled.div`
  display: flex;
  align-items: center;
`;

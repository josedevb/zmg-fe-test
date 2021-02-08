import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 506px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledButton = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isLike }) =>
    isLike ? theme.votes.like : theme.votes.dislike};
  &:hover {
    opacity: 0.9;
  }
`;

export const StyledImageContainer = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
`;

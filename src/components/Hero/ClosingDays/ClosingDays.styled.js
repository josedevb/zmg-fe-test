import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 55px;
  display: flex;
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 35%;
  padding-right: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.font.secondary};
  background-color: ${({ theme }) => theme.bg.crystalBlack};
  position: relative;
  :after {
    content: '';
    position: absolute;
    right: -10px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.bg.crystalBlack};
  }
`;

export const StyledMessage = styled.span`
  text-transform: uppercase;
`;

export const StyledTimeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 65%;
  padding-left: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.font.primary};
  background-color: ${({ theme }) => theme.bg.crystalWhite};
  font-size: ${({ theme }) => theme.font.size.h4};
`;

export const StyledTime = styled.span``;

export const StyledUnitTime = styled.span`
  margin-left: ${({ theme }) => theme.spacing(2)};
  font-weight: 300;
`;

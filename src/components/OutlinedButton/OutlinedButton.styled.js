import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid
    ${({ theme, inverseColors }) =>
      inverseColors
        ? theme.colors.border.secondary
        : theme.colors.border.primary};
  padding: ${({ theme }) => theme.spacing(3, 5)};
  color: ${({ theme, inverseColors }) =>
    inverseColors ? theme.colors.font.secondary : theme.colors.font.primary};
  font-weight: bold;
  :hover {
    color: ${({ theme }) => theme.colors.font.primary};
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }
`;

export default StyledButton;

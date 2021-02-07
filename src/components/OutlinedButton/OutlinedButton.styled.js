import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  padding: ${({ theme }) => theme.spacing(3, 5)};
  color: ${({ theme }) => theme.colors.font.secondary};
  font-weight: bold;
  :hover {
    color: ${({ theme }) => theme.colors.font.primary};
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }
`;

export default StyledButton;

import styled from 'styled-components';

export const StyledDescription = styled.p`
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  width: ${({ userVote }) => (userVote ? '100%' : '70%')};
  color: ${({ theme }) => theme.colors.font.secondary};
  font-size: ${({ theme }) => theme.font.size.subtitle1};
`;

export default StyledDescription;

import styled from 'styled-components';

export const StyledSectionTitle = styled.h2`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.h2};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const StyledVoteStrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${({ theme }) => theme.devices.laptop} {
    justify-content: space-between;
  }
`;

export default StyledSectionTitle;

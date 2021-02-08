import styled from 'styled-components';
import OutlinedButton from '~/components/OutlinedButton/OutlinedButton';

export const StyledContainer = styled.div`
  width: auto;
  position: relative;
  padding: ${({ theme }) => theme.spacing(4, 5)};
  background-color: ${({ theme }) => theme.colors.bg.banner};
  text-align: center;
  ${({ theme }) => theme.devices.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledMessage = styled.h6`
  font-size: ${({ theme }) => theme.font.size.h4};
  font-weight: 300;
`;

export const StyledOutlinedButton = styled(OutlinedButton)`
  margin-top: ${({ theme }) => theme.spacing(5)};
  border: 3px solid ${({ theme }) => theme.colors.border.primary} !important;

  ${({ theme }) => theme.devices.tablet} {
    margin-top: 0;
  }
`;

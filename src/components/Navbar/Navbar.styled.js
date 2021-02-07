import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding-top: ${({ theme }) => theme.spacing(4)};
  z-index: ${({ theme }) => theme.elevation.fixed};
  color: ${({ theme }) => theme.colors.font.secondary};
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme }) => theme.devices.tablet} {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${({ theme }) => theme.devices.laptop} {
    justify-content: space-between;
  }
`;

export const StyledTitle = styled.div`
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.subtitle2};
`;

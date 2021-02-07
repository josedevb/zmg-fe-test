import styled from 'styled-components';

export const StyledLink = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.font.size.caption};

  ${({ theme }) => theme.devices.mobileL} {
    cursor: pointer;
    margin-left: ${({ theme }) => theme.spacing(6)};
    margin-bottom: 0;
    :first-of-type {
      margin-left: 0;
    }
  }
`;

export const StyledLogo = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 auto;
  position: relative;
`;

export const StyledLinks = styled.ul`
  width: auto;
  font-weight: normal;

  ${({ theme }) => theme.devices.mobileL} {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;
export const StyledFollowUs = styled.caption`
  display: block;
  font-weight: 300;
  margin: ${({ theme }) => theme.spacing(10, 0, 2, 0)};
  font-size: ${({ theme }) => theme.font.size.caption};

  ${({ theme }) => theme.devices.mobileL} {
    margin: 0;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.font.primary};
  margin: ${({ theme }) => theme.spacing(0, 2, 10, 0)};
  text-align: center;

  ${({ theme }) => theme.devices.mobileL} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StyledSocialNetworks = styled.ul`
  width: auto;

  ${({ theme }) => theme.devices.mobileL} {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const StyledSocialNetwork = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.devices.mobileL} {
    cursor: pointer;
    margin-bottom: 0;
    margin-left: ${({ theme }) => theme.spacing(5)};
  }
`;

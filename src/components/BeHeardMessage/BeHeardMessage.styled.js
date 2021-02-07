import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: fill-available;
  margin: ${({ theme }) => theme.spacing(10, 0)};
`;

export const StyledMessageContainer = styled.div`
  width: 100%;
  display: block;
  ${({ theme }) => theme.devices.tablet} {
    width: 92%;
    display: flex;
    align-items: center;
  }
`;

export const StyledTitleContainer = styled.div`
  ${({ theme }) => theme.devices.tablet} {
    width: 30%;
  }

  ${({ theme }) => theme.devices.laptopL} {
    width: 25%;
  }
`;

export const StyledTitleComplement = styled.h6`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.subtitle1};

  ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.font.size.h6};
  }
`;

export const StyledTitle = styled.h5`
  font-size: ${({ theme }) => theme.font.size.h3};

  ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.font.size.h5};
  }

  ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.font.size.h4};
  }
`;

export const StyledDescriptionContainer = styled.div`
  ${({ theme }) => theme.devices.tablet} {
    width: 70%;
  }
`;

export const StyledDescription = styled.p`
  font-weight: 300;
`;

import styled from 'styled-components';

export const StyledBlur = styled.div`
  max-width: 450px;
  backdrop-filter: blur(30px);
  padding: ${({ theme }) => theme.spacing(7, 7)};
  color: ${({ theme }) => theme.colors.font.secondary};
  background-color: ${({ theme }) => theme.blur.black};
  :after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    content: '';
    opacity: 0.4;
    position: absolute;
    background: ${({ theme }) => theme.colors.bg.secundary};
  }
`;

export const StyledCaption = styled.small`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.paragraph2};
`;

export const StyledName = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.h2};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledDescription = styled.p`
  width: 90%;
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.subtitle3};
`;

export const StyledInformation = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(7)};
  > a {
    text-decoration: none;
    position: relative;
    color: inherit;
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
  > a:after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1px;
    border-width: 0 0 1px;
    border-style: solid;
  }
`;

export const StyledInformationIcon = styled.div`
  width: 17px;
  height: 17px;
  position: relative;
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

export const StyledVerdict = styled.p`
  font-size: ${({ theme }) => theme.font.size.h6};
`;

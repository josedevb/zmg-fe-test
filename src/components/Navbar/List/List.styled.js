import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  margin-top: ${({ theme }) => theme.spacing(3)};
  font-weight: 300;
  align-items: center;
  justify-content: space-evenly;
  font-size: ${({ theme }) => theme.font.size.h6};
  background-color: ${({ theme }) => theme.bg.black};

  ${({ theme }) => theme.devices.laptop} {
    width: auto;
    margin: 0px;
  }
`;

export const StyledListItem = styled.li`
  width: auto;
  cursor: pointer;
  margin: ${({ theme }) => theme.spacing(0, 0, 0, 2)};
  font-size: ${({ theme }) => theme.font.size.paragraph3};
  :hover {
    color: ${({ theme }) => theme.colors.font.brand};
  }

  ${({ theme }) => theme.devices.tablet} {
    width: auto;
    margin: ${({ theme }) => theme.spacing(0, 0, 0, 12)};
    font-size: ${({ theme }) => theme.font.size.paragraph1};
  }
`;

export const StyledSearchIcon = styled.div`
  width: 15px;
  height: 15px;
  position: relative;

  ${({ theme }) => theme.devices.tablet} {
    width: 27px;
    height: 27px;
    margin-left: auto;
  }
`;

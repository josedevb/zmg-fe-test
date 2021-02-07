import styled from 'styled-components';

export const StyledList = styled.ul`
  width: auto;
  display: flex;
  list-style: none;
  position: relative;
  text-align: left;
  font-weight: 300;
  background-color: ${({ theme }) => theme.bg.black};
  font-size: ${({ theme }) => theme.font.size.h6};
`;

export const StyledListItem = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.size.subtitle1};
  margin: ${({ theme }) => theme.spacing(0, 0, 0, 3)};
  :hover {
    color: ${({ theme }) => theme.colors.font.brand};
  }
  ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.font.size.subtitle1};
    margin: ${({ theme }) => theme.spacing(0, 0, 0, 12)};
  }
`;

export const StyledSearchIcon = styled.div`
  position: relative;
  width: 27px;
  height: 27px;
  ${({ theme }) => theme.devices.tablet} {
    margin-left: auto;
  }
`;

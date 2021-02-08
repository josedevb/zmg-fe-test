import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 1px;
  background-size: 6px 1px;
  background-position: bottom;
  background-repeat: repeat-x;
  margin: ${({ theme }) => theme.spacing(9, 0, 7, 0)};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.bg.primary} 20%,
    rgba(255, 255, 255, 0) 0%
  );
  background-image: -webkit-linear-gradient(
    to right,
    ${({ theme }) => theme.colors.bg.primary} 20%,
    rgba(255, 255, 255, 0) 0%
  );
`;

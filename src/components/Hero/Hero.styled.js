import styled from 'styled-components';

export default styled.div`
  display: flex;
  height: 700px;
  position: relative;
  align-items: center;
  width: fill-available;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacing(10, 0)};
  :before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 150px;
    position: absolute;
    background: linear-gradient(
      0,
      transparent,
      ${({ theme }) => theme.gradient.softGray}
    );
    z-index: ${({ theme }) => theme.elevation.forward};
  }
`;

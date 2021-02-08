import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const isFluidContainer = ({ theme, fluid, limit }) =>
  fluid &&
  css`
    width: ${theme.containerWidth.fluid.width};
    max-width: ${limit ? theme.containerWidth.fluid.maxWidth : 'none'};
  `;

export default styled(motion.div)`
  ${({ relative }) =>
    relative
      ? css`
          position: relative;
        `
      : ''}
  margin: ${({ centered }) => (centered ? '0 auto' : '0')};
  font-family: ${({ theme }) => theme.font.family.primary};
  width: ${({ theme }) => theme.containerWidth.mobileS.width};
  max-width: ${({ theme }) => theme.containerWidth.mobileS.maxWidth};
  ${isFluidContainer}

  ${({ theme }) => theme.devices.mobileM} {
    width: ${({ theme }) => theme.containerWidth.mobileM.width};
    max-width: ${({ theme }) => theme.containerWidth.mobileM.maxWidth};
    ${isFluidContainer}
  }

  ${({ theme }) => theme.devices.tablet} {
    width: ${({ theme }) => theme.containerWidth.tablet.width};
    max-width: ${({ theme }) => theme.containerWidth.tablet.maxWidth};
    ${isFluidContainer}
  }

  ${({ theme }) => theme.devices.desktop} {
    width: ${({ theme }) => theme.containerWidth.desktop.width};
    max-width: ${({ theme }) => theme.containerWidth.desktop.maxWidth};
    ${isFluidContainer}
  }
`;

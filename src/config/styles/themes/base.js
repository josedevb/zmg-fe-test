import colors from '~/styles/core/colors';
import spacing from '~/config/utils/spacing';
import { devices } from '~/constants/styles';

export default {
  font: {
    family: {
      primary: "'Lato', sans-serif"
    },
    size: {
      h1: '3.75rem',
      h2: '3rem',
      h3: '2.5rem',
      h4: '2.25rem',
      h5: '1.625rem',
      h6: '1.5rem',
      subtitle1: '1.1375rem',
      subtitle2: '1.25rem',
      subtitle3: '1.375rem',
      paragraph1: '1.125rem',
      paragraph2: '1rem',
      paragraph3: '0.875rem',
      caption: '0.75rem',
      help: '0.625em',
      small: '0.5rem'
    }
  },
  bg: {
    crystalBlack: colors.crystalBlack,
    crystalWhite: colors.crystalWhite
  },
  blur: {
    black: colors.transparentBlack
  },
  gradient: {
    softGray: colors.softGray,
    lightBlack: colors.lightBlack
  },
  votes: {
    like: colors.lightGreen,
    dislike: colors.lightYellow
  },
  devices,
  spacing,
  containerWidth: {
    mobileS: { width: '92%', maxWidth: '92%' },
    mobileM: { width: '92%', maxWidth: '92%' },
    tablet: { width: '85%', maxWidth: '85%' },
    desktop: { width: '50%', maxWidth: '50%' },
    screen: { width: '75%', maxWidth: '75%' },
    limitFluid: { width: '100%', maxWidth: '1920px' },
    fluid: { width: '100%', maxWidth: '100%' }
  },
  elevation: {
    initial: 0,
    backward: -1,
    forward: 1,
    fixed: 2,
    higher: 3,
    super: 100
  }
};

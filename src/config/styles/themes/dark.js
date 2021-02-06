import base from '~/styles/themes/base';
import colors from '~/styles/core/colors';
import { themes } from '~/constants/styles';

export default {
  ...base,
  name: themes.DARK,
  colors: {
    bg: {
      primary: colors.white,
      secondary: colors.black
    },
    font: {
      primary: colors.white,
      secondary: colors.black
    }
  }
};

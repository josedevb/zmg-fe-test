import base from '~/styles/themes/base';
import colors from '~/styles/core/colors';
import { themes } from '~/constants/styles';

export default {
  ...base,
  name: themes.LIGHT,
  colors: {
    bg: {
      primary: colors.black,
      secondary: colors.white
    },
    font: {
      primary: colors.black,
      secondary: colors.white
    }
  }
};

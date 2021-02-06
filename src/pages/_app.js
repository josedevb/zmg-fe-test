import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/themes/light';
import I18n from '~/config/lib/contexts/i18n';
import GlobalStyles from '~/config/styles/core/globals';

const MainComponent = ({ Component, pageProps }) => (
  <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </I18n>
);

MainComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(Array)
  ]).isRequired
};

export default MainComponent;

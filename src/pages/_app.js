import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/themes/light';
import I18n from '~/config/lib/contexts/i18n';
import GlobalStyles from '~/config/styles/core/globals';

const MainComponent = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <Component {...pageProps} />
    </I18n>
  </ThemeProvider>
);

MainComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(Array)
  ]).isRequired
};

export default MainComponent;

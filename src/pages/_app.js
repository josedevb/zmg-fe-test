import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/themes/light';
import GlobalStyles from '~/config/styles/core/globals';

const MainComponent = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
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

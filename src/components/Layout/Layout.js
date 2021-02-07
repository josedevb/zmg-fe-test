import Head from 'next/head';
import PropTypes from 'prop-types';

import Navbar from '~/components/Navbar/Navbar';
import useTranslation from '~/hooks/useTranslation';
import { contentLanguageMap } from '~/config/constants/languages';

const Layout = ({ children }) => {
  const { t, activeLocale } = useTranslation();

  return (
    <>
      <Head>
        <meta
          httpEquiv='content-language'
          content={contentLanguageMap[activeLocale]}
        />
        <title>{t('ruleOfThumb')}</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;

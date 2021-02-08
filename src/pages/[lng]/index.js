import PropTypes from 'prop-types';

import Hero from '~/components/Hero/Hero';
import usePersons from '~/hooks/usePersons';
import Layout from '~/components/Layout/Layout';
import fetchPersons from '~/config/api/fetchPersons';
import DottedLine from '~/components/DottedLine/DottedLine';
import VoteSection from '~/components/VoteSection/VoteSection';
import SmallBanner from '~/components/SmallBanner/SmallBanner';
import BeHeardMessage from '~/components/BeHeardMessage/BeHeardMessage';

const HomePage = ({ initialPersons, mainPerson }) => {
  const persons = usePersons(initialPersons);

  return (
    <Layout>
      <Hero person={mainPerson} />
      <BeHeardMessage />
      <VoteSection persons={persons} />
      <SmallBanner />
      <DottedLine />
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { default: lngDict = {} } = await import(
    `public/locales/${params.lng}.json`
  );
  const { mainPerson, initialPersons } = await fetchPersons();

  return {
    props: {
      lngDict,
      mainPerson,
      initialPersons,
      lng: params.lng
    }
  };
};

HomePage.propTypes = {
  mainPerson: PropTypes.shape({}).isRequired,
  initialPersons: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default HomePage;

import PropTypes from 'prop-types';

import Hero from '~/components/Hero/Hero';
import votedPersons from '~/__mocks__/persons';
import Layout from '~/components/Layout/Layout';
import VoteSection from '~/components/VoteSection/VoteSection';
import SmallBanner from '~/components/SmallBanner/SmallBanner';
import DottedLine from '~/components/DottedLine/DottedLine';
import BeHeardMessage from '~/components/BeHeardMessage/BeHeardMessage';

const HomePage = ({ persons, mainPerson }) => (
  <Layout>
    <Hero person={mainPerson} />
    <BeHeardMessage />
    <VoteSection persons={persons} />
    <SmallBanner />
    <DottedLine />
  </Layout>
);

export async function getServerSideProps({ params }) {
  const { default: lngDict = {} } = await import(
    `public/locales/${params.lng}.json`
  );

  const mainPerson = votedPersons.find((person) => person.showInHero);

  return {
    props: {
      lngDict,
      mainPerson,
      lng: params.lng,
      persons: votedPersons.filter((person) => person.id !== mainPerson.id)
    }
  };
}

HomePage.propTypes = {
  mainPerson: PropTypes.shape({}).isRequired,
  persons: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default HomePage;

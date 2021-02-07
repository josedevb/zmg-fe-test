import PropTypes from 'prop-types';

import Hero from '~/components/Hero/Hero';
import Layout from '~/components/Layout/Layout';

const persons = [
  {
    name: 'Pope Francis',
    description:
      "He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or true pedophile punishing pontiff? (thumbs up)",
    image: '/images/pope.png',
    votes: {
      likes: 0,
      dislikes: 0
    },
    showInHero: true,
    closingDays: 22
  },
  {
    name: 'Kanye West',
    image: '/images/kanye.png',
    votes: {
      likes: 0,
      dislikes: 0
    },
    showInHero: false,
    closingDays: 24
  }
];

const HomePage = ({ mainPerson }) => (
  <Layout>
    <Hero person={mainPerson} />
  </Layout>
);

export async function getServerSideProps({ params }) {
  const { default: lngDict = {} } = await import(
    `public/locales/${params.lng}.json`
  );

  return {
    props: {
      persons,
      lngDict,
      lng: params.lng,
      mainPerson: persons.find((person) => person.showInHero)
    }
  };
}

HomePage.propTypes = {
  mainPerson: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default HomePage;

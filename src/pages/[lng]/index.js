import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Hero from '~/components/Hero/Hero';
import firebase from '~/firebase/clientApp';
import Layout from '~/components/Layout/Layout';
import DottedLine from '~/components/DottedLine/DottedLine';
import VoteSection from '~/components/VoteSection/VoteSection';
import SmallBanner from '~/components/SmallBanner/SmallBanner';
import BeHeardMessage from '~/components/BeHeardMessage/BeHeardMessage';

const HomePage = ({ initialPersons, mainPerson }) => {
  const [persons, setPersons] = useState(initialPersons);

  useEffect(() => {
    const ref = firebase.database().ref('persons');
    ref.on('child_changed', (snapshot) => {
      const personUpdated = snapshot.val();

      const newPersons = persons.map((person) =>
        personUpdated.id === person.id ? personUpdated : person
      );

      setPersons(newPersons);
    });
  }, [persons]);

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
  let votedPersons = [];
  const ref = firebase.database().ref('persons');

  // call voted persons from firebase
  await ref.once('value', (snapshot) => {
    votedPersons = snapshot.val();
  });

  // get locale i18 file from url
  const { default: lngDict = {} } = await import(
    `public/locales/${params.lng}.json`
  );

  const mainPerson = votedPersons.find((person) => person.showInHero);

  return {
    props: {
      lngDict,
      mainPerson,
      lng: params.lng,
      initialPersons: votedPersons.filter(
        (person) => person.id !== mainPerson.id
      )
    }
  };
};

HomePage.propTypes = {
  mainPerson: PropTypes.shape({}).isRequired,
  initialPersons: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default HomePage;

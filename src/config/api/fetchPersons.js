import firebase from '~/firebase/clientApp';

const fetchPersons = async () => {
  try {
    const ref = firebase.database().ref('persons');
    const personsSnap = await ref.once('value');
    const votedPersons = personsSnap.val() || [];

    const mainPerson = votedPersons.find((person) => person.showInHero);
    const initialPersons = votedPersons.filter(
      (person) => person.id !== mainPerson.id
    );

    return {
      mainPerson,
      initialPersons
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchPersons;

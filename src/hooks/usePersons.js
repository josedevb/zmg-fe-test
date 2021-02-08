import { useEffect, useState } from 'react';

import firebase from '~/firebase/clientApp';

const usePersons = (initialPersons) => {
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

  return persons;
};

export default usePersons;

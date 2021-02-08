import firebase from '~/firebase/clientApp';

export const updateUserVotes = async (id, vote) => {
  try {
    const personRef = firebase
      .database()
      .ref('persons')
      .child(id)
      .child('votes');

    await personRef.update(vote);
  } catch (error) {
    throw new Error(error);
  }
};

export default updateUserVotes;

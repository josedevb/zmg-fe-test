import fetchPersons from '~/api/fetchPersons';
import MockFirebase from '~/config/firebase/clientApp';
import mockPerson from '../../../__mocks__/persons.js';

const fetchedMock = {
  initialPersons: [],
  mainPerson: {
    category: 'Religion',
    closingDays: 22,
    description:
      "He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or true pedophile punishing pontiff? (thumbs up)",
    image: '/images/pope.png',
    name: 'Pope Francis',
    showInHero: true,
    time: '1',
    votes: { dislikes: 0, likes: 0 }
  }
};

describe('FetchPerson', () => {
  it('Should return persons', async () => {
    MockFirebase.database = jest.fn(() => ({
      ref: jest.fn(() => ({
        once: jest.fn(() => ({
          val: jest.fn(() => mockPerson)
        }))
      }))
    }));

    const persons = await fetchPersons();

    expect(persons).toStrictEqual(fetchedMock);
  });
});

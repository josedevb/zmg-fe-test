const persons = [
  {
    id: 1,
    name: 'Pope Francis',
    description:
      "He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or true pedophile punishing pontiff? (thumbs up)",
    image: '/images/pope.png',
    votes: {
      likes: 0,
      dislikes: 0
    },
    showInHero: true,
    closingDays: 22,
    time: '1',
    category: 'Religion'
  },
  {
    id: 2,
    name: 'Kanye West',
    image: '/images/kanye-west.png',
    votes: {
      likes: 95,
      dislikes: 52
    },
    showInHero: false,
    closingDays: 24,
    time: '2',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Entertainment'
  },
  {
    id: 3,
    name: 'Mark Zuckerberg',
    image: '/images/mark-zuckerberg.png',
    votes: {
      likes: 52,
      dislikes: 90
    },
    showInHero: false,
    closingDays: 24,
    time: '2',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Business'
  },
  {
    id: 4,
    name: 'Cristina Fernandez de Kirchner',
    image: '/images/cristina-kirchner.png',
    votes: {
      likes: 52,
      dislikes: 90
    },
    showInHero: false,
    closingDays: 24,
    time: '1',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Politics'
  },
  {
    id: 5,
    name: 'Malala Yousafzai',
    image: '/images/malala-yousafzai.png',
    votes: {
      likes: 95,
      dislikes: 52
    },
    showInHero: false,
    closingDays: 24,
    time: '3',
    description:
      'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
    category: 'Entertainment'
  }
];

export default persons;

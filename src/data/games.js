export const GAMES = [
  {
    id: 'lol',
    title: 'League of Legends',
    color: '#0A1428',
    icon: 'sword-cross',
    image: require('../../assets/lol-icon.png'),
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption II',
    color: '#4A1414',
    icon: 'pistol',
    image: require('../../assets/rdr2-icon.png'),
  },
  {
    id: 'csgo',
    title: 'CS:GO',
    color: '#1B1B1B',
    icon: 'pistol',
    image: require('../../assets/csgo-icon.png'),
  },
  {
    id: 'apex',
    title: 'Apex Legends',
    color: '#3A0E0E',
    icon: 'shield-star',
    image: require('../../assets/apex-icon.png'),
  },
  {
    id: 'valorant',
    title: 'Valorant',
    color: '#5B0E1D',
    icon: 'target',
    image: require('../../assets/valorant-icon.png'),
  },
];

export const getGameById = (id) => GAMES.find((game) => game.id === id);

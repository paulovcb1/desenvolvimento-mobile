export const CATEGORIES = [
  {
    id: 'ranqueada',
    title: 'Ranqueada',
    icon: 'trophy-award',
    image: require('../../assets/ranqueada-icon.png'),
  },
  {
    id: 'duelo',
    title: 'Duelo 1x1',
    icon: 'sword-cross',
    image: require('../../assets/duelo-icon.png'),
  },
  {
    id: 'diversao',
    title: 'Diversão',
    icon: 'emoticon-happy-outline',
    image: require('../../assets/diversao-icon.png'),
  },
];

export const CATEGORIES_SCROLLABLE = [
  ...CATEGORIES,
  { ...CATEGORIES.find((category) => category.id === 'ranqueada'), id: 'ranqueada-2' },
];

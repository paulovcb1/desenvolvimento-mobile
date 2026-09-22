export const APPOINTMENTS = [
  {
    id: '1',
    gameId: 'lol',
    guild: {
      name: 'Lendários',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
      owner: true,
    },
    categoryId: 'ranqueada',
    date: '18/06 às 21:00h',
    players: [
      { id: 'p1', name: 'Tiago Luchtenberg', status: 'available' },
      { id: 'p2', name: 'Rodrigo Gonçalves', status: 'busy' },
      { id: 'p3', name: 'Diego Fernandes', status: 'busy' },
    ],
  },
  {
    id: '2',
    gameId: 'rdr2',
    guild: {
      name: 'Yeah, boy',
      description: 'Bora fazer umas missões e soltar uns tiros pelo faroeste',
      owner: false,
    },
    categoryId: 'diversao',
    date: '23/06 às 19:00h',
    players: [
      { id: 'p4', name: 'Tiago Luchtenberg', status: 'available' },
      { id: 'p5', name: 'Camila Souza', status: 'available' },
    ],
  },
  {
    id: '3',
    gameId: 'csgo',
    guild: {
      name: 'Rumo ao topo',
      description: 'Treino de mira e execuções pra subir de patente',
      owner: true,
    },
    categoryId: 'duelo',
    date: '20/06 às 09:00h',
    players: [
      { id: 'p6', name: 'Tiago Luchtenberg', status: 'available' },
      { id: 'p7', name: 'Bruno Alves', status: 'busy' },
    ],
  },
  {
    id: '4',
    gameId: 'apex',
    guild: {
      name: 'Bora queimar tudo',
      description: 'Squad completo pra fechar em primeiro lugar',
      owner: true,
    },
    categoryId: 'ranqueada',
    date: '20/06 às 14:20h',
    players: [
      { id: 'p8', name: 'Tiago Luchtenberg', status: 'available' },
      { id: 'p9', name: 'Marina Lopes', status: 'busy' },
      { id: 'p10', name: 'Felipe Costa', status: 'available' },
    ],
  },
  {
    id: '5',
    gameId: 'valorant',
    guild: {
      name: 'Valorosos',
      description: 'Partida casual pra descontrair depois do trampo',
      owner: true,
    },
    categoryId: 'diversao',
    date: '22/06 às 20:00h',
    players: [
      { id: 'p11', name: 'Tiago Luchtenberg', status: 'available' },
      { id: 'p12', name: 'Rodrigo Gonçalves', status: 'busy' },
    ],
  },
  {
    id: '6',
    gameId: 'valorant',
    guild: {
      name: 'Sobe de elo',
      description: 'Ranqueada séria, silêncio no comms só call',
      owner: false,
    },
    categoryId: 'ranqueada',
    date: '25/06 às 21:30h',
    players: [
      { id: 'p13', name: 'Tiago Luchtenberg', status: 'available' },
      { id: 'p14', name: 'Diego Fernandes', status: 'busy' },
    ],
  },
];

export const getAppointmentById = (id) =>
  APPOINTMENTS.find((appointment) => appointment.id === id);

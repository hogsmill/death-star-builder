
const capabilities = [
  {
    id: 1,
    capability: 'Meet the Emperor'
  },
  {
    id: 2,
    capability: 'Meet other Gran Koenigs'
  },
  {
    id: 3,
    capability: 'Meet other Initiatives'
  },
  {
    id: 4,
    capability: 'Touch the planboard'
  }
]

const roles = [
  {
    id: 1,
    role: 'Emperor',
    logo: 'EmpireEmblem.png',
    setRoles: true
  },
  {
    id: 2,
    role: 'Gran Koenig',
    capabilities: [1, 2],
    logo: 'EmpireEmblem.png',
    setRoles: true
  },
  {
    id: 3,
    role: 'Master of Shkrum',
    capabilities: [3, 4],
    logo: 'EmpireEmblem.png'
  },
  {
    id: 4,
    role: 'Space Trooper',
    capabilities: [],
    logo: 'EmpireEmblem.png'
  },
]

const fixedRoles = [
  {
    type: 1,
    id: 1,
    player: {},
    name: 'The Emperor',
    realName: 'The Emperor',
    face: 'emporer',
    want: 'Galactic Domination',
    so: 'We dominate the Galaxy',
  },
  {
    type: 2,
    id: 2,
    player: {},
    name: 'KooKaan',
    realName: 'XoXaan',
    face: 'xoxaan',
    want: 'Maximize Defence',
    so: 'We will be ready if Rebellion will attack',
  },
  {
    type: 2,
    id: 3,
    player: {},
    name: 'Muff Kartin',
    realName: 'Gran Moff Wilhuff Tarkin',
    face: 'tarkin',
    want: 'Balance Defence and Supremacy',
    so: 'The station will grow organically',
  },
  {
    type: 2,
    id: 4,
    player: {},
    name: 'Lunimara',
    realName: 'Luminara xxxx',
    face: 'luminara',
    want: 'Anticipate Dependencies',
    so: 'In the following cycles we will be free to build',
  },
  {
    type: 2,
    id: 5,
    player: {},
    name: 'Daalia Sitana',
    realName: 'Natasi daala',
    face: 'daalia',
    want: 'Anticipate Complexity',
    so: 'In the following cycles we will face fewer problems',
  },
  {
    type: 2,
    id: 6,
    player: {},
    name: 'Lord Kardess',
    realName: 'Darth Vader',
    face: 'vader',
    want: 'Maximize Supremacy',
    so: 'My Emperor will start terrifying the galaxy sooner',
  },
  {
    type: 2,
    id: 7,
    player: {},
    name: 'Selm Kamdet',
    realName: 'Galen Marek',
    face: 'galen',
    want: 'Defer Dependencies',
    so: 'We can start building without constraints',
  }
]

module.exports = {

  capabiities: function() {
    return capabilities
  },

  roles: function() {
    return roles
  },

  fixedRoles: function() {
    return fixedRoles
  }
}

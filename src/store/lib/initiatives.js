
const initiatives = [
  {
    id: 1,
    epic: 'Communication',
    code: 'C',
    description: 'To connect people and systems',
    components: 16,
    complexity: 81,
    defence: 12,
    supremacy: 8,
    initiativeColor: '#00ffff',
    int1: 'coni1i-i.png',
    int2: null,
    logo: 'c-logo.png'
  },
  {
    id: 2,
    epic: 'Defence',
    code: 'D',
    description: 'To defend from the external attacks',
    components: 16,
    complexity: 86,
    defence: 40,
    supremacy: 7,
    initiativeColor: '#0000ff',
    int1: null,
    int2: null,
    logo: 'D-logo.png'
  },
  {
    id: 3,
    epic: 'Infrastructure',
    code: 'I',
    description: 'To make all systems working',
    components: 20,
    complexity: 78,
    defence: 8,
    supremacy: 3,
    initiativeColor: '#ffff00',
    int1: 'coni3i-i.png',
    int2: 'coni4i-i.png',
    logo: 'I-logo.png'
  },
  {
    id: 4,
    epic: 'Living',
    code: 'L',
    description: 'To let  people operate in the station',
    components: 20,
    complexity: 85,
    defence: 6,
    supremacy: 5,
    initiativeColor: '#00ff00',
    int1: 'coni2i-i.png',
    int2: null,
    logo: 'L-logo.png'
  },
  {
    id: 5,
    epic: 'Supremacy',
    code: 'S',
    description: 'To demonstrate Empire\'s strength',
    components: 16,
    complexity: 66,
    defence: 17,
    supremacy: 39,
    initiativeColor: '#ff00ff',
    int1: null,
    int2: null,
    logo: 'S-logo.png'
  },
  {
    id: 6,
    epic: 'Transport',
    code: 'T',
    description: 'To move people and goods',
    components: 20,
    complexity: 80,
    defence: 14,
    supremacy: 14,
    initiativeColor: '#ff0000',
    int1: null,
    int2: null,
    logo: 'T-logo.png'
  }
]

module.exports = {

  new: function() {
    return initiatives
  }
}

// Characters Data
const charactersData = [
  {
    id: 'alok',
    name: 'DJ Alok',
    title: 'World-Famous DJ',
    dialogue: "Music is the universal language of mankind.",
    image: './images/alok.png',
    bannerImage: './images/alok.png',
    ability: {
      name: 'Drop the Beat',
      icon: '🎵',
      description: 'Creates a 5m aura that increases ally movement speed by 10% and restores 5 HP/s for 10s.'
    },
    biography: {
      gender: 'Male',
      age: '28',
      birthday: 'August 4',
      relationship: 'Single',
      sibling: 'None',
      debut: 'Season 3',
      story: 'Alok is a world-renowned DJ who brings his electrifying beats to the battlefield.'
    },
    bestCombination: {
      playstyle: 'Support',
      explanation: 'DJ Alok excels as a support character, providing healing and speed boosts to the entire team.',
      image: './images/alok.png',
    },
  },
  
  {
    id: 'kelly',
    name: 'Kelly',
    title: 'World-Famous DJ',
    dialogue: "Music is the universal language of mankind.",
    image: 'https://images.unsplash.com/photo-1493225257124-a3eb161ffa5f?w=400&h=500&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&h=400&fit=crop',
    ability: {
      name: 'Drop the Beat',
      icon: '🎵',
      description: 'Creates a 5m aura that increases ally movement speed by 10% and restores 5 HP/s for 10s.'
    },
    biography: {
      gender: 'Male',
      age: '28',
      birthday: 'August 4',
      relationship: 'Single',
      sibling: 'None',
      debut: 'Season 3',
      story: 'Alok is a world-renowned DJ who brings his electrifying beats to the battlefield.'
    },
    bestCombination: {
      playstyle: 'Support',
      explanation: 'DJ Alok excels as a support character, providing healing and speed boosts to the entire team.',
      image: ''
    }
  },

];

if( typeof module !== 'undefined' && module.exports){
    module.exports = {charactersData };
}
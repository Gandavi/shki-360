// src/data/tour.js
export const tour = {
  // === УЛИЦА ===
  street: {
    src: 'assets/street/loc-1.jpg',
    name: 'Улица',
    skyRotation: '0 -130 0', 
    buttons: [
      {
        label: 'Voiti v zdani',
        target: 'floor2_ladder',
        position: '0 1.6 -3', 
        rotation: '0 0 0'
      },
    ]
  },

  // === ВТОРОЙ ЭТАЖ ===
  floor2_ladder: {
    src: 'assets/floor-2/loc-1.jpg',
    name: '2 этаж — Лестница',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'Koridor Vtorogo etaga', target: 'floor2_hall', position: '0 1.6 -2' },
    ]
  },

  floor2_hall: {
    src: 'assets/floor-2/loc-2.jpg',
    name: '2 этаж — Коридор',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'Kones kordiora', target: 'floor2_hall_2', position: '1 2.8 -1' ,rotation: '0 -45 0 '},
    ]
  },

  floor2_hall_2: {
    src: 'assets/floor-2/loc-6.jpg',
    name: '2 этаж — Конец коридора',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'Civrovoe', target: 'dig_prod', position: '1 2.8 -1' ,rotation: '0 -45 0 '},
    ]
  },

  dig_prod: {
    src: 'assets/floor-2/loc-5.jpg',
    name: 'Цифровое производство',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'Coridor', target: 'floor2_hall_2', position: '1 2.8 -1' ,rotation: '0 -45 0 '},
    ]
  },

  
}

export const startLocation = 'street'
// src/data/tour.js
export const tour = {
  // === УЛИЦА ===
  street: {
    src: 'assets/street/loc-1.jpg',
    name: 'Улица',
    skyRotation: '0 -130 0', 
    buttons: [
      {
        label: 'Voiti v zdanie',
        target: 'floor2_hall',
        position: '0 1.6 -3', 
        rotation: '0 0 0'
      },
    ]
  },

  // === ВТОРОЙ ЭТАЖ ===
  floor2_hall: {
    src: 'assets/floor-2/loc-1.jpg',
    name: '2 этаж — Лестница',
    skyRotation: '0 -130 0', 
    buttons: [
      { label: 'Room 3.7', target: 'room201', position: '0 1.6 -2' },
    ]
  },

  room201: {
    src: '/panoramas/room201.jpg',
    name: 'Room 3.7',
    buttons: [
      { label: 'Выйти в холл', target: 'floor2_hall', position: '0 1.6 -3' }
    ]
  },

  room202: {
    src: '/panoramas/room202.jpg',
    name: 'Комната 202',
    buttons: [
      { label: 'Выйти в холл', target: 'floor2_hall', position: '0 1.6 -3' }
    ]
  },

  // === ТРЕТИЙ ЭТАЖ ===
  floor3_hall: {
    src: '/panoramas/floor3_hall.jpg',
    name: '3 этаж — холл',
    buttons: [
      { label: 'Комната 301', target: 'room301', position: '-2 1.6 -2' },
      { label: 'Комната 302', target: 'room302', position: '2 1.6 -2' },
      { label: 'На 2 этаж',   target: 'floor2_hall', position: '0 1.6 -3' }
    ]
  },

  room301: {
    src: '/panoramas/room301.jpg',
    name: 'Комната 301',
    buttons: [
      { label: 'Выйти в холл', target: 'floor3_hall', position: '0 1.6 -3' }
    ]
  },

  room302: {
    src: '/panoramas/room302.jpg',
    name: 'Комната 302',
    buttons: [
      { label: 'Выйти в холл', target: 'floor3_hall', position: '0 1.6 -3' }
    ]
  }
}

export const startLocation = 'street'
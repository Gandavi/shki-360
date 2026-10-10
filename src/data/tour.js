// src/data/tour.js
export const tour = {
  // === УЛИЦА ===
  street: {
    src: 'assets/street/alt.jpg',
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
      { label: 'Lestnisa 3 etage', target: 'floor3_ladder', position: '1.15 2.547 1.3', rotation: '0 210 0 ' },
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
      { label: 'Civrovoe', target: 'dig_prod', position: '3 2.8 -1' ,rotation: '0 -55 0 '},
      { label: 'Lazer', target: 'dig_laz', position: '1 2.8 3.5' ,rotation: '0 -170 0 '},
    ]
  },

  dig_prod: {
    src: 'assets/floor-2/loc-5.jpg',
    name: 'Цифровое производство',
    skyRotation: '0 0 0', 
    buttons: [
      { label: 'Coridor', target: 'floor2_hall_2', position: '1 2.8 -1' ,rotation: '0 -45 0 '},
    ]
  },

  dig_laz: {
    src: 'assets/floor-2/loc-4.jpg',
    name: '2 этаж — Конец коридора',
    skyRotation: '0 0 0', 
    buttons: [
      { label: 'Coridor', target: 'floor2_hall_2', position: '3 2.8 0.048' ,rotation: '0 -90 0 '},
    ]
  },

  /* 3 ЭТАЖ */

  floor3_ladder: {
    src: 'assets/floor-3/loc-1.jpg',
    name: '3 этаж — Лестница',
    skyRotation: '0 -80 0', 
    buttons: [
      
      { label: 'Koridor 3', target: 'floor3_holl', position: '3.468 1.6 -1.936',  rotation: '0 -75 0'},
    ]
  },

  floor3_holl: {
    src: 'assets/floor-3/loc-2.jpg',
    name: 'Коридор',
    skyRotation: '0 -80 0', 
    buttons: [
      
      { label: 'animation', target: 'animation', position: '-1.338 2.45 3.933',  rotation: '0 180 0'},
      { label: 'floor3_holl_2', target: 'floor3_holl_2', position: '-0.338 2.45 3.933',  rotation: '0 180 0'},
    ]
  },

  animation: {
    src: 'assets/floor-3/loc-8.jpg',
    name: 'Коридор',
    skyRotation: '0 -80 0', 
    buttons: [
      
      { label: 'Koridor 3', target: 'floor3_holl', position: '3.468 1.6 -1.936',  rotation: '0 -75 0'},
    ]
  },
  floor3_holl_2: {
    src: 'assets/floor-3/loc-4.jpg',
    name: 'Коридор',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'floor3_holl_3', target: 'floor3_holl_3', position: '-1.502 2.47 -3.486',  rotation: '0 25 0'},
      { label: 'disygne', target: 'disygne', position: '3.468 1.6 -1.936',  rotation: '0 -75 0'},
    ]
  },
  disygne: {
    src: 'assets/floor-3/loc-9.jpg',
    name: 'Коридор',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'floor3_holl_2', target: 'floor3_holl_2', position: '-0.338 2.45 3.933',  rotation: '0 180 0'},
    ]
  },

  floor3_holl_3: {
    src: 'assets/floor-3/loc-5.jpg',
    name: 'Коридор',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'vr', target: 'vr', position: '3.172 2.45 -0.457',  rotation: '0 270 0'},
      { label: 'zvuk', target: 'zvuk', position: '0.522 2.45 3.933',  rotation: '0 180 0'},
      { label: 'floor3_holl_4', target: 'floor3_holl_4', position: '-2.828 2.45 2.543',  rotation: '0 140 0'},
    ]
  },

  vr: {
    src: 'assets/floor-3/loc-10.jpg',
    name: 'VR',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'floor3_holl_3', target: 'floor3_holl_3', position: '-1.502 2.47 -3.486',  rotation: '0 25 0'},
    ]
  },

  zvuk: {
    src: 'assets/floor-3/loc-11.jpg',
    name: 'zvuk',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'floor3_holl_3', target: 'floor3_holl_3', position: '-1.502 2.47 -3.486',  rotation: '0 25 0'},
    ]
  },

  floor3_holl_4: {
    src: 'assets/floor-3/loc-6.jpg',
    name: 'koridor',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'floor3_holl_3', target: 'floor3_holl_3', position: '3.198 2.47 -1.376',  rotation: '0 -70 0'},
      { label: 'music', target: 'music', position: '-4.452 2.47 1.554',  rotation: '0 100 0'},
      { label: 'foto', target: 'foto', position: '-4.268 2.47 -2.686',  rotation: '0 60 0'},
    ]
  },

  music: {
    src: 'assets/floor-3/loc-14.jpg',
    name: 'Музыка',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'floor3_holl_4', target: 'floor3_holl_4', position: '-2.828 2.45 2.543',  rotation: '0 140 0'},
    ]
  },

  foto: {
    src: 'assets/floor-3/loc-13.jpg',
    name: 'Фото',
    skyRotation: '0 -80 0', 
    buttons: [
      { label: 'floor3_holl_4', target: 'floor3_holl_4', position: '-2.828 2.45 2.543',  rotation: '0 140 0'},
    ]
  },
  
}

export const startLocation = 'street'

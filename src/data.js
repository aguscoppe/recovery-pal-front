export const patient = {
  id: 'pa1',
  email: 'paciente@mail.com',
  password: '123',
  name: 'María',
  surname: 'López',
  role: 'paciente',
  imgSrc: 'https://mui.com/static/images/avatar/3.jpg',
};

export const doctor = {
  id: 'do1',
  email: 'doctor@mail.com',
  password: '123',
  name: 'Martín',
  surname: 'González',
  role: 'doctor',
  imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
};

export const exercises = [
  {
    id: 'ex1',
    doctor: 'do1',
    instructions: 'Sentadillas 20 veces',
    videoTitle: 'Sentadilla',
    videoImageURL:
      'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    /*videoURL:"https://www.youtube.com/watch?v=a2lXwR-7kD4",*/
    videoURL:
      'https://joy.videvo.net/videvo_files/video/free/2019-03/large_watermarked/180419_Boxing_20_15_preview.mp4',
  },
  {
    id: 'ex2',
    doctor: 'do1',
    instructions: 'Estocadas 50 veces',
    videoTitle: 'Estocadas',
    videoImageURL:
      'https://thumbs.gfycat.com/GrouchySneakyKingfisher-mobile.jpg',
    /*videoURL:"https://www.youtube.com/watch?v=e6w3JPbb83U"*/
    videoURL:
      'https://player.vimeo.com/video/422883518?h=aee925f4ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1',
  },
  {
    id: 'ex3',
    doctor: 'do1',
    instructions: 'Sentadilla Bulgara 10 veces',
    videoTitle: 'Sentadilla Bulgara',
    videoImageURL:
      'https://thumbs.gfycat.com/GrouchySneakyKingfisher-mobile.jpg',
    /*videoURL:"https://www.youtube.com/watch?v=K-6DG1hcHzU"*/
    videoURL:
      'https://cdn.videvo.net/videvo_files/video/premium/video0261/large_watermarked/500_00481_preview.mp4',
  },
  {
    id: 'ex4',
    doctor: 'do1',
    instructions: 'Levantamiento de pesas 10 veces',
    videoTitle: 'Levantar Pesas',
    videoImageURL:
      'https://thumbs.gfycat.com/GrouchySneakyKingfisher-mobile.jpg',
    /*videoURL:"https://www.youtube.com/watch?v=K-6DG1hcHzU"*/
    videoURL: 'https://www.youtube.com/watch?v=e6w3JPbb83U',
  },
];

export const routines = [
  {
    id: 'ro1',
    doctor: 'do1',
    patient: 'pa1',
    name: 'Rutina inicial',
    exercises: [exercises[0], exercises[1], exercises[2]],
    feedbacks: [1, 2, 3],
    frequency: 'Semanal',
    duration: '2',
  },
  {
    id: 'ro2',
    doctor: 'do1',
    patient: 'pa1',
    name: 'Rutina avanzada',
    exercises: [exercises[0], exercises[1], exercises[2], exercises[3]],
    feedbacks: [1, 2, 3],
    frequency: 'Semanal',
    duration: '2',
  },
];

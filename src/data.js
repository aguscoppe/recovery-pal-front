export const patient = {
  email: 'paciente@mail.com',
  password: '123',
  name: 'María',
  surname: 'López',
  role: 'paciente',
  imgSrc: 'https://mui.com/static/images/avatar/3.jpg',
  _id: '63476ca587539638249f3c9a',
};

export const doctor = {
  id: 'do1',
  email: 'doctor@mail.com',
  password: '123',
  name: 'Martín',
  surname: 'González',
  role: 'doctor',
  imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
  _id : "6344f9393a24686318707f3f"
};

export const exercises = [
  {
    _id: 'ex1',
    doctor: 'do1',
    instructions: 'Caminar Recto durante 5 cuadras',
    videoTitle: 'Caminar Recto 5 Cuadras',
    videoURL: 'http://127.0.0.1:8080/videos/Caminar_Recto.mp4',
  },
  {
    _id: 'ex2',
    doctor: 'do1',
    instructions: 'Flexiones con pesas',
    videoTitle: 'Flexiones con pesas',
    videoURL: 'http://127.0.0.1:8080/videos/Flexiones_Peso.mp4',
  },
  {
    _id: 'ex3',
    doctor: 'do1',
    instructions: 'Girar las muñecas',
    videoTitle: 'Girar Muñecas',
    videoURL: 'http://127.0.0.1:8080/videos/Girar_Muñecas.mp4',
  },

  {
    _id: 'ex4',
    doctor: 'do1',
    instructions: 'Dominadas con agarre prono',
    videoTitle: 'Dominadas',
    videoURL: 'http://127.0.0.1:8080/videos/Dominadas.mp4',
  },
];

export const routines = [
  {
    _id: 'ro1',
    doctor: 'do1',
    patient: 'pa1',
    name: 'Rutina inicial',
    exercises: [exercises[0], exercises[1], exercises[2]],
    feedbacks: [1, 2, 3],
    schedule: {
      weeks: '3',
      times: '2',
    },
  },
  {
    _id: 'ro2',
    doctor: 'do1',
    patient: 'pa1',
    name: 'Rutina avanzada',
    exercises: [exercises[0], exercises[1], exercises[2], exercises[3]],
    feedbacks: [1, 2, 3],
    schedule: {
      weeks: '3',
      times: '2',
    },
  },
];
/*
 {
    _id: 'ex1',
    doctor: 'do1',
    instructions: 'Sentadillas 20 veces',
    videoTitle: 'Sentadilla',
    videoURL:
      'http://127.0.0.1:8080/videos/1828960062.mp4',
  },
  {
    _id: 'ex2',
    doctor: 'do1',
    instructions: 'Estocadas 50 veces',
    videoTitle: 'Estocadas',
    videoImageURL:
      'https://thumbs.gfycat.com/GrouchySneakyKingfisher-mobile.jpg',
    videoURL:"https://www.youtube.com/watch?v=e6w3JPbb83U"
    videoURL:
      'https://player.vimeo.com/video/422883518?h=aee925f4ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1',
  },

  {
    _id: 'ex3',
    doctor: 'do1',
    instructions: 'Sentadilla Bulgara 10 veces',
    videoTitle: 'Sentadilla Bulgara',
    videoURL:
      'https://cdn.videvo.net/videvo_files/video/premium/video0261/large_watermarked/500_00481_preview.mp4',
  },
  */

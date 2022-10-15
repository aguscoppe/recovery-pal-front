export const rutinas = [
  {
    idroutine: 1,
    name: "Mi Rutina",
    pacient: 1,
    doctor: 1,
    imgSrc:"https://www.remusfitness.com/blog/wp-content/uploads/2020/04/Squat.jpg",
    feedbacks: [1, 2, 3],
    schedule: {
      weeks: 1,
      times: 1,
      
    },
    exercises: [
      {
        idex: 1,
        doctor: 1,
        instructions: "Sentadillas 20 veces",
        videoTitle: "Sentadilla",
        videoImageURL:
          "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        videoURL: "https://www.youtube.com/watch?v=a2lXwR-7kD4",
      },
      {
        idex: 2,
        doctor: 1,
        instructions: "Estocadas 50 veces",
        videoTitle: "Estocadas",
        videoImageURL:
          "https://thumbs.gfycat.com/GrouchySneakyKingfisher-mobile.jpg",
        videoURL: "https://www.youtube.com/watch?v=e6w3JPbb83U",
      },
      {
        idex: 3,
        doctor: 1,
        instructions: "Sentadilla Bulgara 10 veces",
        videoTitle: "Sentadilla Bulgara",
        videoImageURL:
          "https://thumbs.gfycat.com/GrouchySneakyKingfisher-mobile.jpg",
        videoURL: "https://www.youtube.com/watch?v=K-6DG1hcHzU",
      },
    ]

  },
  {
    idroutine: 2,
    name: "Mi Rutina Avanzada",
    pacient: 1,
    doctor: 2,
    imgSrc:"https://urbwise.com/wp-content/uploads/2019/09/Lunges.jpg",
    feedbacks: [1, 2, 3],
    schedule: {
      weeks: 2,
      times: 5,
    },
    exercises: [
      {
        idex: 1,
        doctor: 1,
        instructions: "Sentadillas 20 veces",
        videoTitle: "Sentadilla",
        videoImageURL:
          "https://mui.com/static/images/cards/contemplative-reptile.jpg",
        videoURL: "https://www.youtube.com/watch?v=a2lXwR-7kD4",
      },
      {
        idex: 3,
        doctor: 1,
        instructions: "Sentadilla Bulgara 10 veces",
        videoTitle: "Sentadilla Bulgara",
        videoImageURL:
          "https://thumbs.gfycat.com/GrouchySneakyKingfisher-mobile.jpg",
        videoURL: "https://www.youtube.com/watch?v=K-6DG1hcHzU",
      },
    ]

  },
];

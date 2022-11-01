const urlApi = 'http://localhost:4000/';

const urlWebServices = {
  patientRegistration: urlApi + 'api/patients/registration',
  doctorRegistration: urlApi + 'api/doctors/registration',

  getPatientById: urlApi + 'api/patients/getPatient',
  getDoctorById: urlApi + 'api/doctors/getDoctor',

  getFeedbackById: urlApi + 'api/feedbacks/',
  getLastFeedbackByRoutine: urlApi + 'api/feedbacks/getLastFeedbackByRoutine',
  feedbackUpdate: urlApi + 'api/feedbacks',
  completeExerciseInFeedback: urlApi + "api/feedbacks/completeExerciseInFeedback",


  getExerciseById: urlApi + 'api/exercises',
  getExerciseByVideoTitleMatch:
    urlApi + 'exercises/getExercisesByVideoTitleMatch',
  exerciseCreation: urlApi + 'api/exercises',
  exerciseUpdate: urlApi + 'api/exercises',
  deleteExerciseById: urlApi + 'api/exercises',
  getAllExcercises: urlApi + 'api/exercises/allExcercises/',

  createRoutine: urlApi + 'api/routines',
  getRoutineById: urlApi + 'api/routines/getRoutine',

  uploadVideo: urlApi + 'api/files/uploadVideo',

  achievements: urlApi + 'api/achievements',
  achievementsRoutine: urlApi + 'api/achievements/routine',
  achievementsReport: urlApi + 'api/achievements/report'
};

export default urlWebServices;

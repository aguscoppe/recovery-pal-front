const urlApi = "http://localhost:4000/";

const urlWebServices = {
    patientRegistration:urlApi +"api/patients/registration",
    doctorRegistration:urlApi +"api/doctors/registration",

    
    getPatientById:urlApi +"api/patients/getPatient",
    getDoctorById:urlApi +"api/doctors/getDoctor",

    getFeedbackById:urlApi + "api/feedbacks/",
    getLastFeedbackByRoutine: urlApi + "api/feedbacks/getLastFeedbackByRoutine/",
    feedbackUpdate:urlApi + "api/feedbacks/",


    getExerciseById: urlApi + "api/exercises",
    getExerciseByVideoTitleMatch: urlApi + "exercises/getExercisesByVideoTitleMatch",
    exerciseCreation:urlApi + "api/exercises",
    exerciseUpdate:urlApi + "api/exercises",
    deleteExerciseById: urlApi + "api/exercises"

}


export default urlWebServices;
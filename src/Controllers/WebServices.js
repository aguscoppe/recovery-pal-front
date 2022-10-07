const urlApi = "http://localhost:4000/";

const urlWebServices = {
    patientRegistration:urlApi +"api/patients/registration",
    doctorRegistration:urlApi +"api/doctors/registration",

    getPatientById:urlApi +"api/patients/getPatient",
    getDoctorById:urlApi +"api/doctors/getDoctor",
}


export default urlWebServices;
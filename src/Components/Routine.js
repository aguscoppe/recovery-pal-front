import { Grid, Card, Typography, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getRoutineById } from "../Controllers/RoutineEntry.Controller";
import {
  getFeedbackById,
  getLastFeedbackByRoutin,
} from "../Controllers/FeedbackEntry.Controller";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { getExerciseById } from "../Controllers/ExerciseEntry.Controller";
import { getDoctorById } from "../Controllers/DoctorEntry.Controller";

//Aca esta el stylizado de la barra de progreso
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#008000" : "#008000",
  },
}));

const Routine = ({ routine }) => {
  //se recibe ya una rutina
  //para mejor entendimiento del codigo se guardan en variables los valores de esta rutina
  const _id = routine._id;
  const name = routine.name;
  const sessions = routine.feedbacks;
  const exercises = routine.exercises;
  const duration = routine.schedule.weeks;
  const frequency = routine.schedule.days.length;
  const feedbacksDone = routine.feedbacksDone;
  const doctorId = routine.doctor;
  const [doctorName, setDoctorName] = useState("");
  const [firstExercise, setFirstExercise] = useState(null);
  const currentUser = useContext(UserContext);

  //todo lo siguiente esta comentado porque es otra forma de recuperar la rutina
  /*
  const [exercise, setExercise] = useState(null);
  const [feedback, setFeedback] = useState(null); // state con la cantidad de ejercicios realizados para poner en la barra de progreso

  useEffect(() => {

    const getRoutine = async function () {
      const respuesta = await getRoutineById(_id);
      console.log("Console log de respuesta de back ", respuesta);
      if (respuesta.rdo === 1) {
        alert("Rutine invalida para usar esta pagina");
        window.location.href = "/";
      } else {
        setExercise(respuesta.routine.exercises[0].exercise); //Ejercicio con set y weight
        console.log(respuesta.exercise);
      }
    };

    getRoutine();
    obtenerFeedback(_id);

    
  }, [_id]);*/

  /*
  const obtenerFeedback = async function(idRoutine){
    const feedback = await getLastFeedbackByRoutin(idRoutine);
    setFeedback(feedback.exercise.exercisesDone.length)
    //setFeedback(1)  --> esto es para ver que funcione en la practica es cambiado actualizando el feedback
    console.log(feedback.exercise);
  }
*/

  useEffect(() => {
    const getExercise = async function () {
      const respuesta = await getExerciseById(routine.exercises[0].exercise);
      console.log("Console log de respuesta de back ", respuesta);
      if (respuesta.rdo === 1) {
        alert("Rutine invalida para usar esta pagina");
        window.location.href = "/";
      } else {
        setFirstExercise(respuesta.exercise); //Ejercicio con set y weight
        console.log(respuesta.exercise);
      }
    };

    //Esta llamada es para traer el nombre del doctor
    const getDoctor = async function () {
      const respuesta = await getDoctorById(doctorId);
      console.log("Console log de respuesta de back ", respuesta);
      if (respuesta.rdo === 1) {
        alert("No se pudo encontrar al doctor");
      } else {
        var name =
          respuesta.doctor.name + " " + respuesta.doctor.lastName;
        setDoctorName(name);
      }
    };

    getExercise();
    getDoctor();
  }, [routine]);

  return (
    <Link to={`/routine/${_id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={
          //si esta completado es decir hay la misma cantidad de sessiones completas como de sessiones en total
          sessions.length === feedbacksDone
            ? { border: "2px solid green", marginBottom: "12px" }
            : { marginBottom: "12px" }
        }
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={5} margin="10px">
            {
              //si no hay ejercicios
              firstExercise === null ? (
                <CircularProgress />
              ) : (
                <ReactPlayer
                  url={firstExercise.videoURL}
                  width="100%"
                  height="100%"
                />
              )
            }
          </Grid>
          <Grid item xs={sessions === feedbacksDone ? 4 : 5} margin="10px">
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "500" }}>
                {name}
              </Typography>
              {currentUser.role !== "doctor" ? (
                <Typography
                  variant="h7"
                  sx={{ fontWeight: "500", marginBottom: "1vh" }}
                >
                  {doctorName}
                </Typography>
              ) : (
                <div></div>
              )}
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                <CalendarTodayIcon /> {frequency} por semana
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                <AccessTimeIcon /> {duration} semanas
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                <VideoLibraryIcon /> {exercises.length} ejercicios
              </Typography>
            </Grid>
          </Grid>
          {sessions === feedbacksDone && (
            <Grid item xs={1}>
              <IconButton>
                <CheckCircleIcon sx={{ color: "green" }} />
              </IconButton>
            </Grid>
          )}
          <Grid item xs={9} sx={{ paddingBottom: "2vh" }}>
            {/*Para realizar el porcentaje: la cant de ejercicios por las sesiones completadas dividido la cant de ejercicios por el total de sesiones*/}
            <BorderLinearProgress
              variant="determinate"
              value={
                ((exercises.length * feedbacksDone) /
                  (exercises.length * sessions.length)) *
                100
              }
            />
          </Grid>
          <Grid item xs={1} sx={{ paddingBottom: "2vh" }}>
            <Typography variant="body2">
              {(
                ((exercises.length * feedbacksDone) /
                  (exercises.length * sessions.length)) *
                100
              ).toFixed(2)}
              %
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

export default Routine;

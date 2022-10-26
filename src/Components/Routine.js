import { Grid, Card, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";
import { useContext, useState, useEffect } from "react";
import { getRoutineById } from "../Controllers/RoutineEntry.Controller"
import CircularProgress from "@mui/material/CircularProgress";

const Routine = ({ routine }) => {
  const { _id, name, exercises, isComplete } = routine;
  const duration = routine.schedule.weeks;
  const frequency = routine.schedule.times;
  const [exercise, setExercise] = useState(null);
  console.log(exercises)

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
  }, [_id]);

  return (
    <Link to={`/routine/${_id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={
          isComplete
            ? { border: "2px solid green", marginBottom: "12px" }
            : { marginBottom: "12px" }
        }
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={5} margin="10px">
            {exercise ===null? <CircularProgress/> : 
            <ReactPlayer url={exercise.videoURL} width="100%" height="100%" />
            }
          </Grid>
          <Grid item xs={isComplete ? 4 : 5} margin="10px">
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
          {isComplete && (
            <Grid item xs={1}>
              <IconButton>
                <CheckCircleIcon sx={{ color: "green" }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Card>
    </Link>
  );
};

export default Routine;

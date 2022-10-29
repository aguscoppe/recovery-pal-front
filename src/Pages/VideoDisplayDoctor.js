import { Grid, Typography, Button } from "@mui/material";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ReactPlayer from "react-player";
import * as React from "react";
import { useState, useEffect } from "react";
import ModalAlert from "../Components/ModalAlert";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { getDoctorById } from '../Controllers/DoctorEntry.Controller';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";


function VideoDisplayDoctor({ exerciseList }) {
  const { idExercise } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [exercises, setExercises] = useState(null);
  const currentUser = useContext(UserContext);

  useEffect(() => {
    const getDoctor = async function () {
      const respuestaDoctor = await getDoctorById(currentUser._id);
      console.log(
        'Console log de respuesta de back ',
        JSON.stringify(respuestaDoctor)
      );
      if (respuestaDoctor.rdo === 1) {
        alert('No existe el doctor');
        window.location.href = '/';
      } else {
        setDoctor(respuestaDoctor.doctor);
        console.log(JSON.stringify(respuestaDoctor));
        setExercises(respuestaDoctor.doctor.exercises.filter(
          (e) => e.exercise._id === idExercise
        )[0] //obtener exercise);
        );
      }
    };
    getDoctor();
  }, [currentUser._id, idExercise]);

  return (
    <>
      <Header
        title={exercises === null ? "Cargando..." : exercises.videoTitle}
        icon={<FitnessCenterIcon />}
      />
      <Grid container justifyContent="center" sx={{ padding: "10vh 0" }}>
        {exercises === null ? (
          <Grid item xs={12} md={12}>
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          </Grid>
        ) : (
          <Grid item xs={11} md={6}>
            <Typography variant="h3">{exercises.videoTitle}</Typography>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <ReactPlayer
                height="auto"
                controls
                url={exercises.videoURL}
                onReady={() => console.log("onReady callback")}
                onStart={() => console.log("onStart callback")}
                onPause={() => console.log("onPause callback")}
                onEnded={() => console.log("onEnded callback")}
                onError={(e) => console.log(e)}
              />
            </div>
            <Typography variant="body1" marginTop="20px" marginBottom="40px">
              {exercises.instructions}
            </Typography>
          </Grid>
        )}
      </Grid>
      <NavBar />

    </>
  );
}

export default VideoDisplayDoctor;

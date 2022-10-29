import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Grid, Fab } from "@mui/material";
import { Link } from "react-router-dom";
import { getDoctorById } from "../Controllers/DoctorEntry.Controller";
import VideocamIcon from "@mui/icons-material/Videocam";
import CircularProgress from "@mui/material/CircularProgress";
import AddIcon from "@mui/icons-material/Add";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Exercisev2 from "../Components/Exercisev2";
import SearchExercise from "../Components/SearchExercise";

const Videos = () => {
  const currentUser = useContext(UserContext);
  const [doctor, setDoctor] = useState(null);
  const [exercises, setExercises] = useState(null);
  const [exercisesFiltrados, setExercisesFiltrados] = useState(null);

  useEffect(() => {
    const getDoctor = async function () {
      const respuestaDoctor = await getDoctorById(currentUser._id);
      console.log(
        "Console log de respuesta de back ",
        JSON.stringify(respuestaDoctor)
      );
      if (respuestaDoctor.rdo === 1) {
        alert("No existe el doctor");
        window.location.href = "/";
      } else {
        setDoctor(respuestaDoctor.doctor);
        console.log(JSON.stringify(respuestaDoctor));
        setExercises(respuestaDoctor.doctor.exercises);
        setExercisesFiltrados(respuestaDoctor.doctor.exercises);
      }
    };
    getDoctor();
  }, [currentUser._id]);
  return (
    <>
      <Header title="Videos" icon={<VideocamIcon />} />
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ paddingTop: "10vh" }}
      >
        <Grid item xs={12} md={12} alignSelf="center" sx={{ pt: 2 }}>
          <SearchExercise
            exercises={exercises}
            setExercisesFiltrados={setExercisesFiltrados}
          />
        </Grid>
        <Grid item xs={11} md={6} marginLeft="20px" marginRight="20px">
          {exercisesFiltrados === null ? (
            <CircularProgress />
          ) : (
            exercisesFiltrados.map((e) => <Exercisev2 exercise={e} />)
          )}
        </Grid>
      </Grid>
      <Link to={`/createExercise`} style={{ textDecoration: "none" }}>
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 80,
            right: 25,
          }}
        >
          <AddIcon />
        </Fab>
      </Link>
      <NavBar />
    </>
  );
};

export default Videos;

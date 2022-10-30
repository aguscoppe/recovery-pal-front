import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Grid, Fab } from "@mui/material";
import { getDoctorById } from "../Controllers/DoctorEntry.Controller";
import VideocamIcon from "@mui/icons-material/Videocam";
import CircularProgress from "@mui/material/CircularProgress";
import AddIcon from "@mui/icons-material/Add";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Exercisev2 from "../Components/Exercisev2";
import SearchExercise from "../Components/SearchExercise";
import ModalExercise from "../Components/ModalExercise";

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

  const [modalAlert, setModalAlert] = useState({
    open: false,
    type: "",
    title: "",
    subtitle: "",
    primaryBtnText: "",
    primaryBtnPage: "",
    setNotOpen: () => {},
  });

  const [modalExercise, setModalExercise] = useState({
    open: false,
    handleClose: () => {},
  });
  const openExerciseModal = () => {
    setModalExercise((prev) => ({ ...prev, open: true }));
  };
  const closeExerciseModal = (e) => {
    setModalExercise((prev) => ({ ...prev, open: false }));
    if (e.target.innerText !== "CANCELAR") {
      setModalAlert({
        type: "success",
        open: true,
        title: "¡Bien hecho!",
        subtitle: "Ejercicio creado correctamente",
        primaryBtnText: "Continuar",
        setNotOpen: () => {
          setModalAlert((prev) => ({ ...prev, open: false }));
        },
      });
    }
  };

  return (
    <>
      <Header title="Videos" icon={<VideocamIcon />} />
      <Grid
        container
        fullWidth
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
        <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 80,
          right: 25,
        }}
        onClick={openExerciseModal}
      >
        <AddIcon />
      </Fab>
      </Grid>



      <NavBar />

      
      <ModalExercise
        open={modalExercise.open}
        handleClose={closeExerciseModal}
      />
    </>
  );
};

export default Videos;

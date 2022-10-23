import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Routine from "../Components/Routine";
import CircularProgress from "@mui/material/CircularProgress";
import { getPatientById } from "../Controllers/PatientEntry.Controller";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import Box from "@mui/material/Box";

const PatientRoutine = () => {
  const currentUser = useContext(UserContext);
  const [routines, setRoutines] = useState(null);

  useEffect(() => {
    const getPatient = async function () {
      const respuestaPatient = await getPatientById(currentUser._id);
      console.log("Console log de respuesta de back ", JSON.stringify(respuestaPatient));
      if (respuestaPatient.rdo === 1) {
        alert("Debes estar logueado para usar esta pagina");
        window.location.href = "/";
      } else {
        setRoutines(respuestaPatient.patient.routines);
        console.log(respuestaPatient.patient.routines);
      }
    };
    getPatient();
  }, [currentUser._id]);

  return (
    <>
      <Header title="Home" icon={<HomeIcon />} />
      <Grid container justifyContent="center" sx={{ padding: "10vh 0" }}>
        {routines === null ? (
          <Grid item xs={12} md={12}>
            <Box  display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          </Grid>
        ) : (
          routines.map((routine) => (
            <Grid item xs={11} md={6}>
              <Routine routine={routine} />
            </Grid>
          ))
        )}
      </Grid>
      <NavBar />
    </>
  );
};

export default PatientRoutine;

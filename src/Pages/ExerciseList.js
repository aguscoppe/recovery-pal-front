import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Exercise from '../Components/Exercise';
import { useContext, useState, useEffect } from "react";
import { getRoutineById } from '../Controllers/RoutineEntry.Controller';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const ExerciseList = ({ exerciseList }) => {
  const { idRoutine } = useParams();
  const [routine, setRoutine] = useState(null)

  useEffect(() => {
    const getRoutine = async function () {
      const respuesta = await getRoutineById(idRoutine)
      console.log("Console log de respuesta de back ", respuesta);
      if (respuesta.rdo === 1) {
        alert("Rutine invalida para usar esta pagina");
        window.location.href = "/";
      } else {
        setRoutine(respuesta.routine);
        console.log(respuesta.routine);
      }
    };
    getRoutine();
  }, [idRoutine]);

  return (
    <>
      <Header title={routine === null? "Cargando...": routine.name} icon={<CalendarMonthIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
      {routine === null ? (
          <Grid item xs={12} md={12}>
            <Box  display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          </Grid>
        ) : (
          routine.exercises.map((e) => (//obtener excercise
            <Grid item xs={11} md={6}>
            <Exercise exercise={e.exercise} /> 
            </Grid>
          ))
        )}
        
      </Grid>
      <NavBar />
    </>
  );
};

export default ExerciseList;

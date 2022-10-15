import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import CardExercise from '../Components/CardExercise';
import { ejercicios } from '../ejercicios';
import Rutine from '../Components/Rutine';
import {rutinas } from '../rutinas';
import CardRoutine from '../Components/CardRoutine';

function showRoutines(routine) {
  console.log(routine);
  console.log(routine.exercises.lenght);
  return (
    <Grid item xs={11} md={12} xl={11} lg={11}>
      <Rutine id={routine.idRoutine} idPaciente = {routine.pacient} name={routine.name} imgSrc= {routine.imgSrc} frecuencia={routine.schedule.weeks} duracion={routine.schedule.times} cantidad={routine.exercises.lenght} isComplete={false}/>
    </Grid>
  );
}

const HomePacienteRoutine = () => {
  const currentUser = useContext(UserContext);

  return (
    <>
      <Header title='Home' icon={<HomeIcon />} />
      <Grid
        container
        justifyContent='center'
        sx={{ padding: '10vh 0' }}
        spacing={2}
      >
        {rutinas.map(showRoutines)}
      </Grid>
      <NavBar />
    </>
  );
};

export default HomePacienteRoutine;

import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import CardExercise from '../Components/CardExercise';
import { exercises, routines } from '../data';
import Exercise from '../Components/Exercise';

function showExercise(exercise) {
  return (
    <Grid item xs={11} md={12} xl={11} lg={11}>
      <Exercise id={exercise.id} name={exercise.name} description={exercise.instructions} imgSrc={exercise.videoURL} action={false} isComplete={false} />
    </Grid>
  );
}

/*
function showRoutines(routine) {
  return (
    <Grid item xs={11} md={12} xl={11} lg={11}>
      <CardRoutine routine={routine} />
    </Grid>
  );
}
*/
const HomePaciente = () => {
  const currentUser = useContext(UserContext);

  return (
    <>
      <Header title='Home' icon={<HomeIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        {exercises.map(showExercise)}
        {/*rutinas.map(showRoutines)*/}
      </Grid>
      <NavBar />
    </>
  );
};

export default HomePaciente;

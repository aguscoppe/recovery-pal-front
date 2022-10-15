import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import CardExercise from '../Components/CardExercise';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { routines } from '../data';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ExerciseList = () => {
  const { idRoutine } = useParams();
  console.log(idRoutine);
  const [routine] = routines.filter((r) => r.id === idRoutine);
  return (
    <>
      <Header title={routine.name} icon={<CalendarMonthIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          {routine.exercises.map((exercise) => (
            <CardExercise exercise={exercise} />
          ))}
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default ExerciseList;

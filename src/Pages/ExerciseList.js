import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { routines } from '../data';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Exercise from '../Components/Exercise';

const isNotIncluded = (id, arr) => {
  return arr.filter((el) => el.id !== id).length;
};

const ExerciseList = ({ exerciseList }) => {
  const { idRoutine } = useParams();
  const [routine] = routines.filter((r) => r.id === idRoutine);
  const exercises = exerciseList.filter((ex) =>
    isNotIncluded(ex.id, routine.exercises)
  );

  return (
    <>
      <Header title={routine.name} icon={<CalendarMonthIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          {exercises.map((exercise) => (
            <Exercise exercise={exercise} />
          ))}
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default ExerciseList;

import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { routines } from '../data';
import Routine from '../Components/Routine';

const PatientRoutine = () => {
  return (
    <>
      <Header title='Home' icon={<HomeIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          {routines.map((routine) => (
            <Routine routine={routine} />
          ))}
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default PatientRoutine;

import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';


const PacientRoutineExcercise = () => {
    const currentUser = useContext(UserContext);
    return (
      <>
        <Header title='Home' icon={<HomeIcon />} />
        <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
            
        </Grid>
        <NavBar />
      </>
    );
  };
  
  export default PacientRoutineExcercise
  ;
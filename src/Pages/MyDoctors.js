import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid, Typography } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import SmsIcon from '@mui/icons-material/Sms';
import MedicalServices from '@mui/icons-material/MedicalServices';


const MyDoctors = () => {
  const currentUser = useContext(UserContext);
  return (
    <>
      <Header title='My Fisio' icon={<MedicalServices />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          <Typography variant='h4' >Coming Soon...</Typography>
          <Typography variant='body1' marginTop='20px'>
          </Typography>
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default MyDoctors;

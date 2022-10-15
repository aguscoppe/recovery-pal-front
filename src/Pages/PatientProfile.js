import { useState } from 'react';
import { Box, Grid, Typography, Avatar, Button, Tab } from '@mui/material';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Routine from '../Components/Routine';
import NavBar from '../Components/NavBar';
import { patient, routines } from '../data';

/** Esta Pagina es el perfil del paciente que el doctor puede ver, aca puede administrar las rutinas del paciente y crear nuevas  */
const PatientProfile = () => {
  const theme = useTheme();
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        bgcolor={theme.palette.primary.main}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        flexWrap='wrap'
        sx={{ width: '100%', height: '25vh' }}
      >
        <Avatar
          alt='FotoPerfilPaciente'
          src={patient.imgSrc}
          sx={{ width: 90, height: 90 }}
        ></Avatar>
        <Typography variant='h4' color={theme.palette.textPrimary.main}>
          {patient.name} {patient.surname}
        </Typography>
        <Typography variant='body1' color={theme.palette.textSecondary.main}>
          Edad: 33
        </Typography>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            centered
          >
            <Tab label='Rutina' value='1' />
            <Tab label='Videos' value='2' />
            <Tab label='Progreso' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Grid
            container
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Grid sx={{ textAlign: 'center', width: '100%' }}>
              <Link to={`/createRoutine`} style={{ textDecoration: 'none' }}>
                <Button
                  size='large'
                  variant='contained'
                  sx={{ marginBottom: '12px' }}
                >
                  CREAR RUTINA
                </Button>
              </Link>
              {routines.map((routine) => (
                <Routine routine={routine} />
              ))}
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='2'>
          <Typography>Coming Soon</Typography>
        </TabPanel>
        <TabPanel value='3'>
          <Typography>Coming Soon</Typography>
        </TabPanel>
      </TabContext>
      <NavBar />
    </>
  );
};

export default PatientProfile;

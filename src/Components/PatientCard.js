import { Grid, Typography, Paper, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { getPhoto } from '../utils';

const PatientCard = ({ patient }) => {
  const theme = useTheme();
  const photo = getPhoto(patient.name);

  return (
    <Grid item xs={10} md={5}>
      <Paper elevation={3} sx={{ margin: '1vh', maxWidth: '650px' }}>
        <Grid container padding={'3vh'}>
          <Grid item xs={4.5}>
            <Avatar
              alt='FotoPerfilPaciente'
              src={photo}
              sx={{ width: 90, height: 90 }}
            />
          </Grid>
          <Grid
            item
            container
            alignContent='space-evenly'
            justifyContent='flex-end'
            xs={7.5}
          >
            <Grid item xs={12}>
              <Typography
                variant='h5'
                color={theme.palette.primary.main}
                align='right'
              >
                {patient.name} {patient.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant='subtitle2'
                color={theme.palette.primary.main}
                align='right'
              >
                {patient.suffering}
              </Typography>
            </Grid>
            <Grid item xs={12} align='right'>
              <Link
                to={`/patient/${patient._id}`}
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant='contained'
                  color={'secondary'}
                  sx={{ color: 'white' }}
                >
                  Ver Perfil
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default PatientCard;

import { Grid, Typography, Paper, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';

const PatientCard = ({ patient }) => {
  const theme = useTheme();
  return (
    <Grid item xs={10} md={5}>
      <Paper elevation={3} sx={{ margin: '2vh' }}>
        <Grid container padding={'3vh'}>
          <Grid item xs={4.7}>
            <Avatar
              alt='FotoPerfilPaciente'
              src='https://mui.com/static/images/avatar/3.jpg'
              sx={{ width: 90, height: 90 }}
            />
          </Grid>
          <Grid
            item
            container
            direction='column'
            alignContent='space-evenly'
            flexWrap='nowrap'
            xs={7}
          >
            <Grid item xs={8.2}>
              <Typography variant='h5' color={theme.palette.primary.main}>
                {patient.name} {patient.surname}
              </Typography>
            </Grid>
            <Grid item xs={4} justifySelf='end'>
              <Link
                to={`/patient/${patient.id}`}
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

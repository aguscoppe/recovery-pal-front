import { Grid, Card, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPlayer from 'react-player';

const Routine = ({ routine }) => {
  const { _id, name, exercises, isComplete } = routine;
  const duration = routine.schedule.weeks
  const frequency = routine.schedule.times

  return (
    <Link to={`/routine/${_id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={
          isComplete
            ? { border: '2px solid green', marginBottom: '12px' }
            : { marginBottom: '12px' }
        }
      >
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item xs={5} margin='10px'>
            <ReactPlayer
              light
              url={routine.exercises[0].videoURL}
              width='100%'
              height='100%'
            />
          </Grid>
          <Grid item xs={isComplete ? 4 : 5} margin='10px'>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: '500' }}>
                {name}
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: '500' }}>
                <CalendarTodayIcon /> {frequency} por semana
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: '500' }}>
                <AccessTimeIcon /> {duration} semanas
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: '500' }}>
                <VideoLibraryIcon /> {exercises.length} ejercicios
              </Typography>
            </Grid>
          </Grid>
          {isComplete && (
            <Grid item xs={1}>
              <IconButton>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Card>
    </Link>
  );
};

export default Routine;

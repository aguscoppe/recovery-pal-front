import { Box, Grid, Card, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPlayer from 'react-player';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RepeatIcon from '@mui/icons-material/Repeat';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Exercise = ({ exercise }) => {
  const { _id, videoURL, videoTitle, instructions, action } = exercise.exercise;
  const { sets, weight, repetitions } = exercise;
  const { isComplete } = exercise; //ya que is complete esta sobre el ejercicio con peso y set

  console.log(exercise);
  return (
    <Link to={`exercise/${_id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={
          isComplete
            ? { border: '2px solid #5BA102', marginBottom: '12px' }
            : { marginBottom: '12px' }
        }
      >
        <Grid container>
          <ReactPlayer url={videoURL} width='100%' height='100%' />
          <Grid
            item
            xs={12}
            margin='10px'
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
          >
            <Typography variant='h6' sx={{ fontWeight: '500' }}>
              {videoTitle}
            </Typography>
            {isComplete && (
              <IconButton>
                <CheckCircleIcon sx={{ color: '#5BA102' }} />
              </IconButton>
            )}
          </Grid>
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Box display='flex' alignItems='center'>
              <AddTaskIcon sx={{ fontSize: '1rem', margin: '6px' }} />
              <Typography variant='body2'>{sets} Series</Typography>
            </Box>
            <Box display='flex' alignItems='center'>
              <RepeatIcon sx={{ fontSize: '1rem', margin: '6px' }} />
              <Typography variant='body2'>
                {repetitions} Repeticiones
              </Typography>
            </Box>
            <Box display='flex' alignItems='center'>
              <FitnessCenterIcon sx={{ fontSize: '1rem', margin: '6px' }} />
              <Typography variant='body2'>{weight}</Typography>
            </Box>
          </Grid>
          {action && (
            <Grid item xs={1}>
              <IconButton onClick={action.function}>
                {action.type === 'add' && (
                  <AddCircleIcon sx={{ color: 'lightblue' }} />
                )}
                {action.type === 'remove' && (
                  <DeleteIcon sx={{ color: 'red' }} />
                )}
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Card>
    </Link>
  );
};

export default Exercise;

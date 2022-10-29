import { Grid, Card, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const Exercisev2 = ({ exercise }) => {
  const { _id, videoURL, videoTitle, instructions } = exercise;
  console.log(exercise);

  return (
    <Link to={`${_id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ marginTop: '12px' }}>
        <Grid container
        justifyContent="center"
        sx={{ padding: "10vh 0" }}>
          <Grid item xs={6} margin='10px'>
            <ReactPlayer light url={videoURL} width='80%' height='80%' />
          </Grid>
          <Grid item xs={4} margin='10px'>
            <Typography variant='h6' sx={{ fontWeight: '500' }}>
              {videoTitle}
            </Typography>
            <Grid item xs={1} >
              <IconButton >
                  <ExpandCircleDownIcon sx={{ color: 'lightblue' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

export default Exercisev2;

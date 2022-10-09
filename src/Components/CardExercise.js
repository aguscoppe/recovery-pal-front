import { CardMedia, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';


export default function CardExercise(props) {
  const exercise = props.exercise;

  return (
    <Link to={`/home/${exercise.id}`} style={{ textDecoration: 'none' }}> 
    <Card>
      <Grid sx={{ p: "20px" }} container columnSpacing={2}>
        <Grid item xs={6} xl={3} lg={3} md={3}>
          <ReactPlayer light url={exercise.videoURL} width='100%' height='100%' />
        </Grid>
        <Grid item xs={6} xl={6} lg={6} md={6}>
          <CardHeader title={exercise.videoTitle} />
          <CardContent>
            <Typography>{exercise.instructions}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    </Link>
  );
}

import { CardMedia, Typography, Button } from "@mui/material";
import { Card } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function CardExercise(props) {
  const exercise = props.exercise;
  const navigate = useNavigate();

/* con esto funciona pero queda anidado y quiero que sea otra tab, pero el header cambia
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = 'playvideo'; 
    navigate(path);
  }
*/
  return (
    <Link to={`${exercise.videoTitle}`}> 
    <Card>
      <Grid sx={{ p: "20px" }} container columnSpacing={2}>
        <Grid item xs={6} xl={3} lg={3} md={3}>
          <CardMedia component="img" size="80%" sx={{margin: "auto",}} image={exercise.videoURL}/>
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

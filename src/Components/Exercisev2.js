import { Grid, Card, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const Exercisev2 = ({ exercise }) => {
  const { _id, videoURL, videoTitle, instructions } = exercise;
  console.log(exercise);

  return (
    <Link to={`${_id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ marginBottom: "12px" }}>
        <Grid container alignItems="center" >
          <Grid item xs={6} margin="10px">
            <ReactPlayer url={videoURL} width="100%" height="100%" />
          </Grid>
          <Grid item xs={4} margin="10px">
            <Typography variant="h6" sx={{ fontWeight: "500" }}>
              {videoTitle}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <ExpandCircleDownIcon sx={{ color: "lightblue" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

export default Exercisev2;

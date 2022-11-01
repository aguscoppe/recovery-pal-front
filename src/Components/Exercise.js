import { Grid, Card, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactPlayer from "react-player";
import AddTaskIcon from '@mui/icons-material/AddTask';
import RepeatIcon from '@mui/icons-material/Repeat';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Exercise = ({ exercise }) => {
  const { _id, videoURL, videoTitle, instructions, action } = exercise.exercise;
  const {sets,weight,repetitions}=exercise
  const { isComplete } = exercise; //ya que is complete esta sobre el ejercicio con peso y set
  

  console.log(exercise);
  return (
    <Link to={`exercise/${_id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={
          isComplete
            ? { border: "2px solid green", marginBottom: "12px" }
            : { marginBottom: "12px" }
        }
      >
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} margin="10px">
          <Typography align="center" variant="h6" sx={{ fontWeight: "500" }}>
                {videoTitle}
              </Typography>
          </Grid>
          <Grid item xs={6} margin="10px">
            <ReactPlayer url={videoURL} width="100%" height="100%" />
          </Grid>
          <Grid item xs={4} margin="10px">
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                <AddTaskIcon /> {sets} Sets
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                <RepeatIcon /> {repetitions} Repeticiones
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                <FitnessCenterIcon /> {weight} Kg
              </Typography>
              
            </Grid>
          </Grid>
          {action && (
            <Grid item xs={1}>
              <IconButton onClick={action.function}>
                {action.type === "add" && (
                  <AddCircleIcon sx={{ color: "lightblue" }} />
                )}
                {action.type === "remove" && (
                  <DeleteIcon sx={{ color: "red" }} />
                )}
              </IconButton>
            </Grid>
          )}
          {isComplete && (
            <Grid item xs={1}>
              <IconButton>
                <CheckCircleIcon sx={{ color: "green" }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Card>
    </Link>
  );
};

export default Exercise;

import { Grid, Card, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const Rutine = ({
  id,
  idPaciente,
  name,
  imgSrc,
  frecuencia,
  duracion,
  cantidad,
  isComplete,
}) => {
  return (
    <Link to={`/paciente/${idPaciente}/${id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={
          isComplete
            ? { border: "2px solid green", margin: "1vh" }
            : { margin: "1vh" }
        }
      >
        <Grid container justifyContaint="center" alignItems="center">
          <Grid item xs={5} margin="10px">
            <img
              src={imgSrc}
              alt={name}
              style={{ width: "100%", height: "100%", borderRadius: "6px" }}
            />
          </Grid>
          <Grid item xs={isComplete ? 4 : 5} margin="10px">
            <Typography variant="h6" sx={{ fontWeight: "500" }}>
              {name}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "500" }}>
              <CalendarTodayIcon /> {frecuencia}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "500" }}>
              <AccessTimeIcon /> {duracion}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "500" }}>
              <VideoLibraryIcon /> {cantidad}
            </Typography>
          </Grid>
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

export default Rutine;

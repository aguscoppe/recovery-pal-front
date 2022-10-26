import { Grid, Box, Typography } from "@mui/material";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { theme } from "../theme";

const Progress = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Grid justifyContent="center" alignItems="center" container>
      <Grid sx={{ textAlign: "center" }} item xs={12}>
        <Typography variant="h5">
          ¡Tienes una racha de <Typography variant="h5">6 Semanas!</Typography>
        </Typography>
      </Grid>

      <Grid item xs={12} marginTop="20px">
        <Typography
          color={theme.palette.primary.main}
          fontWeight="700"
          marginBottom="10px"
        >
          Estadísticas
        </Typography>
        <Statistics />
      </Grid>

      <Grid item xs={12} marginTop="20px">
        <Typography
          color={theme.palette.primary.main}
          fontWeight="700"
          marginBottom="10px"
        >
          Logros
        </Typography>
        <Achievements />
      </Grid>
    </Grid>
  );
};

export default Progress;

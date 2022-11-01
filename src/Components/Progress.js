import { Grid, Box, Typography } from "@mui/material";
import Achievements from "./Achievements";
import Statistics from "./Statistics";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import { theme } from "../theme";
import {
  achievements,
  achievementsRoutine,
} from "./../Controllers/AchievementEntry.Controller";

const Progress = ({ patient, routineId }) => {
  const [patientAchievements, setPatientAchievements] = useState(null);
  const [routineAchievements, setRoutineAchievements] = useState(null);

  const currentUser = useContext(UserContext);

  useEffect(() => {
    getPatientAchievements();
    getRoutineAchievements();
  }, []);

  const getPatientAchievements = async () => {
    const response = await achievements(patient._id);
    const { data } = response;
    setPatientAchievements(data);
  };

  const getRoutineAchievements = async () => {
    const response = await achievementsRoutine(routineId);
    const { data } = response;

    setRoutineAchievements(data);
  };

  return (
    <Grid justifyContent="center" alignItems="center" container>
      <Grid sx={{ textAlign: "center" }} item xs={12}>
        {currentUser.role === "doctor" ? (
          <Typography variant="h5">
            ¡{patient.name} {patient.lastName} tiene una racha de
            <Typography
              variant="h5"
              sx={{ color: theme.palette.secondary.main, fontWeight: "600" }}
            >
              6 Semanas!
            </Typography>
          </Typography>
        ) : (
          <Typography variant="h5">
            ¡Tienes una racha de
            <Typography
              variant="h5"
              sx={{ color: theme.palette.secondary.main, fontWeight: "600" }}
            >
              6 Semanas!
            </Typography>
          </Typography>
        )}
      </Grid>
      {currentUser.role === "doctor" && (
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
      )}

      <Grid item xs={12} marginTop="20px">
        <Typography
          color={theme.palette.primary.main}
          fontWeight="700"
          marginBottom="10px"
        >
          Logros
        </Typography>
        <Achievements achievements={patientAchievements} />
      </Grid>
    </Grid>
  );
};

export default Progress;

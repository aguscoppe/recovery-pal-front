import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import Achievements from './Achievements';
import Statistics from './Statistics';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { theme } from '../theme';
import {
  achievements,
  achievementsRoutine,
  routineReport,
} from './../Controllers/AchievementEntry.Controller';

const Progress = ({ patient, routineId }) => {
  console.log('ERRRORR DE PRROOO', routineId);
  const [patientAchievements, setPatientAchievements] = useState(null);
  const [routineAchievements, setRoutineAchievements] = useState(null);
  const [report, setReport] = useState(null);

  const currentUser = useContext(UserContext);

  useEffect(() => {
    getPatientAchievements();
    getRoutineAchievements();
    getRoutineReport();
  }, []);

  const getPatientAchievements = async () => {
    const response = await achievements(patient._id);
    console.log('Response de achivementes que rompe');
    console.log(response);
    const { data } = response;
    const res_achievements = data.Achievements;
    setPatientAchievements(res_achievements);
  };

  const getRoutineAchievements = async () => {
    const response = await achievementsRoutine(routineId);
    console.log('Response de  que rompe');
    const { data } = response;
    const res_achievements = data.Achievements;
    setRoutineAchievements(res_achievements);
  };

  const getRoutineReport = async () => {
    const response = await routineReport(routineId);
    console.log('Res que rompe', response);
    const { data } = response;
    const report = data.Achievements;
    setReport(report);
  };

  const Banner = ({ role }) => {
    return (
      <Typography variant='h5' sx={{ fontWeight: '700' }}>
        {role !== 'paciente'
          ? `¡${patient.name} ${patient.lastName} tiene una racha de `
          : `¡Tienes una racha de `}
        <Typography
          variant='h5'
          sx={{ color: theme.palette.secondary.main, fontWeight: '700' }}
        >
          28 sesiones!
        </Typography>
      </Typography>
    );
  };

  if (!report) {
    return (
      <Grid justifyContent='center' alignItems='center' container>
        <Grid sx={{ textAlign: 'center' }} item xs={12}>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid justifyContent='center' alignItems='center' container>
      <Grid sx={{ textAlign: 'center' }} item xs={12}>
        <Banner role={currentUser.role} />
      </Grid>
      {currentUser.role === 'doctor' && (
        <Grid item xs={12} marginTop='20px'>
          <Typography
            color={theme.palette.primary.main}
            fontWeight='700'
            marginBottom='10px'
          >
            Estadísticas
          </Typography>
          <Statistics
            report={report}
            routineAchievements={routineAchievements}
          />
        </Grid>
      )}

      <Grid item xs={12} marginTop='30px' marginBottom='30px'>
        <Typography
          color={theme.palette.primary.main}
          fontWeight='700'
          marginBottom='10px'
        >
          Logros
        </Typography>
        {patientAchievements === null ? (
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Grid>
        ) : (
          <Achievements
            achievements={patientAchievements}
            routineAchievements={routineAchievements}
            report={report}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Progress;

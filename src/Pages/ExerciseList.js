import { useParams } from 'react-router-dom';
import { Grid,Tab, Typography } from '@mui/material';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Exercise from '../Components/Exercise';
import { useContext, useState, useEffect } from 'react';
import { getRoutineById } from '../Controllers/RoutineEntry.Controller';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { getLastFeedbackByRoutin } from './../Controllers/FeedbackEntry.Controller';
import { UserContext } from '../Contexts/UserContext';
import Routine from "../Components/Routine";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const ExerciseList = ({ exerciseList }) => {
  const currentUser = useContext(UserContext);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const { idRoutine } = useParams();
  const [routine, setRoutine] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    const getFeedback = async function () {
      const respuesta = await getLastFeedbackByRoutin(idRoutine);
      console.log('Console log de respuesta de back ', respuesta);
      if (respuesta.rdo === 1) {
        console.log("No se encontro feedback")
        setFeedback("");
       //window.location.href = '/';
      } else {
        setFeedback(respuesta.feedback);
        console.log('Feedback: ', respuesta.feedback);
      }
    };

    const getRoutine = async function () {
      const respuesta = await getRoutineById(idRoutine);
      console.log('Console log de respuesta de back ', respuesta);
      if (respuesta.rdo === 1) {
        alert('Rutine invalida para usar esta pagina');
        window.location.href = '/';
      } else {
        setRoutine(respuesta.routine);
        console.log(respuesta.routine);
        if (currentUser.role === 'paciente') getFeedback(respuesta.routine);
      }
    };
    getRoutine();
  }, [idRoutine, currentUser]);

  useEffect(() => {
    if (routine && feedback) {
      if (routine.exercises) {
        const exercises = routine.exercises.map((e) =>
          feedback.exercisesDone.includes(e.exercise._id)
            ? { ...e, isComplete: true }
            : { ...e, isComplete: false }
        );
        console.log('exercises', exercises);
        setRoutine({ ...routine, exercises: exercises });
      }
    }
  }, [feedback]);

  return (
    <>
      <Header
        title={routine === null ? 'Cargando...' : routine.name}
        icon={<CalendarMonthIcon />}
        routineData={currentUser.role === 'paciente' ? routine : null}
      />
      <TabContext value={value}>
      <Grid container justifyContent="center" sx={currentUser.role === "paciente" ? { padding: "20vh 0" }:{ padding: "8vh 0" }}>
      <Grid item xs={12}> 
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Rutina" value="1" />
            <Tab label="Descripción" value="2" />
          </TabList>
        </Box>
        </Grid>

        <Grid item xs={12}> 
          <TabPanel value="1">
            <Grid container justifyContent='center' sx={{ paddingTop: '10vh 0' }}>
              {routine === null || (feedback === null && currentUser.role === "paciente") ? (
                <Grid item xs={12} md={12}>
                  <Box display="flex" justifyContent="center">
                    <CircularProgress />
                  </Box>
                </Grid>
              ) : (
                routine.exercises.map((e) => (//obtener excercise
                  <Grid item xs={11} md={6}>
                    <Exercise exercise={e} />
                  </Grid>
                ))
              )}
            </Grid>
          </TabPanel>
          
          <TabPanel value="2">
            
          
              <Typography align= "center" fontSize={'1.5em'}> {routine === null ? 'Cargando...' : routine.comment} 
              </Typography>
            
          </TabPanel>
          </Grid>
          </Grid>

        </TabContext>
      <NavBar />
    </>
  );
};

export default ExerciseList;


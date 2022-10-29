import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid, Typography } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useState, useEffect } from "react";
import { getDoctorById } from '../Controllers/DoctorEntry.Controller';
import ExerciseList from './ExerciseList';
import Exercise from '../Components/Exercise';
import Exercisev2 from '../Components/Exercisev2';
import CircularProgress from '@mui/material/CircularProgress';
import SearchExercise from '../Components/SearchExercise';
import CardExercise from '../Components/CardExercise';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Videos = () => {
  const currentUser = useContext(UserContext);
  const [doctor, setDoctor] = useState(null);
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    const getDoctor = async function () {
      const respuestaDoctor = await getDoctorById(currentUser._id);
      console.log(
        'Console log de respuesta de back ',
        JSON.stringify(respuestaDoctor)
      );
      if (respuestaDoctor.rdo === 1) {
        alert('No existe el doctor');
        window.location.href = '/';
      } else {
        setDoctor(respuestaDoctor.doctor);
        console.log(JSON.stringify(respuestaDoctor));
        setExercises(respuestaDoctor.doctor.exercises);
      }
    };
    getDoctor();
  }, [currentUser._id]);
  return (
    <>
      <Header title='Videos' icon={<VideocamIcon />} />
      <Grid container
      direction="column"
        justifyContent="center"
        sx={{ paddingTop: '10vh' }}>
        <Grid item xs={12} md={12} alignSelf= "center" sx= {{pt: 2}}>

          <SearchExercise />

        </Grid>
        <Grid item xs={11} md={6} marginLeft="20px" marginRight="20px">
        {exercises === null ? (
          <CircularProgress />
        ) : (
          exercises.map((e) => (<Exercisev2 exercise={e} />))
        )}
        </Grid>
      </Grid>
      <Fab
                  color='primary'
                  aria-label='add'
                  sx={{
                    position: 'fixed',
                    bottom: 80,
                    right: 25,
                  }}
                >
                  <AddIcon />
                </Fab>
      <NavBar />
    </>
  );
};

export default Videos;

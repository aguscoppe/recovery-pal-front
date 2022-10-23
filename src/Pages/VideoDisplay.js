import { Grid, Typography, Button } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ReactPlayer from 'react-player';
import * as React from 'react';
import { useState, useEffect } from 'react';
import ModalAlert from '../Components/ModalAlert';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { getRoutineById } from '../Controllers/RoutineEntry.Controller';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";


function VideoDisplay({ exerciseList, handleCompleteExercise }) {
  const { idRoutine, idExercise } = useParams();
  const [routine, setRoutine] = useState(null)
  const currentUser = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = useState({ type: 'success', open: false });
  const [exercise, setExercise] = useState(null)
  const nextURL = `/routine/${idRoutine}`;

  const handleClick = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
    handleCompleteExercise(idExercise);
    setModal({ type: 'success', open: true });
    setOpen(true);
  };

  useEffect(() => {
    const getRoutine = async function () {
      const respuesta = await getRoutineById(idRoutine)
      console.log("Console log de respuesta de back ", respuesta);
      if (respuesta.rdo === 1) {
        alert("Rutine invalida para usar esta pagina");
        window.location.href = "/";
      } else {
        setRoutine(respuesta.routine);
        console.log(respuesta.routine);
        setExercise(respuesta.routine.exercises.filter((e) => e._id === idExercise)[0])
      }
    };
    getRoutine();
  }, [idRoutine, idExercise]);


  return (
    <>
      <Header title={routine === null? "Cargando...": exercise.videoTitle} icon={<FitnessCenterIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
      {routine === null ? (
          <Grid item xs={12} md={12}>
            <Box  display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          </Grid>
        ) : (
        <Grid item xs={11} md={6}>
          <Typography variant='h3'>{exercise.videoTitle}</Typography>
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <ReactPlayer
              size='100%'
              controls
              url={exercise.videoURL}
              onReady={() => console.log('onReady callback')}
              onStart={() => console.log('onStart callback')}
              onPause={() => console.log('onPause callback')}
              onEnded={() => console.log('onEnded callback')}
              onError={(e) => console.log(e)}
            />

          </div>
          <Typography variant='body1' marginTop='20px'>
            {exercise.instructions}
          </Typography>
          {currentUser.role === 'paciente' ? (
            <Button
              onClick={handleClick}
              fullWidth
              variant='contained'
              size='large'
            >
              Completado
            </Button>
          ) : null}
        </Grid> ) }
      </Grid>
      <NavBar />
      <ModalAlert
        open={open}
        type={modal.type}
        title='¡Felicitaciones!'
        subtitle={`Has completado ${
          true ? 'el ejercicio' : 'la rutina'
        } `}
        primaryBtnText='Continuar'
        setNotOpen={() => {
          setOpen(false);
          console.log(modal);
        }}
        secondaryBtnPage={`/routine/${idRoutine}`}
        secondaryBtnText='Volver'
        primaryBtnPage={nextURL}
      />
    </>
  );
}

export default VideoDisplay;

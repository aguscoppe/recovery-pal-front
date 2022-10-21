import { Grid, Typography, Button } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import { exercises } from '../data';
import { useParams } from 'react-router-dom';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ReactPlayer from 'react-player';
import * as React from 'react';
import { useState } from 'react';
import ModalAlert from '../Components/ModalAlert';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

function VideoDisplay({ exerciseList, handleCompleteExercise }) {
  const { idRoutine, idExercise } = useParams();
  const [exercise] = exercises.filter((e) => e._id === idExercise);
  const currentUser = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [modal, setModal] = useState({ type: 'success', open: false });
  const filtered = exerciseList.filter((ex) => !ex.isComplete);
  const nextURL = filtered.length
    ? `/routine/${idRoutine}/exercise/${filtered[0]._id}`
    : `/routine/${idRoutine}`;

  const handleClick = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
    handleCompleteExercise(idExercise);
    setModal({ type: 'success', open: true });
    setOpen(true);
  };
  console.log(exercise.videoURL);

  return (
    <>
      <Header title={exercise.videoTitle} icon={<FitnessCenterIcon />} />
      <Grid
        container
        justifyContent="center"
        alignItems="space-between"
        sx={{ padding: '8vh 0' }}
      >
        <Grid item xs={11} md={6} sx={{ height: '100%' }}>
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="600"
            marginTop="20px"
            marginBottom="20px"
          >
            {exercise.videoTitle}
          </Typography>
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <ReactPlayer
              height="auto"
              controls
              url={exercise.videoURL}
              onReady={() => console.log('onReady callback')}
              onStart={() => console.log('onStart callback')}
              onPause={() => console.log('onPause callback')}
              onEnded={() => console.log('onEnded callback')}
              onError={(e) => console.log(e)}
            />
          </div>
          <Typography variant="body1" marginTop="20px" marginBottom="40px">
            {exercise.instructions}
          </Typography>
          {currentUser.role === 'paciente' ? (
            <Button
              onClick={handleClick}
              fullWidth
              variant="contained"
              size="large"
            >
              Completado
            </Button>
          ) : null}
        </Grid>
      </Grid>
      <NavBar />
      <ModalAlert
        open={open}
        type={modal.type}
        title="¡Felicitaciones!"
        subtitle={`Has completado ${
          filtered.length ? 'el ejercicio' : 'la rutina'
        } `}
        primaryBtnText="Continuar"
        setNotOpen={() => {
          setOpen(false);
          console.log(modal);
        }}
        secondaryBtnPage={`/routine/${idRoutine}`}
        secondaryBtnText="Volver"
        primaryBtnPage={nextURL}
      />
    </>
  );
}

export default VideoDisplay;

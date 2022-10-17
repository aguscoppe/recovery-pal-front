import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import ModalAlert from '../Components/ModalAlert';
import { Autocomplete, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Link } from 'react-router-dom';
import { exercises } from '../data';
import ModalExercise from '../Components/ModalExercise';

const flexCenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2vh',
};

const textFieldSpacing = {
  marginBottom: '20px',
};

const CreateRoutine = (pacinetId) => {
  const [rutineData, setRutineData] = useState({
    name: '',
    frecuency: '',
    duration: '',
    exercises: [],
    imageUrl: '',
  });
  //recuperacion de los ejercicios de la base
  let listEjercicios = exercises.map((exercise) => exercise.videoTitle);

  const [modal, setModal] = useState({ type: 'success', open: false });
  const [showExerciseModal, setShowExerciseModal] = useState(false);

  const handleClick = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
    setModal({ type: 'success', open: true });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setRutineData({ ...rutineData, [name]: value });
  };

  const openExerciseModal = () => {
    setShowExerciseModal(!showExerciseModal);
  };

  return (
    <>
      <Header title="Crear Rutina" icon={<AddCircleOutlineRoundedIcon />} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: '10vh' }}
      >
        <ModalAlert
          open={modal.open}
          type={modal.type}
          title="Bien hecho!"
          subtitle="El ejercicio ha sido creado con exito"
          primaryBtnText="Continuar"
          primaryBtnPage="/home"
        />
        <ModalExercise
          open={showExerciseModal}
          handleClose={openExerciseModal}
        />
        <Grid item xs={10} sm={6} md={4}>
          <TextField
            name="name"
            value={rutineData.name}
            fullWidth
            label="Nombre"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="frecuency"
            value={rutineData.frecuency}
            fullWidth
            label="Frecuencia"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="duration"
            value={rutineData.duration}
            fullWidth
            label="Duracion"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <Autocomplete
            multiple
            disablePortal
            id="combo-box-demo"
            options={listEjercicios}
            renderInput={(params) => (
              <TextField {...params} label="Buscar ejercicio" />
            )}
            sx={textFieldSpacing}
            noOptionsText="No hay resultados"
          />
          <Grid item container alignItems="center" direction="column">
            <Grid item paddingTop={3}>
              <Button
                size="large"
                variant="contained"
                onClick={openExerciseModal}
              >
                CREAR EJERCICIO
              </Button>
            </Grid>
            <Grid item paddingTop={3}>
              <Button
                disabled={
                  rutineData.name === '' ||
                  rutineData.frecuency === '' ||
                  rutineData.duration === ''
                }
                variant="contained"
                onClick={handleClick}
                size="large"
              >
                FINALIZAR
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
};

export default CreateRoutine;

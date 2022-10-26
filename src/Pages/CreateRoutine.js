import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import ModalAlert from '../Components/ModalAlert';
import { Autocomplete, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Link } from 'react-router-dom';
import { exercises } from '../data';
import ModalExercise from '../Components/ModalExercise';
import { useParams } from "react-router-dom";

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
  const { idPatient } = useParams();
  const [rutineData, setRutineData] = useState({
    name: '',
    exercises: [],
    schedule:{
      days: '' ,
      weeks: ''
    },
    imageUrl: '',
    patient : idPatient,
    feedbacksDone : 0,
  });
  //recuperacion de los ejercicios de la base
  let listEjercicios = exercises.map((exercise) => exercise.videoTitle);

  const [modalAlertExercise, setModalAlertExercise] = useState({ type: 'success', open: false });
  const [modalAlertRoutine, setModalAlertRoutine] = useState({ type: 'success', open: false });

  const [showExerciseModal, setShowExerciseModal] = useState(false);

  
  const handleClickCrearRoutine = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
    setModalAlertRoutine({ type: 'success', open: true });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setRutineData({ ...rutineData, [name]: value });
  };

  const handleChangeDuration = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setRutineData({ ...rutineData, "schedule": {...rutineData.schedule, "weeks" : value} });
  };


  
  const handleChangeFrecuency = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setRutineData({ ...rutineData, "schedule": {...rutineData.schedule, "days" : value} });
  };

  const openExerciseModal = () => {
    setShowExerciseModal(!showExerciseModal);
  };

  const closeExerciseModal = () => {
    setShowExerciseModal(!showExerciseModal);
    setModalAlertExercise({...modalAlertExercise, open : true})
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
          open={modalAlertExercise.open}
          type={modalAlertExercise.type}
          setNotOpen={() => setModalAlertExercise({...modalAlertExercise, open : false})}
          title="Bien hecho!"
          subtitle="El ejercicio ha sido creado con exito"
          primaryBtnText="Continuar"
          primaryBtnPage="/createRoutine"
        />
        <ModalAlert
          open={modalAlertRoutine.open}
          type={modalAlertRoutine.type}
          setNotOpen={() => setModalAlertRoutine({...modalAlertRoutine, open : false})}
          title="Bien hecho!"
          subtitle="La rutina ha sido creada con exito !"
          primaryBtnText="Continuar"
          primaryBtnPage="/home"
        />
        <ModalExercise
          open={showExerciseModal}
          handleClose={closeExerciseModal}
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
            onChange={handleChangeFrecuency}
            sx={textFieldSpacing}
          />
          <TextField
            name="duration"
            value={rutineData.duration}
            fullWidth
            label="Duracion"
            variant="outlined"
            onChange={handleChangeDuration}
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
                onClick={handleClickCrearRoutine}
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

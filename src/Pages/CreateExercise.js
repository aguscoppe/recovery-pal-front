import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import ModalAlert from '../Components/ModalAlert';
import { Grid, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const flexCenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const textFieldSpacing = {
  marginBottom: '20px',
};

const CreateExercise = ({ doctorId }) => {
  const [exerciseData, setExerciseData] = useState({
    name: '',
    sets: '',
    weight: '',
    description: '',
    videoURL: '',
  });

  const [modal, setModal] = useState({ type: 'success', open: false });

  const handleClick = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
    setModal({ type: 'success', open: true });

    /*
    fetch('http://recoverypal.com/api/v1/createExercise', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: exerciseData.name,
        sets: exerciseData.sets,
        weight: exerciseData.weight,
        description: exerciseData.description,
        videoURL: exerciseData.videoURL,
      }),
    });
     */
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  return (
    <>
      <Header title="Crear Ejercicio" icon={<AddCircleOutlineRoundedIcon />} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh', width: '100%' }}
      >
        <ModalAlert
          open={modal.open}
          type={modal.type}
          title="Bien hecho!"
          subtitle="El ejercicio ha sido creado con exito"
          primaryBtnText="Continuar"
          primaryBtnPage="/home"
        />
        <Grid item xs={10} sm={6} md={4}>
          <TextField
            name="name"
            value={exerciseData.name}
            fullWidth
            label="Nombre"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="sets"
            value={exerciseData.sets}
            fullWidth
            label="Cantidad de sets"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="weight"
            value={exerciseData.weight}
            fullWidth
            label="Peso (opcional)"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="description"
            value={exerciseData.description}
            fullWidth
            label="Descripción"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="videoURL"
            value={exerciseData.videoURL}
            fullWidth
            label="Video"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <Box sx={flexCenter}>
            <Button
              disabled={
                exerciseData.name === '' ||
                exerciseData.sets === '' ||
                exerciseData.description === '' ||
                exerciseData.videoURL === ''
              }
              variant="contained"
              onClick={handleClick}
            >
              Finalizar
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
};

export default CreateExercise;

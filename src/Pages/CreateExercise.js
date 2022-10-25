import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import ModalAlert from '../Components/ModalAlert';
import { Grid, TextField, Button, Input } from '@mui/material';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { exerciseCreation } from '../Controllers/ExerciseEntry.Controller';

const flexCenter = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const textFieldSpacing = {
  marginBottom: '20px',
};
//create debe saber desde donde es llamado
const CreateExercise = ({ doctorId }) => {
  const [exerciseData, setExerciseData] = useState({
    name: '',
    description: '',
    videoURL: '',
  });

  const [modal, setModal] = useState({
    type: 'success',
    open: false,
    title: '',
    subtitle: '',
    primaryBtnText: '',
    primaryBtnPage: '',
  });

  const handleClick = async () => {
    createExercise();
  };

  const createExercise = async () => {
    try {
      const res = await exerciseCreation({
        doctor: doctorId,
        instructions: exerciseData.description,
        videoTitle: exerciseData.name,
        videoURL: exerciseData.videoURL,
      });

      if (res.rdo == 0) {
        setModal({
          type: 'success',
          open: true,
          title: '¡Bien hecho!',
          subtitle: 'El ejercicio ha sido creado con éxito.',
          primaryBtnText: 'Continuar',
          primaryBtnPage: '/home',
        });
      } else {
        setModal({
          type: 'error',
          open: true,
          title: 'Error',
          subtitle: 'Ha ocurrido un error en la creacion del ejercicio.',
          primaryBtnText: 'Volver',
          primaryBtnPage: '/createExercise',
        });
      }
    } catch (e) {
      console.log(e);
    }
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
        sx={{ paddingTop: '10vh' }}
      >
        <ModalAlert
          open={modal.open}
          type={modal.type}
          title={modal.title}
          subtitle={modal.subtitle}
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
            name="description"
            value={exerciseData.description}
            fullWidth
            label="Descripción"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <Input
            type="file"
            label="Video"
            sx={textFieldSpacing}
            disableUnderline
          />
          <Grid item container justifyContent="center">
            <Grid item>
              <Button
                disabled={
                  exerciseData.name === '' || exerciseData.description === ''
                }
                size="large"
                variant="contained"
                onClick={handleClick}
              >
                Finalizar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
};

export default CreateExercise;

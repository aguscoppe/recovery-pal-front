import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const CreateExercise = ({ doctorId }) => {
  const [exerciseData, setExerciseData] = useState({
    name: '',
    sets: 0,
    weight: 0,
    description: '',
    videoURL: '',
  });

  const flexCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const label = {
    color: '#0B3D60',
    fontWeight: '500',
  };

  const textFieldSpacing = {
    marginBottom: '20px',
  };

  const handleClick = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100vw',
          display: 'flex',
        }}
      >
        <Header
          title="Crear Ejercicio"
          icon={<AddCircleOutlineRoundedIcon />}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <Typography sx={label}>Nombre</Typography>
            <TextField
              sx={textFieldSpacing}
              name="name"
              value={exerciseData.name}
              onChange={handleChange}
              variant="outlined"
            />
            <Typography sx={label}>Cantidad de sets</Typography>
            <TextField
              sx={textFieldSpacing}
              name="sets"
              value={exerciseData.sets}
              onChange={handleChange}
              variant="outlined"
            />
            <Typography sx={label}>Peso (opcional)</Typography>
            <TextField
              sx={textFieldSpacing}
              name="weight"
              value={exerciseData.weight}
              onChange={handleChange}
              variant="outlined"
            />
            <Typography sx={label}>Descripcion</Typography>
            <TextField
              sx={textFieldSpacing}
              name="description"
              value={exerciseData.description}
              onChange={handleChange}
              variant="outlined"
            />
            <Typography sx={label}>Video</Typography>
            <TextField
              sx={textFieldSpacing}
              name="videoURL"
              value={exerciseData.videoURL}
              onChange={handleChange}
              variant="outlined"
            />
            <Box sx={flexCenter}>
              <Button
                sx={{
                  display: 'block',
                  alignSelf: 'center',
                  justifySelf: 'center',
                }}
                variant="contained"
                onClick={handleClick}
              >
                Finalizar
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Navbar />
      </Box>
    </>
  );
};

export default CreateExercise;

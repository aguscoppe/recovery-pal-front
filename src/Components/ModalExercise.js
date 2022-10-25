import {
  Modal,
  Grid,
  TextField,
  Button,
  Input,
  Box,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { theme } from '../theme';

const ModalExercise = ({ open, handleClose }) => {
  const [exerciseData, setExerciseData] = useState({
    name: '',
    sets: '',
    weight: '',
    description: '',
    videoURL: '',
  });

  const textFieldSpacing = {
    marginBottom: '20px',
  };

  const modalContainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: '20px',
  };

  const title = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    marginBottom: '50px',
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleModalClosing = () => {
    setExerciseData({
      name: '',
      description: '',
      videoURL: '',
    });
  };

  const handleClick = () => {
    //Logica para agregar ejercicio con backend
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleModalClosing}>
      <Box sx={modalContainer}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} m={4}>
            <Typography variant="h3" sx={title}>
              Crear Ejercicio
            </Typography>
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
      </Box>
    </Modal>
  );
};

export default ModalExercise;

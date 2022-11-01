import {
  Autocomplete,
  Grid,
  TextField,
  Button,
  Box,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
} from '@mui/material';
import { useContext, useState, useEffect } from 'react';
//import { getAllExcercises } from '../Controllers/ExerciseEntry.Controller';
import { exercises } from '../data';

const daysList = [
  { label: 'DO' },
  { label: 'LU' },
  { label: 'MA' },
  { label: 'MI' },
  { label: 'JU' },
  { label: 'VI' },
  { label: 'SA' },
];

const textFieldSpacing = {
  marginBottom: '20px',
};
/*
const handleAutocompleteChange = () => {
  {handleSelect}
}*/

const RoutineForm = ({
  rutineData,
  handleChange,
  handleCheckboxChange,
  handleSelect,
  openExerciseModal,
  setCurrentForm,
}) => {
  const [excerciseList, setExerciseList] = useState ([
    {
      exercise: { //esta parte viene del back
        _id: null,
        doctor: null ,
        instructions: null,
        videoTitle: null,
        videoURL: null,
      },
      repetitions: '',
      sets: '',
      weight: '',
    },
  ]);

  const btnDisabled =
    rutineData.name === '' ||
    rutineData.weeks === '' ||
    rutineData.exercises.length === 0 ||
    Object.values(rutineData.days).filter((val) => val).length === 0;

  useEffect(()=> {
     const getExcerciseList = async () => {
      const respuesta = await getAllExcercises();
      const data = await respuesta.json();
      setExerciseList({
        exercise: {
          _id: data._id,
          doctor: data.doctor,
          instructions: data.instructions,
          videoTitle: data.videoTitle,
          videoURL: data.videoURL,
        },
        repetitions: '',
        sets: '',
        weight: '',
      } );
    }
  getExcerciseList();}, []);

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{ paddingTop: '10vh' }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <TextField
          name='name'
          value={rutineData.name}
          fullWidth
          label='Nombre'
          variant='outlined'
          onChange={handleChange}
          sx={textFieldSpacing}
        />
        <TextField
          type='number'
          name='weeks'
          value={rutineData.weeks}
          fullWidth
          label='Duracion total (semanas)'
          variant='outlined'
          onChange={handleChange}
          sx={textFieldSpacing}
        />
        <Box sx={textFieldSpacing}>
          <FormLabel
            component='legend'
            color='primary'
            sx={{ marginLeft: '10px' }}
          >
            Días de ejercicios
          </FormLabel>
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            {daysList.map((day, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={day.label}
                labelPlacement='top'
                value={index}
                onChange={handleCheckboxChange}
                checked={rutineData.days[index]}
                sx={{ margin: 0 }}
              />
            ))}
          </FormGroup>
        </Box>
        <Autocomplete
          multiple
          disablePortal
          options={excerciseList} //useState
          renderInput={(params) => (
            <TextField {...params} label='Buscar ejercicio' />
          )}
          getOptionLabel={(option) => option.exercise.videoTitle}
          onChange={handleSelect}
          sx={textFieldSpacing}
          noOptionsText='No hay resultados'
          value={rutineData.exercises}
        />
        <Grid item container alignItems='center' direction='column'>
          <Grid item paddingTop={3}>
            <Button
              disabled={btnDisabled}
              variant='contained'
              onClick={() => setCurrentForm(1)}
              size='large'
            >
              CONTINUAR
            </Button>
          </Grid>
          <Grid item paddingTop={3}>
            <Button size='large' variant='outlined' onClick={openExerciseModal}>
              CREAR EJERCICIO
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoutineForm;

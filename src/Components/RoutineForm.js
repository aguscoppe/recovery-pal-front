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
import { getDoctorById } from '../Controllers/DoctorEntry.Controller';
import { UserContext } from '../Contexts/UserContext';

export const daysList = [
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

const RoutineForm = ({
  rutineData,
  handleChange,
  handleCheckboxChange,
  handleSelect,
  openExerciseModal,
  setCurrentForm,
}) => {
  console.log(rutineData)
  const currentUser = useContext(UserContext);
  const [exercises, setExercises] = useState([]);

  const btnDisabled =
    rutineData.name === '' ||
    rutineData.weeks === '' ||
    rutineData.comment === '' ||
    rutineData.exercises.length === 0 ||
    Object.values(rutineData.days).filter((val) => val).length === 0;

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
        var exercisesReturned = respuestaDoctor.doctor.exercises;
        const structure = {
          repetitions: '',
          sets: '',
          weight: '',
        };
        var exercisesList = [];

        for (var i = 0; i < exercisesReturned.length; i++) {
          exercisesList.push({
            ...structure,
            exercise: exercisesReturned[i],
          });
        }

        setExercises(exercisesList);

        //setExercises(exercisesReturned.map((e) => {"exercise": e}));
        console.log(JSON.stringify(respuestaDoctor));

        /*
        {
          exercise: {
            _id: 'ex1',
            doctor: 'do1',
            instructions: 'Caminar Recto durante 5 cuadras',
            videoTitle: 'Caminar Recto 5 Cuadras',
            videoURL: 'http://127.0.0.1:8080/videos/Caminar_Recto.mp4',
          },
          repetitions: '',
          sets: '',
          weight: '',
        }
        */
      }
    };
    getDoctor();
  }, [currentUser._id]);
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
          name='comment'
          value={rutineData.comment}
          fullWidth
          label='Comentario'
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
          options={exercises}
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

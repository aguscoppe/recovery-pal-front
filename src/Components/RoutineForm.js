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

const RoutineForm = ({
  rutineData,
  handleChange,
  handleCheckboxChange,
  handleSelect,
  openExerciseModal,
  setCurrentForm,
}) => {
  let listEjercicios = exercises.map((exercise) => exercise.videoTitle);
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
          name='frecuency'
          value={rutineData.frecuency}
          fullWidth
          label='Frecuencia (ejercicios por día)'
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
          options={listEjercicios}
          renderInput={(params) => (
            <TextField {...params} label='Buscar ejercicio' />
          )}
          onChange={handleSelect}
          sx={textFieldSpacing}
          noOptionsText='No hay resultados'
        />
        <Grid item container alignItems='center' direction='column'>
          <Grid item paddingTop={3}>
            <Button size='large' variant='outlined' onClick={openExerciseModal}>
              CREAR EJERCICIO
            </Button>
          </Grid>
          <Grid item paddingTop={3}>
            <Button
              disabled={
                rutineData.name === '' ||
                rutineData.frecuency === '' ||
                rutineData.weeks === ''
              }
              variant='contained'
              onClick={() => setCurrentForm(1)}
              size='large'
            >
              CONTINUAR
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RoutineForm;

import { Grid, TextField, Button, Card, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const textFieldSpacing = {
  marginBottom: '20px',
};

const Exercise = ({ name, handleExerciseChange, rutineData, index }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px',
        marginBottom: '24px',
      }}
    >
      <Typography
        variant='h6'
        color={theme.palette.secondary.main}
        sx={{ marginBottom: '12px' }}
      >
        {name}
      </Typography>
      <TextField
        label='Peso (en kg)'
        type='number'
        fullWidth
        sx={textFieldSpacing}
        name='weight'
        value={rutineData.exercises[index].weight}
        onChange={(e) => handleExerciseChange(e, index)}
      />
      <TextField
        label='Sets'
        type='number'
        fullWidth
        sx={textFieldSpacing}
        name='set'
        value={rutineData.exercises[index].set}
        onChange={(e) => handleExerciseChange(e, index)}
      />
      <TextField
        label='Repeticiones'
        type='number'
        fullWidth
        sx={textFieldSpacing}
        name='repeat'
        value={rutineData.exercises[index].repeat}
        onChange={(e) => handleExerciseChange(e, index)}
      />
    </Card>
  );
};

const ExerciseForm = ({
  rutineData,
  handleExerciseChange,
  handleSubmit,
  setCurrentForm,
}) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{ padding: '10vh 0' }}
    >
      <Grid item container alignItems='center' direction='column'>
        <Grid item xs={10} sm={6} md={4}>
          {rutineData.exercises.map((el, index) => (
            <Exercise
              key={index}
              name={el.exercise}
              handleExerciseChange={handleExerciseChange}
              rutineData={rutineData}
              index={index}
            />
          ))}
        </Grid>
        <Grid item paddingTop={3}>
          <Button
            size='large'
            variant='outlined'
            onClick={() => setCurrentForm(0)}
          >
            VOLVER
          </Button>
        </Grid>
        <Grid item paddingTop={3}>
          <Button variant='contained' size='large' onClick={handleSubmit}>
            FINALIZAR
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExerciseForm;
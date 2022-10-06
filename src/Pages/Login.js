import { Box, Grid, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { doctor, patient } from '../data';

const style = {
  container: {
    height: '100vh',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: '8px',
  },
  radio: {
    marginTop: '8px',
  },
  button: {
    marginTop: '20px',
  },
  error: {
    color: 'red',
    marginTop: '5px',
    marginBottom: '5px',
  },
};

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (email === patient.email) {
      setCurrentUser(patient);
      return navigate('/home');
    } else if (email === doctor.email) {
      setCurrentUser(doctor);
      return navigate('/home');
    }
  };

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={style.container}
    >
      <Grid item xs={10} sm={6} md={4}>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={logo} alt='logo' />
        </Box>
        <TextField
          name='email'
          value={email}
          fullWidth
          label='Email'
          variant='outlined'
          type='email'
          onChange={handleChange}
          sx={style.input}
        />
        <TextField
          name='password'
          value={password}
          fullWidth
          label='Contraseña'
          variant='outlined'
          type='password'
          onChange={handleChange}
          sx={style.input}
        />
        <Button
          fullWidth
          variant='contained'
          size='large'
          sx={style.button}
          disabled={email === '' || password === ''}
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;

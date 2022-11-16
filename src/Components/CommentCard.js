import { Grid, Typography, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CommentCard = ({ comment }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  //TO DO: Esto deberia traerse desde el back, para facilitar las cosas.
  const idRoutine = '63750e050403e1073c19fc93';
  const patientEmail = 'fdgerstner@gmail.com';

  const text = {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  };

  const options = {
    backgroundColor: '#FAFAFA',
    borderRadius: '20px',
    position: 'relative',
    right: '120px',
    bottom: '40px',
    width: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  return (
    <Grid item container xs={10} md={5} sx={{ pt: 1 }}>
      <Paper elevation={3} sx={{ margin: '1vh', width: '100%' }}>
        <Grid container padding={'3vh'}>
          <Grid
            item
            xs={11}
            lg={11}
            xl={11}
            md={11}
            container
            spacing={2}
            sx={{ width: '100%' }}
          >
            <Grid item xs={12} md={12} ld={12} xl={12}>
              <Typography
                display='inline'
                variant='body1'
                marginTop='5px'
                sx={text}
              >
                {'Nombre: '}
              </Typography>
              <Typography display='inline' variant='body1' marginTop='5px'>
                {comment.name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} ld={12} xl={12}>
              <Typography
                display='inline'
                variant='body1'
                marginTop='5px'
                sx={text}
              >
                {'Rutina: '}
              </Typography>
              <Typography display='inline' variant='body1' marginTop='5px'>
                {comment.routine}
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} ld={12} xl={12}>
              <Typography
                display='inline'
                variant='body1'
                marginTop='5px'
                sx={text}
              >
                {'Fecha: '}
              </Typography>
              <Typography display='inline' variant='body1' marginTop='5px'>
                {comment.date}
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} ld={12} xl={12}>
              <Typography
                display='inline'
                variant='body1'
                marginTop='5px'
                sx={text}
              >
                {'Mensaje: '}
              </Typography>
              <Typography display='inline' variant='body1' marginTop='5px'>
                {comment.comment}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={1} lg={1} xl={1} md={1}>
            <IconButton aria-label='Responder' onClick={handleShowOptions}>
              {showOptions ? (
                <CloseIcon sx={{ color: theme.palette.primary.main }} />
              ) : (
                <MoreVertIcon sx={{ color: theme.palette.primary.main }} />
              )}
            </IconButton>
            {showOptions && (
              <Box sx={options}>
                <Button
                  variant='text'
                  sx={text}
                  onClick={() => {
                    return navigate(`/routine/${idRoutine}`);
                  }}
                >
                  Ver Rutina
                </Button>
                <Button
                  variant='text'
                  sx={text}
                  onClick={() => {
                    return (window.location = `mailto:${patientEmail}`);
                  }}
                >
                  Enviar Mail
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default CommentCard;

import { Grid, Typography, Button, Modal, Box, fabClasses } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import { ejercicios } from '../ejercicios';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack, CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import * as React from 'react';
import { useState } from 'react';
import ModalAlert from '../Components/ModalAlert';
import HomeIcon from '@mui/icons-material/Home';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';

const VideoDisplay = () => {
  const { id } = useParams();
  const currentUser = useContext(UserContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const handleClose2 = (ejercicios, id) => {setOpen(false)
    return (`/home/Mi%20Rutina/${ejercicios[id].id}`)
  };
    const [modal, setModal] = useState({ type: 'success', open: false });
  
    const handleClick = () => {
      
      console.log(
        'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
      );
      setModal({ type: 'success', open: true });
      setOpen(true)
     };
 
  return (
    <>
      <Header title={ejercicios[id - 1].videoTitle} icon={<HomeIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          <Typography variant='h3'>{ejercicios[id - 1].videoTitle}</Typography>
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <ReactPlayer
              size='100%'
              controls
              url={ejercicios[id - 1].videoURL}
              onReady={() => console.log('onReady callback')}
              onStart={() => console.log('onStart callback')}
              onPause={() => console.log('onPause callback')}
              onEnded={() => console.log('onEnded callback')}
              onError={() => console.log('onError callback')}
            />
          </div>
          <Typography variant='body1' marginTop='20px'>
            {ejercicios[id - 1].instructions}
          </Typography>
          {/*
          <Button
            onClick={handleClick}
            fullWidth
            variant="contained"
            size="large"
          >
  */} 
  {currentUser.role == "paciente" ? 
          <Button 
            onClick={
              handleClick}
            fullWidth
            variant='contained'
            size='large'
          >
            Completado
          </Button>: null
}
        </Grid>
      </Grid>
      <NavBar />
      {/* MODAL STARTS */}
{/*
       <ModalAlert
          open={modal.open}
          type={modal.type}
          title="Felicitaciones!"
          subtitle="Has completado el ejercicio"
          primaryBtnText="Continuar"
          primaryBtnPage="/home/Mi%Rutina"
          secondaryBtnText="Volver"
          secondaryBtnPage={ejercicios[id - 1].id === ejercicios.length ? navigate(`/home/${ejercicios[id - 1].id}`): navigate('/home')} 
        />
*/}




      <ModalAlert
          open={open}
          type={modal.type}
          title="Felicitaciones!"
          subtitle="Has completado la RUTINA"
          primaryBtnText="Continuar"
          setNotOpen= {() =>{setOpen(false)
            console.log(modal)}
          }
          secondaryBtnPage="/home/Mi%Rutina"
          secondaryBtnText="Volver"
          primaryBtnPage={ ejercicios[id - 1].id === ejercicios.length ? '/home/Mi%20Rutina' :  `/home/Mi%20Rutina/${ejercicios[id].id}` }
        />
    </>
  );
}

export default VideoDisplay;

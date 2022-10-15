import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Exercise from '../Components/Exercise';



/*ESTE COMPONENTE ESTA DE PRUEBA PARA DESPUES SER REEMPLAZADO POR UNA COPIA DE LA PARTE DEL PACIENTE Y QUE NO TENGA QUE HACERSE 2 PAGINAS PARA UN LISTADO DE LOS EJERCICIOS DEL PACIENTE*/


const PacientRoutineExcercise = () => {
    const currentUser = useContext(UserContext);
    return (
      <>
        <Header title='Pacient' icon={< PersonIcon/>} />
        <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Exercise
            id={1}
            name='Sentadillas'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            imgSrc={
              'https://www.runtastic.com/blog/wp-content/uploads/2018/07/Co%CC%81mo-hacer-sentadillas-1200x800-1024x683.jpg'
            }
          />
        </Grid>
        <NavBar />
      </>
    );
  };
  
  export default PacientRoutineExcercise
  ;
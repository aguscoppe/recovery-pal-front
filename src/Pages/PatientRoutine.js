import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { routines } from '../data';
import Routine from '../Components/Routine';
import { getPatientById } from '../Controllers/PatientEntry.Controller';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Contexts/UserContext';


const PatientRoutine = () => {
  const currentUser = useContext(UserContext);
  const [routines, setRoutines] = useState([])


  useEffect( () =>
  {
    const getPatient = async function () {
      const patient = await getPatientById(currentUser._id);
      console.log("Console log de respuesta de back ", patient)
      if(patient.rdo===1){
        alert("Debes estar logueado para usar esta pagina");
        window.location.href='/';
      }
      else{
        setRoutines(patient.patient.routines)
        console.log(routines)
      }
    }
    getPatient()
    


  }, [currentUser._id])


  return (
    <>
      <Header title='Home' icon={<HomeIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          {routines.map((routine) => (
            <Routine routine={routine} />
          ))}
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default PatientRoutine;

import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import PatientCard from '../Components/PatientCard';
import { useContext, useState, useEffect } from 'react';
import { getDoctorById } from '../Controllers/DoctorEntry.Controller';
import { UserContext } from '../Contexts/UserContext';
import CircularProgress from '@mui/material/CircularProgress';
import SearchPatients from '../Components/SearchPatients';

/* Esta pagina es el home que deberia ver el doctor con la lista de sus pacientes aun no conectada con el back */
const HomeDoctor = () => {
  const currentUser = useContext(UserContext);

  const [doctor, setDoctor] = useState(null);
  const [patients, setPatients] = useState(null);
  const [patientsFiltered, setPatientsFiltered] = useState(null)

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
        setDoctor(respuestaDoctor.doctor);
        console.log(JSON.stringify(respuestaDoctor));
        setPatients(respuestaDoctor.doctor.patients);
        setPatientsFiltered(respuestaDoctor.doctor.patients);
      }
    };
    getDoctor();
  }, [currentUser._id]);
  return (
    <>
      <Header title='Pacientes' icon={<HomeIcon />} />
      <Grid
        container
        direction='column'
        justifyContent='center'
        sx={{ paddingTop: '10vh' }}
      >
        <Grid
          item
          xs={12}
          md={12}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
                  <SearchPatients setPatientsFiltered= {setPatientsFiltered} patients={patients}/>
                  </Grid>
        <Grid
          item
          xs={11}
          md={6}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          {patientsFiltered === null ? (
            <CircularProgress />
          ) : (
            patientsFiltered.map((e) => <PatientCard patient={e} />)
          )}
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default HomeDoctor;

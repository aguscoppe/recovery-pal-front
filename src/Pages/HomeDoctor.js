import { Grid, Fab, Modal } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import PatientCard from '../Components/PatientCard';
import AddIcon from '@mui/icons-material/Add';
import { useContext, useState, useEffect } from 'react';
import { getDoctorById } from '../Controllers/DoctorEntry.Controller';
import { UserContext } from '../Contexts/UserContext';
import CircularProgress from '@mui/material/CircularProgress';
import SearchPatients from '../Components/SearchPatients';
import * as React from 'react';
import ModalPatient from '../Components/ModalPatient';
import ModalAlert from '../Components/ModalAlert';

/* Esta pagina es el home que deberia ver el doctor con la lista de sus pacientes aun no conectada con el back */
const HomeDoctor = () => {
  const currentUser = useContext(UserContext);
  const [doctor, setDoctor] = useState(null);
  const [patients, setPatients] = useState(null);
  const [patientsFiltered, setPatientsFiltered] = useState(null);
  const [showModalPatient, setShowModalPatient] = useState(false);
  const [modalAlert, setModalAlert] = useState({
    open: false,
    type: '',
    title: '',
    subtitle: '',
    primaryBtnText: '',
    primaryBtnPage: '',
    setNotOpen: () => {},
  });
  const handleAddPatient = () => {
    setShowModalPatient(true);
  };
  const handleCloseModal = (v) => {
    setShowModalPatient(false);
    if (v === 0) {
      setModalAlert({
        open: true,
        type: 'success',
        title: 'Bien hecho',
        subtitle: 'Se ha agregado el paciente correctamente a tu lista.',
        primaryBtnText: 'Continuar',
        setNotOpen: () => {
          setModalAlert((prev) => ({ ...prev, open: false }));
        },
      });
    }
  };
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
      {modalAlert.open && (
        <ModalAlert
          open={modalAlert.open}
          type={modalAlert.type}
          title={modalAlert.title}
          subtitle={modalAlert.subtitle}
          primaryBtnText={modalAlert.primaryBtnText}
          primaryBtnPage={modalAlert.primaryBtnPage}
          setNotOpen={modalAlert.setNotOpen}
        />
      )}
      {showModalPatient && (
        <ModalPatient open={showModalPatient} handleClose={handleCloseModal} />
      )}
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
          <SearchPatients
            setPatientsFiltered={setPatientsFiltered}
            patients={patients}
          />
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
            patientsFiltered.map((e, index) => (
              <PatientCard patient={e} key={index} />
            ))
          )}
        </Grid>
      </Grid>
      <Fab
        color='primary'
        aria-label='add'
        sx={{
          position: 'fixed',
          bottom: 80,
          right: 25,
        }}
        onClick={handleAddPatient}
      >
        <AddIcon />
      </Fab>
      <NavBar />
    </>
  );
};
export default HomeDoctor;

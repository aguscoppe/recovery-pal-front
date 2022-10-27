import Header from '../Components/Header';
import Navbar from '../Components/NavBar';
import { useState, useContext } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ModalAlert from '../Components/ModalAlert';
import ModalExercise from '../Components/ModalExercise';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Contexts/UserContext';
import { createRoutine } from '../Controllers/RoutineEntry.Controller';
import RoutineForm from '../Components/RoutineForm';
import ExerciseForm from '../Components/ExerciseForm';

/*
const routine = {
  name: '',
  days: [1, 3],
  weeks: 4,
  patient: idPatient,
  feedbacksDone: 0,
  exercises: [
    { set: 4, weight: '4KG', exercise: '634b10569aa4b12bc8e55dd7' },
    { set: 4, weight: '4KG', exercise: '634b10719aa4b12bc8e55dd8' },
  ],
  doctor: currentUser._id,
}
*/

const CreateRoutine = (pacinetId) => {
  const currentUser = useContext(UserContext);
  const { idPatient } = useParams();
  const [currentForm, setCurrentForm] = useState(0);
  const [rutineData, setRutineData] = useState({
    name: '',
    frecuency: '',
    duration: '',
    days: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    },
    weeks: '',
    patient: idPatient,
    feedbacksDone: 0,
    exercises: [],
    doctor: currentUser._id,
  });
  const [modalAlert, setModalAlert] = useState({
    open: false,
    type: '',
    title: '',
    subtitle: '',
    primaryBtnText: '',
    primaryBtnPage: '',
  });
  const [modalExercise, setModalExercise] = useState({
    open: false,
    handleClose: () => {},
  });
  //recuperacion de los ejercicios de la base

  const [modalAlertExercise, setModalAlertExercise] = useState({
    type: 'success',
    open: false,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRutineData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setRutineData((prev) => ({
      ...prev,
      days: { ...prev.days, [value]: checked },
    }));
  };

  const handleSelect = (e, v) => {
    const newExercise = {
      exercise: v.at(-1),
      set: '',
      weight: '',
      repeat: '',
    };
    setRutineData((prev) => ({
      ...prev,
      exercises: [...prev.exercises, newExercise],
    }));
  };

  const handleExerciseChange = (e, index) => {
    const { value, name } = e.target;
    setRutineData((prev) => {
      const newExercises = prev.exercises.map((el, i) => {
        if (index === i) {
          return { ...el, [name]: value };
        } else {
          return el;
        }
      });
      return { ...prev, exercises: [...newExercises] };
    });
  };

  const openExerciseModal = () => {
    setModalExercise((prev) => ({ ...prev, open: true }));
  };

  const closeExerciseModal = () => {
    setModalExercise((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
    // meter data de rutineData de acuerdo a lo que necesita el back en newRoutine
    const newRoutine = {};
    // createRoutine(newRoutine);
    setModalAlert({
      type: 'success',
      open: true,
      title: '¡Bien hecho!',
      subtitle: 'La rutina ha sido creada con exito',
      primaryBtnText: 'Continuar',
      primaryBtnPage: '/home',
    });
  };

  return (
    <>
      <Header title='Crear Rutina' icon={<AddCircleOutlineRoundedIcon />} />
      {/* 
            <ModalAlert
        open={modalAlertExercise.open}
        type={modalAlertExercise.type}
        setNotOpen={() =>
          setModalAlertExercise({ ...modalAlertExercise, open: false })
        }
        title='Bien hecho!'
        subtitle='El ejercicio ha sido creado con exito'
        primaryBtnText='Continuar'
        primaryBtnPage='/createRoutine'
      />
      */}
      {modalAlert.open && (
        <ModalAlert
          open={modalAlert.open}
          type={modalAlert.type}
          title={modalAlert.title}
          subtitle={modalAlert.subtitle}
          primaryBtnText={modalAlert.primaryBtnText}
          primaryBtnPage={modalAlert.primaryBtnPage}
        />
      )}
      {modalExercise.open && (
        <ModalExercise
          open={modalExercise.open}
          handleClose={closeExerciseModal}
        />
      )}
      {currentForm === 0 && (
        <RoutineForm
          rutineData={rutineData}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
          handleSelect={handleSelect}
          openExerciseModal={openExerciseModal}
          setCurrentForm={setCurrentForm}
        />
      )}
      {currentForm === 1 && (
        <ExerciseForm
          rutineData={rutineData}
          setCurrentForm={setCurrentForm}
          handleExerciseChange={handleExerciseChange}
          handleSubmit={handleSubmit}
        />
      )}
      <Navbar />
    </>
  );
};

export default CreateRoutine;

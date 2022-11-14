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

const CreateRoutine = () => {
  const currentUser = useContext(UserContext);
  const { idPatient } = useParams();
  const [currentForm, setCurrentForm] = useState(0);
  const [rutineData, setRutineData] = useState({
    name: '',
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
    autocompleteData: [],
  });
  const [modalAlert, setModalAlert] = useState({
    open: false,
    type: '',
    title: '',
    subtitle: '',
    primaryBtnText: '',
    primaryBtnPage: '',
    setNotOpen: () => {},
  });
  const [modalExercise, setModalExercise] = useState({
    open: false,
    handleClose: () => {},
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

  const handleSelect = (event, value, reason, detail) => {
    if (reason === 'clear') {
      return setRutineData((prev) => ({
        ...prev,
        exercises: [],
      }));
    }
    if (reason === 'removeOption') {
      const selectedValue = detail.option;
      return setRutineData((prev) => ({
        ...prev,
        exercises: prev.exercises.filter(
          (ex) => ex.exercise._id !== selectedValue.exercise._id
        ),
      }));
    }
    if (reason === 'selectOption') {
 
      const newExercise = {
        exercise: value.at(-1),
        set: '',
        weight: '',
        repetitions: '',
      };
      return setRutineData((prev) => ({
        ...prev,
        exercises: [...prev.exercises, value.at(-1)],
      }));
    }
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

  const closeExerciseModal = (e) => {
    setModalExercise((prev) => ({ ...prev, open: false }));
    if (e.target.innerText !== 'CANCELAR') {
      setModalAlert({
        type: 'success',
        open: true,
        title: '¡Bien hecho!',
        subtitle: 'Ejercicio creado correctamente',
        primaryBtnText: 'Continuar',
        setNotOpen: () => {
          setModalAlert((prev) => ({ ...prev, open: false }));
        },
      });
    }
  };

  const handleSubmit = async () => {
    const { name, weeks, days, description, patient, doctor, exercises } = rutineData;
    const daysArr = [];
    for (const [key, value] of Object.entries(days)) {
      if (value) {
        daysArr.push(parseInt(key));
      }
    }
    const newExercises = exercises.map((ex) => ({
      exercise: ex.exercise._id,
      weight: `${ex.weight} Kilos`,
      sets: parseInt(ex.sets),
      repetitions: parseInt(ex.repetitions),
    }));
    const newRoutine = {
      name: name,
      days: daysArr,
      weeks: parseInt(weeks),
      description: description,
      patient: patient,
      doctor: doctor,
      exercises: newExercises,
    };
    console.log('newRoutine: ', newRoutine);

    let info = await createRoutine(newRoutine);
    console.log('info: ', info);
    if (info.rdo === 0) {
      setModalAlert({
        type: 'success',
        open: true,
        title: '¡Bien hecho!',
        subtitle: 'Rutina creada correctamente',
        primaryBtnText: 'Continuar',
        primaryBtnPage: '/home',
      });
    } else {
      setModalAlert({
        type: 'error',
        open: true,
        title: 'Error',
        subtitle: info.mensaje,
        primaryBtnText: 'Continuar',
        setNotOpen: () => {
          setModalAlert((prev) => ({ ...prev, open: false }));
        },
      });
    }

  };

  return (
    <>
      <Header title='Crear Rutina' icon={<AddCircleOutlineRoundedIcon />} />
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

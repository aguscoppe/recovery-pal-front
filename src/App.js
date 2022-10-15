import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './Contexts/UserContext';
import { theme } from './theme';
import './App.css';
import HomePaciente from './Pages/HomePaciente';
import HomeDoctor from './Pages/HomeDoctor';
import Profile from './Pages/Profile';
import Chat from './Pages/Chat';
import Videos from './Pages/Videos';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CreateExercise from './Pages/CreateExercise';
import PatientProfile from './Pages/PatientProfile';
import ExerciseList from './Pages/ExerciseList';
import CreateRoutine from './Pages/CreateRoutine';
import VideoDisplay from './Pages/VideoDisplay';

function App() {
  const [currentUser, setCurrentUser] = useState({ name: '', password: '' });

  console.log(currentUser);

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} />
          <Route
            path='/home'
            element={
              currentUser.role === 'doctor' ? <HomeDoctor /> : <HomePaciente />
            }
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/patient/:idPatient' element={<PatientProfile />} />
          <Route path='/routine/:idRoutine' element={<ExerciseList />} />
          <Route path='/exercise/:idExercise' element={<VideoDisplay />} />
          <Route path='/createRoutine' element={<CreateRoutine />} />
          <Route path='/createExercise' element={<CreateExercise />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;

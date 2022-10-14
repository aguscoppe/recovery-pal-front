import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './Contexts/UserContext';
import { theme } from './theme';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Chat from './Pages/Chat';
import Videos from './Pages/Videos';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CreateExercise from './Pages/CreateExercise';
import HomeDoctor from './Pages/HomeDoctor';
import HomePaciente from './Pages/HomePaciente';
import VideoDisplay from './Pages/VideoDisplay';

function App() {
  const [currentUser, setCurrentUser] = useState({ name: '', password: '' });
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path='/home' element={currentUser.role === "doctor" ?<HomeDoctor />:<HomePaciente />} />
          <Route path='home/:id' element={<VideoDisplay />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/register' element={<Register />} />
          <Route path='/createExercise' element={<CreateExercise />} />
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;

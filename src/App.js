import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Chat from './Pages/Chat';
import Videos from './Pages/Videos';
import Register from './Pages/Register';
import Login from './Pages/Login';
import HomeDoctor from './Pages/HomeDoctor';
import HomePaciente from './Pages/HomePaciente';
import { UserContext } from './Contexts/UserContext';
import userEvent from '@testing-library/user-event';
import PlayVideo from './Pages/PlayVideo';
import VideoDisplay from './Pages/VideoDisplay';

//Cosas a borrar, el routes de playvideo, acordarse de cerrar con la /  el de arriba

function App() {
  const [currentUser, setCurrentUser] = useState({ name: '', password: '' });
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} />
          <Route path='/home' element={currentUser.role === "doctor" ?<HomeDoctor />:<HomePaciente />} >
            <Route path=':videoTitle' element={<VideoDisplay />} />
          </Route>
          <Route path='/profile' element={<Profile />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  );
}


export default App;

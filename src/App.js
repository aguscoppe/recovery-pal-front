import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import { theme } from "./theme";
import "./App.css";
import HomeDoctor from "./Pages/HomeDoctor";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";
import Videos from "./Pages/Videos";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CreateExercise from "./Pages/CreateExercise";
import PatientProfile from "./Pages/PatientProfile";
import ExerciseList from "./Pages/ExerciseList";
import CreateRoutine from "./Pages/CreateRoutine";
import VideoDisplay from "./Pages/VideoDisplay";
import PatientRoutine from "./Pages/PatientRoutine";
import VideoDisplayDoctor from "./Pages/VideoDisplayDoctor";
import InicioDoctor from "./Pages/InicioDoctor";
import InicioPaciente from "./Pages/InicioPaciente";
import AddPatient from "./Pages/AddPatient";
import MyDoctors from "./Pages/MyDoctors";
import { exercises } from "./data";
import { Navigate } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "", password: "" });
  const [exerciseList, setExerciseList] = useState(exercises);

  const handleCompleteExercise = (_id) => {
    setExerciseList((prev) =>
      prev.map((el) => (el._id === _id ? { ...el, isComplete: true } : el))
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Login setCurrentUser={setCurrentUser} />} />
          {!currentUser._id ? (
            <Route path="/*" element={<Navigate to="/" />} />
          ) : (
            <>
                      <Route path="/home" element={
                  currentUser.role === "doctor" ? (
                    <InicioDoctor />
                  ) : (
                    <InicioPaciente />
                  )} />
              <Route
                path="/inicio"
                element={
                  currentUser.role === "doctor" ? (
                    <HomeDoctor />
                  ) : (
                    <PatientRoutine />
                  )
                }
              />
              <Route path="/profile" element={
                currentUser.role === "doctor" ? (
                    <Profile />
                  ) : (
                    <PatientProfile />
                  )} />
              <Route path="/patient" element={<HomeDoctor />} />    
              <Route path="/addpatient" element={<AddPatient />} />
              <Route path="/doctor" element={<MyDoctors />} />
              <Route path="/patient/:idPatient" element={<PatientProfile />} />
              <Route path="/routine" element={<PatientRoutine />} />
              <Route
                path="/routine/:idRoutine"
                element={<ExerciseList exerciseList={exerciseList} />}
              ></Route>
              <Route
                path="/routine/:idRoutine/exercise/:idExercise"
                element={
                  <VideoDisplay
                    exerciseList={exerciseList}
                    handleCompleteExercise={handleCompleteExercise}
                  />
                }
              />

              <Route
                path="/patient/:idPatient/createRoutine"
                element={<CreateRoutine />}
              />
              <Route path="/createExercise" element={<CreateExercise />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/videos" element={<Videos />} />
              <Route
                path="/videos/:idExercise"
                element={<VideoDisplayDoctor exerciseList={exerciseList} />}
              />
            </>
          )}
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;

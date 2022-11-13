import { Box, Grid, Typography, Avatar, Button, Tab, Zoom } from "@mui/material";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import { useParams } from "react-router-dom";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Routine from "../Components/Routine";
import NavBar from "../Components/NavBar";
import SmsIcon from "@mui/icons-material/Sms";
import { useContext, useState, useEffect } from "react";
import { getDoctorById } from "../Controllers/DoctorEntry.Controller";
import { UserContext } from "../Contexts/UserContext";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Progress from "./../Components/Progress";
import { getPatientById } from "../Controllers/PatientEntry.Controller";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

/** Esta Pagina es el perfil del paciente que el doctor puede ver, aca puede administrar las rutinas del paciente y crear nuevas  */
const PatientProfile = () => {
  const currentUser = useContext(UserContext);
  const theme = useTheme();
  const { idPatient } = useParams();
  const [routines, setRoutines] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [patient, setPatient] = useState(null);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getUser = async function () {
      if (currentUser.role === "doctor") {
        const respuestaDoctor = await getDoctorById(currentUser._id);
        console.log(
          "Console log de respuesta de back ",
          JSON.stringify(respuestaDoctor)
        );
        if (respuestaDoctor.rdo === 1) {
          alert("No existe el doctor");
          window.location.href = "/";
        } else {
          setRoutines(
            respuestaDoctor.doctor.routines.filter(
              (e) => e.patient === idPatient
            )
          );
          setDoctor(respuestaDoctor.doctor);
          setPatient(
            respuestaDoctor.doctor.patients.filter(
              (e) => e._id === idPatient
            )[0]
          );
          console.log(JSON.stringify(respuestaDoctor));
          console.log(
            "Es la paciente: ",
            respuestaDoctor.doctor.patients.filter((e) => e._id === idPatient)
          );
        }
      } else {
        const resPaciente = await getPatientById(currentUser._id);
        console.log(
          "Console log de respuesta de back ",
          JSON.stringify(resPaciente)
        );

        const { patient } = resPaciente;

        if (resPaciente.rdo === 1) {
          console.log("Error. No se pudo encontrar el paciente");
        } else {
          setDoctor(patient.doctor);
          setPatient(patient);
          setRoutines(patient.routines);
        }
      }
    };
    getUser();
  }, [currentUser._id, idPatient]);

  //states usados para la animacion

  const [checked, setChecked] = useState(false);

  const handleAnimation = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {patient === null ? (
        <CircularProgress />
      ) : (
        <Box
          bgcolor={theme.palette.primary.main}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          sx={{ width: "100%", height: "25vh" }}
        >
          <Avatar
            alt="FotoPerfilPaciente"
            src="https://mui.com/static/images/avatar/3.jpg"
            sx={{ width: 90, height: 90 }}
          ></Avatar>
          <Typography
            variant="h4"
            color={theme.palette.textPrimary.main}
            fontWeight="900"
          >
            {patient.name} {patient.lastName}
          </Typography>
          <Typography variant="body1" color={theme.palette.textSecondary.main}>
            {patient.suffering}
          </Typography>
        </Box>
      )}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="Rutina" value="1" />
            <Tab label="Videos" value="2" />
            <Tab label="Progreso" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid sx={{ textAlign: "center", width: "100%" }}>
              {currentUser.role === "doctor" && (
                <>
                  <Fab
                    color="primary"
                    aria-label="add"
                    sx={{
                      position: "fixed",
                      bottom: 70,
                      right: 25,
                      height: 70,
                      width: 70
                    }}
                    onClick={handleAnimation}
                  >
                    {checked ? (
                    <ArrowBackIosNewIcon />):(
                      <MoreVertIcon/>
                    )}
                  </Fab>
                  <Link
                  to={`/patient/${idPatient}/createRoutine`}
                  style={{ textDecoration: "none" }}
                >
                <Zoom in={checked}>
                <Fab
                      color="secondary"
                      aria-label="add"
                      sx={{
                        position: "fixed",
                        bottom: 150,
                        right: 32,
                        height: 56,
                        width: 56
                      }}
                    >
                      <AddIcon />
                    </Fab>
                </Zoom>
                  </Link>
                  <Link
                   to={`/chat`}
                  style={{ textDecoration: "none" }}
                >
                <Zoom in={checked}>
                <Fab
                      color="secondary"
                      aria-label="add"
                      sx={{
                        position: "fixed",
                        bottom: 220,
                        right: 32,
                        height: 56,
                        width: 56
                      }}
                    >
                      <SmsIcon />
                    </Fab>
                </Zoom>
                  </Link>
                  </>
              )}
              <Grid container justifyContent="center" marginBottom={10} sx={{ padding: "3vh 0" }}>
                {routines === null ? (
                  <Grid item xs={12} md={6}>
                    <CircularProgress />
                  </Grid>
                ) : (
                  routines.map((routine) => {
                    return (
                      <Grid item xs={12} md={6} marginBottom>
                        <Routine routine={routine} />
                      </Grid>
                    );
                  })
                )}
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Typography>Coming Soon</Typography>
        </TabPanel>
        <TabPanel value="3">
          <Typography>
            <Progress
              patient={patient}
              routineId={"636195d0892e6224d4585318"} //por que se le pasaria el id de una rutina??
            />
          </Typography>
        </TabPanel>
      </TabContext>
      <NavBar/>
    </>
  );
};

export default PatientProfile;

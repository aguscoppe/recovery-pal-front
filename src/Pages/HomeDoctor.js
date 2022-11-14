import { Grid, Fab, TextField, Typography, Modal, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import PatientCard from "../Components/PatientCard";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState, useEffect } from "react";
import { getDoctorById } from "../Controllers/DoctorEntry.Controller";
import { UserContext } from "../Contexts/UserContext";
import CircularProgress from "@mui/material/CircularProgress";
import SearchPatients from "../Components/SearchPatients";
import * as React from "react";
import Button from "@mui/material/Button";
import { theme } from "../theme";
import ModalPatient from "../Components/ModalPatient";
import ModalAlert from "../Components/ModalAlert";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const modalContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "auto",
  width: "80%",
  backgroundColor: "#FFF",
  borderRadius: "20px",
};
const textFieldSpacing = {
  marginBottom: "20px",
};
const title = {
  textAlign: "center",
  fontWeight: "bold",
  color: theme.palette.primary.main,
  marginBottom: "50px",
};
/* Esta pagina es el home que deberia ver el doctor con la lista de sus pacientes aun no conectada con el back */
const HomeDoctor = () => {
  const currentUser = useContext(UserContext);
  const [doctor, setDoctor] = useState(null);
  const [patients, setPatients] = useState(null);
  const [patientsFiltered, setPatientsFiltered] = useState(null);
  const [showModalPatient, setShowModalPatient] = useState(false);
  const [modalAlert, setModalAlert] = useState({
    open: false,
    type: "",
    title: "",
    subtitle: "",
    primaryBtnText: "",
    primaryBtnPage: "",
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
        type: "success",
        title: "Bien hecho",
        subtitle: "Se ha agregado el paciente correctamente a tu lista.",
        primaryBtnText: "Continuar",
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
        "Console log de respuesta de back ",
        JSON.stringify(respuestaDoctor)
      );
      if (respuestaDoctor.rdo === 1) {
        alert("No existe el doctor");
        window.location.href = "/";
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
      <Header title="Pacientes" icon={<HomeIcon />} />
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
        direction="column"
        justifyContent="center"
        sx={{ paddingTop: "10vh" }}
      >
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <SearchPatients
            setPatientsFiltered={setPatientsFiltered}
            patients={patients}
          />
        </Grid>
        <Grid
          item
          container
          xs={11}
          md={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          spacing = {2}
          sx= {{mt: 2}}


        >
          {patientsFiltered === null ? (
            <CircularProgress />
          ) : (
            patientsFiltered.map((e) => <PatientCard patient={e} />)
          )}
        </Grid>
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
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
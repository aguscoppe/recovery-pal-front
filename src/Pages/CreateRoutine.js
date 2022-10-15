import Header from "../Components/Header";
import Navbar from "../Components/NavBar";
import ModalAlert from "../Components/ModalAlert";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import MultipleSelectChip from "../Components/MultipleSelectChip";
import { Link } from "react-router-dom";

const flexCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2vh",
};

const textFieldSpacing = {
  marginBottom: "20px",
};

const CreateRoutine = (pacinetId) => {
  const [rutineData, setRutineData] = useState({
    name: "",
    frecuency: "",
    duration: "",
    exercises: [],
    imageUrl: "",
  });
//recuperacion de los ejercicios de la base
  let listEjercicios = ['Sentadillas1','Estocadas1','Sentadillas2','Estocadas2','Sentadillas3','Estocadas3','Sentadillas4','Estocadas4','Sentadillas5','Estocadas5']

  const [modal, setModal] = useState({ type: "success", open: false });

  const handleClick = () => {
    console.log(
      "Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro."
    );
    setModal({ type: "success", open: true });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setRutineData({ ...rutineData, [name]: value });
  };

  return (
    <>
      <Header title="Crear Rutina" icon={<AddCircleOutlineRoundedIcon />} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ paddingTop: "10vh" }}
      >
        <ModalAlert
          open={modal.open}
          type={modal.type}
          title="Bien hecho!"
          subtitle="El ejercicio ha sido creado con exito"
          primaryBtnText="Continuar"
          primaryBtnPage="/home"
        />
        <Grid item xs={10} sm={6} md={4}>
          <TextField
            name="name"
            value={rutineData.name}
            fullWidth
            label="Nombre"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="frecuency"
            value={rutineData.frecuency}
            fullWidth
            label="Frecuencia"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <TextField
            name="duration"
            value={rutineData.duration}
            fullWidth
            label="Duracion"
            variant="outlined"
            onChange={handleChange}
            sx={textFieldSpacing}
          />
          <MultipleSelectChip
            label="Buscar ejercicio"
            list= {listEjercicios}
          />

          <Grid item container alignItems="center" direction="column" >
            <Grid item paddingTop={3}>
              <Button
                disabled={
                  rutineData.name === "" ||
                  rutineData.frecuency === "" ||
                  rutineData.duration === ""
                }
                variant="contained"
                onClick={handleClick}
                size='large'
              >
                FINALIZAR
              </Button>
            </Grid>
            <Grid item paddingTop={3}>
              <Link to={`/createExercise`} style={{textDecoration: "none"}}>
                <Button size='large' variant="contained">CREAR EJERCICIO</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
};

export default CreateRoutine;

import Header from "../Components/Header";
import Navbar from "../Components/NavBar";
import ModalAlert from "../Components/ModalAlert";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

const flexCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

const textFieldSpacing = {
    marginBottom: '20px',
  };

const CreateRoutine = (pacinetId) => {

    const [rutineData, setRutineData] = useState({
        name: '',
        frecuency: '',
        duration: '',
        exercises: [],
        imageUrl: '',
      });

    const [modal, setModal] = useState({ type: 'success', open: false });

    const handleClick = () => {
        console.log(
          'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
        );
        setModal({ type: 'success', open: true });
    }

    const handleChange = (e) => {
        const { value } = e.target;
        const { name } = e.target;
        setRutineData({ ...rutineData, [name]: value });
      };
    
  return (
    <>
      <Header title="Crear Ejercicio" icon={<AddCircleOutlineRoundedIcon />} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh", width: "100%" }}
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
          
          <Box sx={flexCenter}>
            <Button
              disabled={
                rutineData.name === "" ||
                rutineData.frecuency === "" ||
                rutineData.duration === ""
              }
              variant="contained"
              onClick={handleClick}
            >
              Finalizar
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Navbar />
    </>
  );
};

export default CreateRoutine;

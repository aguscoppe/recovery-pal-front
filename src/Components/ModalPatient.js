import {
    Modal,
    Grid,
    TextField,
    Button,
    Input,
    Box,
    Typography,
  } from "@mui/material";
  import { useState, useContext } from "react";
  import { UserContext } from "../Contexts/UserContext";
  import { theme } from "../theme";
  import { addPatientToDoctor } from "../Controllers/DoctorEntry.Controller";

const textFieldSpacing = { 
    marginBottom: "20px",
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

const title = {
    textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    marginBottom: "50px",
};

const ModalPatient = ({ open, handleClose }) => {
    const currentUser = useContext(UserContext);
    const [patientData, setPatientData] = useState({
        email: "",
    });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };
    const handleClick = async () => { setDisableButton(true);};
    const [disableButton, setDisableButton] = useState(false);
        
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({ ...patientData, [name]: value });
    };
    

    const handleModalClosing = () => {
        setPatientData({
            email: "", });
        handleClose();
    };

    const addPatient = async (value) => {
        console.log("value", value);
        try{
            const response = await addPatientToDoctor ({
                doctorId: currentUser.id,
                email: patientData.email,
        });

        if (res.rdo === 0) {
            console.log("Se agrego el paciente");
          } else {
            console.log("Fallo algo");
          }
          handleClose(res.rdo);
        } catch (e) {
          console.log(e);
          handleClose(1);
        }
    };

return (
    <Modal open={open} onClose={handleClose}>
        <Box sx={modalContainer}>
            <Grid  item xs={12} sm={6} m={4}>
                <Typography variant="h5" sx={title}>
                Añadir paciente
                </Typography>
                 <TextField
                    name="email"
                    value={patientData.email}
                    fullWidth
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                    sx={textFieldSpacing}
                />
                <Grid item container justifyContent="center">
                    <Button
                        size="large"
                        variant="outlined"
                        onClick={handleClose}
                        disabled={disableButton}>
                        Cancelar
                    </Button>
                </Grid>
                <Grid item container justifyContent="center">
                    <Button
                        disabled={
                            patientData.email === "" 
                        }
                        size="large"
                        variant="contained"
                        onClick={handleClick}
                        sx={{ mt: 3 }} >
                         Añadir
                    </Button>
                 </Grid>
            </Grid>
        </Box>
    </Modal>
);};

export default ModalPatient;
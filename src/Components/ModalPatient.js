import {
  Modal,
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { theme } from "../theme";
import { addPatient } from "../Controllers/DoctorEntry.Controller";
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
  const [patientEmail, setPatientEmail] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [showCircularProgress, setShowCircularProgress] = useState(false);
  const [error, setError] = useState({ state: false, message: "" });
  const handleClick = () => {
    setDisableButton(true);
    setShowCircularProgress(true);
    addPatientToDoctor();
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setPatientEmail(value);
  };
  const handleModalClosing = () => {
    setPatientEmail("");
    handleClose();
  };
  const addPatientToDoctor = async () => {
    try {
      const res = await addPatient({
        doctorId: currentUser.id,
        email: patientEmail,
      });
      if (res.rdo === 0) {
        console.log("Se agrego el paciente");
        handleClose(res.rdo);
      } else {
        setError({ state: true, message: res.mensaje });
        setShowCircularProgress(false);
        setDisableButton(false);
        console.log("Fallo algo");
      }
    } catch (e) {
      console.log(e);
      handleClose(1);
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalContainer}>
        <Grid item xs={12} sm={6} m={4}>
          <Typography variant="h5" sx={title}>
            Añadir paciente
          </Typography>
          <TextField
            error={error.state}
            helperText={error.state ? error.message : ""}
            name="email"
            value={patientEmail}
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
              onClick={handleModalClosing}
              disabled={disableButton}
            >
              Cancelar
            </Button>
          </Grid>
          <Grid item container justifyContent="center">
            {showCircularProgress ? (
              <CircularProgress sx={{ marginTop: "10px" }} />
            ) : (
              <Button
                disabled={patientEmail === ""}
                size="large"
                variant="contained"
                onClick={handleClick}
                sx={{ mt: 3 }}
              >
                Añadir
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};
export default ModalPatient;
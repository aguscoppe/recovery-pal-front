import {
  Modal,
  Grid,
  TextField,
  Button,
  Input,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { theme } from "../theme";
import CreateExercise from "../Pages/CreateExercise";
import { exerciseCreation } from "../Controllers/ExerciseEntry.Controller";
import { uploadVideo } from "../Controllers/VideoEntry.Controller";
import { upload } from "@testing-library/user-event/dist/upload";

const ModalExercise = ({ open, handleClose }) => {
  const { currentUser } = useContext(UserContext);

  const [exerciseData, setExerciseData] = useState({
    name: "",
    description: "",
    videoURL: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  const [encodedFile, setEncodedFile] = useState("");

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

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleModalClosing = () => {
    setExerciseData({
      name: "",
      description: "",
      videoURL: "",
    });
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    encodeFile(file);
  };

  const encodeFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEncodedFile(reader.result);
    };
  };

  const handleClick = async () => {
    uploadVideoCloudinary();
    createExercise();
    handleClose(e);
  };

  const uploadVideoCloudinary = async () => {
    try {
      const res = await uploadVideo(
        encodedFile,
        exerciseData.name,
        exerciseData.description
      );

      if (res.rdo === 0) {
        setExerciseData({ ...exerciseData, videoURL: res.videoData.url });
        console.log(res.message);
      } else {
        console.log(res.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const createExercise = async () => {
    try {
      const res = await exerciseCreation({
        doctor: currentUser._id,
        instructions: exerciseData.description,
        videoTitle: exerciseData.name,
        videoURL: exerciseData.videoURL,
      });

      if (res.rdo === 0) {
        console.log("Se creo el ejercicio");
      } else {
        console.log("Fallo algo");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal open={open} onClose={handleModalClosing}>
      <Box sx={modalContainer}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} m={4}>
            <Typography variant="h3" sx={title}>
              Crear Ejercicio
            </Typography>
            <TextField
              name="name"
              value={exerciseData.name}
              fullWidth
              label="Nombre"
              variant="outlined"
              onChange={handleChange}
              sx={textFieldSpacing}
            />
            <TextField
              name="description"
              value={exerciseData.description}
              fullWidth
              label="Descripción"
              variant="outlined"
              onChange={handleChange}
              sx={textFieldSpacing}
            />
            <Input
              type="file"
              label="Video"
              sx={textFieldSpacing}
              disableUnderline
              onChange={handleChangeFile}
            />
            <Grid item container justifyContent="center">
              <Button
                size="large"
                variant="outlined"
                onClick={handleClose}
                sx={{ marginRight: "20px" }}
              >
                Cancelar
              </Button>
              <Button
                disabled={
                  exerciseData.name === "" || exerciseData.description === ""
                }
                size="large"
                variant="contained"
                onClick={handleClick}
              >
                Finalizar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalExercise;

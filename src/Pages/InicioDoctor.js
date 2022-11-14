import { Grid, Typography, Fab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import { Bookmark } from "@mui/icons-material";

/* Esta pagina es el home que deberia ver el doctor con los botones rapidos de acceso */
const InicioDoctor = () => {
  const currentUser = useContext(UserContext);

  return (
    <>
      <Header title="Home" icon={<HomeIcon />} />
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
          <Typography
            fontWeight="7000"
            marginBottom="5px"
            sx={{ color: "#0B3D60", fontSize: "4rem" }}
          >
            Bienvenido,
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            fontWeight="7000"
            marginBottom="5px"
            sx={{ color: "#0B3D60", fontSize: "4rem" }}
          >
            {currentUser.name}
          </Typography>

          <Typography
            fontWeight="7000"
            marginBottom="35px"
            sx={{ fontSize: "2rem" }}
          >
            ¿Qué deseas hacer?
          </Typography>

          <Link to={`/patient`} style={{ textDecoration: "none" }}>
            <Fab
              color="info"
              aria-label="Mis Pacientes"
              sx={{ transform: "scale(2)" }}
            >
              <PersonIcon />
            </Fab>
          </Link>

          <Typography
            fontWeight="700"
            marginTop="30px"
            marginBottom="35px"
            sx={{ color: "#0B3D60" }}
          >
            Mis Pacientes
          </Typography>
          <Link to={`/addpatient`} style={{ textDecoration: "none" }}>
            <Fab
              color="info"
              aria-label="Agregar Paciente"
              sx={{ transform: "scale(2)" }}
            >
              <AddIcon />
            </Fab>
          </Link>
          <Typography
            fontWeight="700"
            marginTop="30px"
            marginBottom="35px"
            sx={{ color: "#0B3D60" }}
          >
            Agregar Paciente
          </Typography>
          <Link to={`/videos`} style={{ textDecoration: "none" }}>
            <Fab
              color="info"
              aria-label="Ejercicios"
              sx={{ transform: "scale(2)" }}
            >
              <Bookmark />
            </Fab>
          </Link>
          <Typography
            fontWeight="700"
            marginTop="30px"
            marginBottom="100px"
            sx={{ color: "#0B3D60" }}
          >
            Ejercicios
          </Typography>
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default InicioDoctor;

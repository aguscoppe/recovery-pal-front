import { Grid, Typography, Fab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { useContext} from "react";
import { UserContext } from "../Contexts/UserContext";
import { Link } from "react-router-dom";
import {
  SportsGymnasticsRounded,
  EmojiEventsRounded,
  MedicalServices,
} from "@mui/icons-material";

/* Esta pagina es el home que deberia ver el paciente con los botones rapidos de interaccion */
const InicioPaciente = () => {
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
            Bienvenida,
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

          <Link to={`/routine`} style={{ textDecoration: "none" }}>
            <Fab
              color="info"
              aria-label="Mis Rutinas"
              sx={{ transform: "scale(2)" }}
            >
              <SportsGymnasticsRounded />
            </Fab>
          </Link>

          <Typography
            fontWeight="700"
            marginTop="30px"
            marginBottom="35px"
            sx={{ color: "#0B3D60" }}
          >
            Mis Rutinas
          </Typography>
          <Link to={`/profile`} style={{ textDecoration: "none" }}>
            <Fab
              color="info"
              aria-label="Mi Progreso"
              sx={{ transform: "scale(2)" }}
            >
              <EmojiEventsRounded />
            </Fab>
          </Link>
          <Typography
            fontWeight="700"
            marginTop="30px"
            marginBottom="35px"
            sx={{ color: "#0B3D60" }}
          >
            Mi Progreso
          </Typography>
          <Link to={`/doctor`} style={{ textDecoration: "none" }}>
            <Fab
              color="info"
              aria-label="Mis Fisioterapeutas"
              sx={{ transform: "scale(2)" }}
            >
              <MedicalServices />
            </Fab>
          </Link>
          <Typography
            fontWeight="700"
            marginTop="30px"
            marginBottom="100px"
            sx={{ color: "#0B3D60" }}
          >
            Mis Fisioterapeutas
          </Typography>
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default InicioPaciente;

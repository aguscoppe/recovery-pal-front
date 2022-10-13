import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Grid, Typography,Paper,Avatar,Link,Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Exercise from "../Components/Exercise";
import {useTheme} from '@mui/material';

const HomeDoctor = () => {
  const currentUser = useContext(UserContext);

  const theme = useTheme();


  const tarjeta = () => {
    return (
      <Grid item xs={10} md={5}>
        <Paper elevation={3} sx={{ margin: "2vh" }}>
          <Grid container padding={"3vh"}>
            <Grid item xs={5}>
              <Avatar
                alt="FotoPerfilPaciente"
                src="https://mui.com/static/images/avatar/3.jpg"
                sx={{ width: 90, height: 90 }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignContent="space-evenly"
              flexWrap="nowrap"
              xs={7}
            >
              <Grid item xs={8}>
                <Typography variant="h5" color={theme.palette.primary.main}>
                  Rutina de Maria
                </Typography>
              </Grid>
              <Grid item xs={4} justifySelf="end">
                <Link to={`/Paciente/1}`} sx={{textDecoration:"none"}}>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    sx={{ color: "white"}}
                  >
                    Ver Rutina
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
    
  return (
    <>
      <Header title="Home" icon={<HomeIcon />} />
      <Grid container justifyContent="center" sx={{ padding: "10vh 0" }}>
        <Grid item xs={11} md={6}>
        <Typography variant="body1" display={"block"}>Lista de Pacientes</Typography>
        </Grid>
        {[1,2,3,4].map(()=>{
            return tarjeta()
        })}
        </Grid>
        
    </>
  );
};

export default HomeDoctor;

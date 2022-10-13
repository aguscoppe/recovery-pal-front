import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Link,
  Button,
  Tab,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Exercise from "../Components/Exercise";
import { useTheme } from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Rutine from "../Components/Rutine";
import { Margin } from "@mui/icons-material";



const ListRutine = () =>{
    return(
        <Grid item>
              <Rutine
                id={2}
                name="Rutina 1"
                duracion="Dos meses"
                frecuencia="Semanal"
                cantidad="3 ejercicios"
                imgSrc={
                  "https://www.remusfitness.com/blog/wp-content/uploads/2020/04/Squat.jpg"
                }
              />
        </Grid> 
    )
}

const PacientProfile = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        bgcolor={theme.palette.primary.main}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ width: "100%", height: "20vh" }}
      >
        <Avatar
          alt="FotoPerfilPaciente"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: 90, height: 90 }}
        ></Avatar>
        <Typography variant="h4" color={theme.palette.textPrimary.main}>
          Maria Laura
        </Typography>
        <Typography variant="body1" color={theme.palette.textSecondary.main}>
          Edad 33
        </Typography>
      </Box>
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
          <Grid container justifyContent="center">
                {[1,2,3,4].map(()=>{
                    return ListRutine()
                 })} 
              <Button variant="contained" color={"primary"}>
                CREAR RUTINA
              </Button>
            </Grid>
          
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </>
  );
};

export default PacientProfile;

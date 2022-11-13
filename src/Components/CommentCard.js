import { Grid, Typography, Paper, Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import IconButton from '@mui/material/IconButton';

const CommentCard = (props) => {
  const theme = useTheme();
  const comment = props.comment
  return (
    <Grid item container xs={10} md={5} sx= {{ pt: 1}} >
      <Paper elevation={3} sx={{ margin: "1vh", width: "100%" }}  >
        <Grid container padding={"3vh"} >
        <Grid item xs= {11} lg= {11} xl={11} md={11} container  spacing= {2} sx= {{width: "100%"}}  >
          <Grid item xs= {12} md = {12} ld= {12} xl= {12}>
            <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              {"Nombre: "}
            </Typography>
            <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              
            >
              {comment.name} 
            </Typography>
          </Grid>
          <Grid item xs= {12} md = {12} ld= {12} xl= {12}>
          <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              {"Rutina: "}
            </Typography>
            <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              
            >
               {comment.routine} 
            </Typography>
          </Grid>

          <Grid item xs= {12} md = {12} ld= {12} xl= {12}>
            <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              {"Fecha: "}
            </Typography>
            <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              
            >
              {comment.date} 
            </Typography>
          </Grid>

          <Grid item xs= {12} md = {12} ld= {12} xl= {12}>
            <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              {"Mensaje: "}
            </Typography>
            <Typography
            display= "inline"
              variant="body1"
              marginTop="5px"
              
            >
              {comment.comment} 
            </Typography>
          </Grid>
          </Grid>
          <Grid item xs= {1} lg= {1} xl={1} md={1} >
          <IconButton aria-label="Responder" onClick = {/*aqui se añade la logica para abrir el menu de responder */ null}>
            <ListIcon/>
            </IconButton>

          </Grid>

        </Grid>
      </Paper>
    </Grid>
  );
};

export default CommentCard;

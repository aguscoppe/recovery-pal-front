import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext"
import {
  Button,
  Grid,
  IconButton,
  Typography,
  Modal,
  TextField,
  Input,
  Box,
} from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import { addUserFeedback, getLastFeedbackByRoutin } from '../Controllers/FeedbackEntry.Controller';
import { useEffect } from "react";
import { Functions } from "@mui/icons-material";


//estilos para el modal container
const modalContainer = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: "20px",
  };

const ModalComment = (props) =>{

  //obtencion de rutina por parte de los params en url
      const {idRoutine} = useParams()

      const [idFeedback,setFeedback]= useState(0)
  
  
      //obtencion de feedback por parte de llamada al back
  
  useEffect(()=>{
      const obtenerFeed = async () =>{
          try {
              const respuesta = await getLastFeedbackByRoutin(idRoutine)
              const idFeedback = respuesta.feedback._id
              if (respuesta.rdo === 1) {
                  alert("No se pudo encontrar el Feedback");
                } else {
                  setFeedback(idFeedback);
                }
            } catch (e) {
              console.log(e);
            }
      }
      obtenerFeed()
  },[idRoutine])


    const {pain,feeling,improve} = props.info

    const [comment,setComment]= useState("")


    function handleComment (e){
      setComment(e.target.value)
    }

    //llamada al back para que guarde los datos de la encuesta
    const callAtBackend = async () => {
      let infoFeed = {
        pain:pain,
          feeling:feeling,
          improve:improve,
          comment:comment
      }
      try {
        const res = await addUserFeedback(idFeedback,infoFeed);
        if (res.rdo === 1) {
          alert("No se pudo guardar el feedback");
        } else {
          console.log(res)
        }
      } catch (e) {
        console.log(e);
      }
    };


   const handleFinal= async ()=>{
    await callAtBackend()
   }


    return(
    <Modal open={props.open}>
      <Box sx={modalContainer}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={8} m={4}>
            <Typography variant="h3" align="center" marginBottom={"1vh"}>
             ¡Bien Hecho! 
            </Typography>
            <Typography variant="h6" align="center" marginBottom={"1vh"}>
             Si tienes comentarios para tu fisioterapeuta, escríbelos aquí:
            </Typography>
            <TextField
              maxRows={4}
              multiline
              name="comment"
              fullWidth
              label="Escribe tu comentario (opcional)"
              variant="filled"
              onChange={handleComment}
            />

            <Grid item container justifyContent="center">
            <Link to={`/routine/${idRoutine}`} style={{ textDecoration: "none"}}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={()=>{ 
                    handleFinal()
                  }}
                  sx={{ mt: 3 }}
                >
                  Finalizar
                </Button>
                </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
    )
};


const Question = (props) => {

//handle pasado por parametro
    const handleClick = props.state

    const [color,setColor]=useState(0)

    const colorPrimario = '22BEE9'; //color azul
    const colorSad = 'F53F3E';      //color rojo
    const colorNeutral = 'F7AB29';  //color amarillo
    const colorHappy = '0CBF59';    //color verde



    return (
       <Grid container direction="column" marginBottom="5vh" alignItems="center">
            <Grid item>
                {/**texto con la pregunta que se pasa por parametro */}
                <Typography variant="h6" align="center">
                    {props.pregunta}
                </Typography>
            </Grid>
            <Grid item container justifyContent="space-evenly"
            marginTop={5}>
                {/**---------------CARITA TRISTE----------------------- */}
                <Grid item>
                {/**setColor cambia el estado de color mientras que el handle cambia la seleccion en el componente padre */}
                <IconButton aria-label="sad face" 
                    onClick={()=>{
                        setColor(2)
                        handleClick(2)
                    }}
                >   
                {/*el condicional es para poder sacar el color y la sellecion cuando se vuelve a tocar*/}
                    <SentimentVeryDissatisfiedIcon style={{ fontSize: "2.5em", color: color === 2 ? colorSad : colorPrimario }} />
                </IconButton>
                </Grid>
                {/**---------------CARITA NORMAL----------------------- */}
                <Grid item>
                <IconButton aria-label="neutral face" 
                    onClick={()=>{
                        setColor(3)
                        handleClick(3)
                    }}>
                    <SentimentNeutralIcon style={{ fontSize: "2.5em",color:  color === 3 ? colorNeutral : colorPrimario }} />
                    </IconButton>
                </Grid>
                {/**---------------CARITA FELIZ----------------------- */}
                <Grid item>
                <IconButton aria-label="happy face" 
                    onClick={()=>{
                        setColor(1)
                        handleClick(1)
                    }}>
                    <SentimentSatisfiedAltIcon style={{ fontSize: "2.5em" ,color:color === 1 ? colorHappy : colorPrimario}} />
                    </IconButton> 
                </Grid>
            </Grid>
       </Grid>
       
    )
}





const Survey = () => {
    const currentUser = useContext(UserContext)

    

//usestate's para poder pasar a la base de datos cuando se termine

    const [feeling,setFeeling]= useState(0)

    const [pain,setPain]= useState(0)

    const [improve,setImprove] = useState(0)

    

//handles para poder cambiar los state individualmente desde el componente Question
    const handleFeeling = (e)=>{
        setFeeling(e)
    }
    const handlePain = (e)=>{
        setPain(e)
    }
    const handleImprove = (e)=>{
        setImprove(e)
    }




    const [openModal,setOpenModal]= useState(false)

    const handleOpenModal= ()=>{
        setOpenModal(true)
    }
    return (
      <>
        <Header title="Encuesta" icon={<AssignmentIcon />} />
        <Grid container direction="column" sx={{ padding: "10vh 0" }}
        alignItems="center">
          {/**componentes para armar las preguntas con sus caritas se le pasa el handler que transmite la opcion elegida y la pregunta para hacer */}
          <Typography variant="body" align="center" marginBottom="1vh">
          Responde las siguientes preguntas para que podamos evaluar tu proceso de recuperación
          </Typography>
          <Question
            state={handleFeeling}
            pregunta={"¿Cuál es tu estado de ánimo?"}
          />
          <Question
            state={handlePain}
            pregunta={"¿Cómo te sientes físicamente?"}
          />
          <Question
            state={handleImprove}
            pregunta={
              "Elige la opción que mejor describa la evolución de tu tratamiento:"
            }
          />
          {/**boton que te lleva directamente a la lista de ejercicios de la rutina recien completada 
          <Link to={`/routine/${idRoutine}`} style={{ textDecoration: "none"}}>*/}
            <Button
                variant="contained"
                color={"primary"}
                onClick={()=>{
                    handleOpenModal()
                }}
                sx={{ color: "white" }}
            >
            SIGUIENTE
            </Button>
         
        </Grid>
        <NavBar />
        {openModal && (
        <ModalComment
          open={openModal}
          info={{
            pain: pain,
            feeling: feeling,
            improve: improve
          }}
        />
      )}
      </>
    );
}



export default Survey
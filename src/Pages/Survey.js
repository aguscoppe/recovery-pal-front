import { useContext, useState } from "react"
import { UserContext } from "../Contexts/UserContext"
import { Button, Grid, IconButton, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';



const Question = (props) => {
    console.log(props)

    const handleFeeling = props.state

    const [color,setColor]=useState(0)

    
    const colorPrimario = '22BEE9'; //color azul
    const colorSad = 'F53F3E';      //color rojo
    const colorNeutral = 'F7AB29';  //color amarillo
    const colorHappy = '0CBF59';    //color verde



    return (
       <Grid container direction="column" marginBottom="5vh">
            <Grid item>
                {/**texto con la pregunta que se pasa por parametro */}
                <Typography variant="h5" align="center">
                    {props.pregunta}
                </Typography>
            </Grid>
            <Grid item container justifyContent="space-evenly"
            marginTop={5}>
                {/**---------------CARITA TRISTE----------------------- */}
                <Grid item>
                    {/*el condicional es para poder sacar el color y la sellecion cuando se vuelve a tocar*/}
                <IconButton aria-label="sad face" 
                    onClick={()=>{
                        setColor(2)
                        handleFeeling(2)
                    }}
                >   
                    <SentimentVeryDissatisfiedIcon style={{ fontSize: "2.5em", color: color === 2 ? colorSad : colorPrimario }} />
                </IconButton>
                </Grid>
                {/**---------------CARITA NORMAL----------------------- */}
                <Grid item>
                <IconButton aria-label="neutral face" 
                    onClick={()=>{
                        setColor(3)
                        handleFeeling(3)
                    }}>
                    <SentimentNeutralIcon style={{ fontSize: "2.5em",color:  color === 3 ? colorNeutral : colorPrimario }} />
                    </IconButton>
                </Grid>
                {/**---------------CARITA FELIZ----------------------- */}
                <Grid item>
                <IconButton aria-label="happy face" 
                    onClick={()=>{
                        setColor(1)
                        handleFeeling(1)
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

    const [feeling,setFeeling]= useState(0)

    const handleFeeling = (e)=>{
        setFeeling(e)
    }

    return(
        <>
      <Header title='Encuesta' icon={<AssignmentIcon />} />
      <Grid container direction="column" sx={{ padding: '10vh 0' }}>
        <Question state={handleFeeling}
            pregunta={"Cual es tu estado de animo?"}/>
        <Question
            pregunta={"Como te sientes fisicamente?"}/>
        <Question
            pregunta={"Elige la opcion que mejor describa la evolucion de tu tratamiento"}/>
        <Button onClick={()=>{
        console.log(feeling)
      }}>Hola</Button>
      </Grid>
      
      <NavBar />
    </>
    )
}



export default Survey
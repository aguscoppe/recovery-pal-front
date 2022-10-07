import React, { useState} from "react";
import ReactDOM from "react-dom";
import {Redirect} from "react-router-dom";
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import {patientRegistration} from "../Controllers/PatientEntry.Controller";
import {doctorRegistration} from "../Controllers/DoctorEntry.Controller";
import {getPatientById} from "../Controllers/PatientEntry.Controller";


export default function Registration() {
  
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name,setName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [pass1,setPass1] = useState("");
  const [pass2,setPass2] = useState("");
  const [radioValue,setRadioValue] = useState("");

  const errors = {
    empty: "Debe ingresar información en todos los campos",
    email: "El email ingresado ya está registrado",
    pass1: "Debe tener al menos 8 caracteres",
    pass2: "Las contraseñas no son iguales",
  };

  const style={
    form : {
        color: '#0B3D60',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '92vh',
    },
    input:{
        margin: "5px",
        width: "55%",
    },
    radio:{
        marginTop: "5px"
    },
    button:{
        marginTop: "20px",
        backgroundColor: '#0B3D60',
        width: "30%",
        color: "white",
        '&:hover': {
            color: "#0B3D60",
        },
    },
    error:{
      color: "red",
      marginTop: "5px",
      marginBottom: "5px"
    }
  };

  const validarRegistro = async function(){
    let datos = {
      email: email.toLowerCase(),
      password:pass1,
      name:name,
      lastName: lastName,
    }
    let regisInfo;
    if(radioValue==="patient"){
      regisInfo = await patientRegistration(datos);
    }else{
      regisInfo = await doctorRegistration(datos);
    }
    console.log(regisInfo.mensaje)
    if (regisInfo.rdo===0 ){
      setIsSubmitted(true);
    }
    if (regisInfo.rdo===1){
      setErrorMessages({ name: "email", message: errors.email });
    }
  }

  const pruebaGet = async function(){
    var patientInfo = await getPatientById("633c97e68efef931d4597301");
    console.log("Soy el paciente del Back:", patientInfo.patient)
  }
  
  const handleSubmit = () => {
    console.log(radioValue);

    if(name===""|| lastName===""||email===""||pass1===""||pass2===""||radioValue===""){
      setErrorMessages({ name: "empty", message: errors.empty });
    }
    else{
      if (pass1.length <8) {
        //password corta
        setErrorMessages({ name: "pass1", message: errors.pass1 });
      }else{
        if(pass1 !== pass2){
          //password distinta
          setErrorMessages({ name: "pass2", message: errors.pass2 });
        }else {
          setErrorMessages({});
          pruebaGet();
          //validarRegistro(); 
        }
      }
    }
  };

  

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div style={style.error}>{errorMessages.message}</div>
  );

  const renderForm = (
    <FormLabel sx={style.form}>
        <h1>Registro</h1>
        <TextField label="Nombre" variant="outlined" placeholder="Juan" sx={style.input} 
        onChange={(e) => {setName(e.target.value)}}></TextField>
        <TextField label="Apellido" variant="outlined" placeholder="Perez" sx={style.input}
        onChange={(e) => {setLastName(e.target.value)}}></TextField>
        <TextField label="Email" variant="outlined" placeholder="mail@mail.com" sx={style.input}
        onChange={(e) => {setEmail(e.target.value)}}></TextField>
        {renderErrorMessage("email")}
        <TextField label="Contraseña" variant="outlined" type="password" sx={style.input}
        onChange={(e) => {setPass1(e.target.value)}}></TextField>
        {renderErrorMessage("pass1")}
        <TextField label="Repetir Contraseña" variant="outlined" type="password" sx={style.input}
        onChange={(e) => {setPass2(e.target.value)}}></TextField>
        {renderErrorMessage("pass2")}

        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        color = "secondary"
        row
        sx={style.radio}
        >
            <FormControlLabel value="patient" control={<Radio color="primary" 
            onChange={(e) => {setRadioValue(e.target.value)}}/>} label="Paciente"/>
            <FormControlLabel value="doctor" control={<Radio color="primary" 
            onChange={(e) => {setRadioValue(e.target.value)}}/>} label="Fisioterapeuta" />
        </RadioGroup>
        {renderErrorMessage("empty")}
        <Button sx={style.button} onClick={handleSubmit}>Guardar</Button>
      </FormLabel>
  )
   
  return (
    <div>
        {!isSubmitted ? renderForm : 
        <h1>Te Registraste</h1>}
    </div>
  );

  
}
  
import urlWebServices from './WebServices.js';

export const doctorRegistration = async function(datos){
    //url webservices
    let url = urlWebServices.doctorRegistration;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', datos.email);
    formData.append('password', datos.password);
    formData.append('name', datos.name);
    formData.append('lastName', datos.lastName);
    //console.log("dato",formData);
    //console.log("url",url);
    try{
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.createdUser);
                    //guardo usuario logueado
                    localStorage.setItem("email",datos.email);
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:data.message});                
                }
            }
    }
    catch(error){
        console.log("error",error);
    };
}

export const getDoctorById = async function(id){
    //url webservices
    let url = urlWebServices.getDoctorById;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('id', id);
    //console.log("dato",formData);
    //console.log("url",url);
    try{
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, doctor:data.doctor});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:data.message});                
                }
            }
    }
    catch(error){
        console.log("error",error);
    };
}
export const addPatient = async function(idDoctor, email){
    //url webservices
    let url = urlWebServices.addPatientToDoctor;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('idDoctor', idDoctor);
    //console.log("dato",formData);
    //console.log("url",url);
    try{
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 201:
                {
                    return ({rdo:0, patient:data.patient});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:data.message});                
                }
            }
    }
    catch(error){
        console.log("error",error);
    };
};
export const getAllCommentsByDoctor = async function(idDoctor){
    //url webservices
    let url = urlWebServices.getAllCommentsByDoctor;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('idDoctor', idDoctor);
    try{
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                 
                    return ({rdo:0, comments:data.comments});//correcto
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:data.message});                
                }
            }
    }
    catch(error){
        console.log("error",error);
    };
}
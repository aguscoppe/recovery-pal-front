import urlWebServices from './WebServices.js';

export const createRoutine = async function(datos){
    //url webservices
    let url = urlWebServices.createRoutine;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', datos.name);
    formData.append('weeks', datos.weeks);
    formData.append('times', datos.times);
    formData.append('patient', datos.patient);
    formData.append('doctor', datos.doctor);
    for (var i = 0; i < datos.exercises.length; i++) {
        formData.append('exercises', datos.exercises[i]);
    }
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
                    return ({rdo:0, routine:data.createdRoutine});//correcto
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

export const getRoutineById = async function(id){
    //url webservices
    let url = urlWebServices.getRoutineById;
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
                    return ({rdo:0, routine:data.routine});//correcto
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
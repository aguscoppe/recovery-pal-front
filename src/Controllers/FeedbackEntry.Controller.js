import urlWebServices from './WebServices.js';






export const getFeedbackById = async function(idFeedback){
    //url webservices
    let url = urlWebServices.getFeedbackById + idFeedback ;
    
    try{
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            //body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, exercise: data.data});//correcto
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


export const feedbackUpdate = async function(datos){
    //url webservices
    let url = urlWebServices.feedbackUpdate + datos._id;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('patient', datos.patient);
    formData.append('routine', datos.routine);
    formData.append('complete', datos.complete);
    formData.append('pain', datos.pain);
    formData.append('improve', datos.improve);
    formData.append('exercisesDone', datos.exercisesDone);

    //console.log("dato",formData);
    //console.log("url",url);
    try{
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
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
                    /*
                    //guardo token
                    localStorage.setItem("x",data.createdUser);
                    //guardo usuario logueado
                    localStorage.setItem("email",datos.email);
                    */
                    
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

export const getLastFeedbackByRoutin = async function(idRoutine){
    //url webservices
    let url = urlWebServices.getLastFeedbackByRoutine + "/" +  idRoutine ;
    
    try{
        let response = await fetch(url,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            //body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, feedback: data.data});//correcto
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

export const completeExerciseInFeedback = async function(idExercise, idFeedback){
    //url webservices
    let url = urlWebServices.completeExerciseInFeedback + "/";
    const formData = new URLSearchParams();
    formData.append('idExercise', idExercise);
    formData.append('idFeedback', idFeedback);

    
    
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
                    return ({rdo:0, feedback: data.data});//correcto
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

export const addUserFeedback = async function(idFeedback,userInfo){
    //url webservices
    let url = urlWebServices.addUserFeedback;
    //let url = urlWebServices.completeExerciseInFeedback + "/";
    const formData = new URLSearchParams();
    formData.append('idFeedback', idFeedback);
    formData.append('pain', userInfo.pain);
    formData.append('improve', userInfo.improve);
    formData.append('comment', userInfo.comment);
    formData.append('feeling', userInfo.feeling);
    
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
                    return ({rdo:0, feedback: data.data});//correcto
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
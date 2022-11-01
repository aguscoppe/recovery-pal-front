import urlWebServices from "./WebServices.js";

export const exerciseCreation = async function (datos) {
  //url webservices
  let url = urlWebServices.exerciseCreation;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("doctor", datos.doctor);
  formData.append("instructions", datos.instructions);
  formData.append("videoTitle", datos.videoTitle);
  formData.append("videoURL", datos.videoURL);
  //console.log("dato",formData);
  //console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "POST", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    let rdo = response.status;
    console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);
    switch (rdo) {
      case 200: {
        /*
                    //guardo token
                    localStorage.setItem("x",data.createdUser);
                    //guardo usuario logueado
                    localStorage.setItem("email",datos.email);
                    */

        return { rdo: 0, mensaje: "Ok" }; //correcto
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: data.message };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getExerciseById = async function (id) {
  //url webservices
  let url = urlWebServices.getExerciseById + "/" + id;
  //armo json con datos
  //const formData = new URLSearchParams();
  //formData.append('_id', id);
  //console.log("dato",formData);
  //console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      //body: formData,
    });

    let rdo = response.status;
    console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);
    switch (rdo) {
      case 200: {
        return { rdo: 0, exercise: data.data }; //correcto
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: data.message };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteExerciseById = async function (id) {
  //url webservices
  let url = urlWebServices.deleteExerciseById + "/" + id;
  //armo json con datos
  //const formData = new URLSearchParams();
  //formData.append('_id', id);
  //console.log("dato",formData);
  //console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "DELETE", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      //body: formData,
    });

    let rdo = response.status;
    console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);
    switch (rdo) {
      case 200: {
        return { rdo: 0, exercise: data.data }; //correcto
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: data.message };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const exerciseUpdate = async function (datos) {
  //url webservices
  let url = urlWebServices.exerciseUpdate + "/" + datos._id;
  //armo json con datos
  const formData = new URLSearchParams();
  formData.append("doctor", datos.doctor);
  formData.append("instructions", datos.instructions);
  formData.append("videoTitle", datos.videoTitle);
  formData.append("videoURL", datos.videoURL);
  //console.log("dato",formData);
  //console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "PUT", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    let rdo = response.status;
    console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);
    switch (rdo) {
      case 201: {
        /*
                    //guardo token
                    localStorage.setItem("x",data.createdUser);
                    //guardo usuario logueado
                    localStorage.setItem("email",datos.email);
                    */

        return { rdo: 0, mensaje: "Ok" }; //correcto
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: data.message };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getExerciseByVideoTitleMatch = async function (
  videoTitleToMatch,
  doctorId
) {
  //url webservices
  let url =
    urlWebServices.getExerciseByVideoTitleMatch +
    "/?videoTitle=" +
    videoTitleToMatch +
    "&doctor=" +
    doctorId;
  //armo json con datos
  //const formData = new URLSearchParams();
  //formData.append('_id', id);
  //console.log("dato",formData);
  //console.log("url",url);
  try {
    let response = await fetch(url, {
      method: "GET", // or 'PUT'
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        // 'x-access-token': WebToken.webToken,
        Origin: "http://localhost:3000",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      //body: formData,
    });

    let rdo = response.status;
    console.log("response", response);
    let data = await response.json();
    console.log("jsonresponse", data);
    switch (rdo) {
      case 200: {
        return { rdo: 0, exercise: data.data }; //correcto
      }
      default: {
        //otro error
        return { rdo: 1, mensaje: data.message };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const getAllExcercises = async function(){
    //url webservices
    let url = urlWebServices.getAllExcercises;

    try{
        let response = await fetch(url,{
            method: 'GET',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo){
                case 200:
                {
                    return ({rdo:0, exercises:data.data});//correcto
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
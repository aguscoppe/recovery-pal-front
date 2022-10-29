import urlWebServices from "./WebServices.js";

export const uploadVideo = async function (file, name, description) {
  let url = urlWebServices.uploadVideo;
  const formData = new URLSearchParams();
  formData.append("video", file);
  formData.append("name", name);
  formData.append("description", description);
  try {
    let response = await fetch(url, {
      method: "POST",
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
        return {
          rdo: 0,
          videoData: data,
          message: "El archivo se subio correctamente.",
        }; //correcto
      }
      default: {
        //otro error
        return {
          rdo: 1,
          videoData: data,
          mensaje: "Hubo un error al subir el archivo.",
        };
      }
    }
  } catch (error) {
    console.log("error", error);
  }
};

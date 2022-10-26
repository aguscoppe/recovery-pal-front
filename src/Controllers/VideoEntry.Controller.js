import urlWebServices from './WebServices.js';

export const uploadVideo = async function (video, description) {
  let url = urlWebServices.uploadVideo;
  try {
    console.log(video);
    let response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ file: video }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let rdo = response.status;
    console.log('response', response);
    let data = await response.json();
    console.log('jsonresponse', data);
    switch (rdo) {
      case 200: {
        return {
          rdo: 0,
          videoData: data,
          message: 'El archivo se subio correctamente.',
        }; //correcto
      }
      default: {
        //otro error
        return {
          rdo: 1,
          videoData: data,
          mensaje: 'Hubo un error al subir el archivo.',
        };
      }
    }
  } catch (error) {
    console.log('error', error);
  }
};

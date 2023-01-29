export const getPhoto = (name) => {
  let photo = '';
  if (name === 'María') {
    photo = 'https://mui.com/static/images/avatar/3.jpg';
  } else if (name === 'Susana') {
    photo = 'https://mui.com/static/images/avatar/4.jpg';
  } else if (name === 'Esteban') {
    photo = 'https://mui.com/static/images/avatar/2.jpg';
  } else if (name === 'David') {
    photo = 'https://mui.com/static/images/avatar/1.jpg';
  }
  return photo;
};

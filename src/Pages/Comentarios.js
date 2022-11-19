import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid, Typography } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import SmsIcon from '@mui/icons-material/Sms';
import SearchComments from '../Components/SearchComments';
import CircularProgress from '@mui/material/CircularProgress';
import CommentCard from '../Components/CommentCard';
import { getAllCommentsByDoctor } from '../Controllers/DoctorEntry.Controller';

const Comentarios = () => {
  const currentUser = useContext(UserContext);

  const [comments, setComments] = useState(null);
  const [commentsFiltered, setCommentsFiltered] = useState(null);

  useEffect(() => {
    const getComments = async function () {
      const respuestaComments = await getAllCommentsByDoctor(currentUser._id);
      console.log(
        'Console log de respuesta de back ',
        JSON.stringify(respuestaComments)
      );
      if (respuestaComments.rdo === 1) {
        alert('No existe el doctor o comentarios');
        window.location.href = '/';
      } else {
        console.log(JSON.stringify(respuestaComments));
        setComments(respuestaComments.comments);
        setCommentsFiltered(respuestaComments.comments);
      }
    };
    getComments();
  }, [currentUser._id]);
  return (
    <>
      <Header title='Comentarios' icon={<SmsIcon />} />
      <Grid
        container
        direction='column'
        justifyContent='center'
        sx={{ paddingTop: '10vh' }}
      >
        <Grid
          item
          xs={12}
          md={12}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <SearchComments
            setCommentsFiltered={setCommentsFiltered}
            comments={comments}
          />
        </Grid>
        <Grid
          item
          container
          xs={11}
          md={6}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          sx={{ mt: 3 }}
          spacing={2}
        >
          {commentsFiltered === null ? (
            <CircularProgress />
          ) : (
            commentsFiltered.map((e) => <CommentCard comment={e} />)
          )}
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default Comentarios;

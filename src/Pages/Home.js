import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Exercise from '../Components/Exercise';
import MultipleSelectChip from '../Components/MultipleSelectChip';

const Home = () => {
  const currentUser = useContext(UserContext);
  return (
    <>
      <Header title='Home' icon={<HomeIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          <MultipleSelectChip
            label='Buscar ejercicio'
            list={['Sentadillas', 'Estocadas']}
          />
          <Exercise
            id={1}
            name='Sentadillas'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            imgSrc={
              'https://www.runtastic.com/blog/wp-content/uploads/2018/07/Co%CC%81mo-hacer-sentadillas-1200x800-1024x683.jpg'
            }
          />
          <Exercise
            id={1}
            name='Sentadillas'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            imgSrc={
              'https://www.runtastic.com/blog/wp-content/uploads/2018/07/Co%CC%81mo-hacer-sentadillas-1200x800-1024x683.jpg'
            }
            isComplete
          />
          <Exercise
            id={2}
            name='Sentadillas'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            imgSrc={
              'https://www.remusfitness.com/blog/wp-content/uploads/2020/04/Squat.jpg'
            }
            action={{
              type: 'add',
              function: () => {
                console.log('adding');
              },
            }}
          />
          <Exercise
            id={3}
            name='Sentadillas'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
            imgSrc={
              'https://www.runtastic.com/blog/wp-content/uploads/2018/07/Co%CC%81mo-hacer-sentadillas-1200x800-1024x683.jpg'
            }
            action={{
              type: 'remove',
              function: () => {
                console.log('removing');
              },
            }}
          />
        </Grid>
      </Grid>
      <NavBar />
    </>
  );
};

export default Home;

import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { Grid, Typography } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import SmsIcon from '@mui/icons-material/Sms';

function VideoDisplay() {
    const currentUser = useContext(UserContext);
    return (
      <>
        <Header title='Video' icon={<SmsIcon />} />
        <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
          <Grid item xs={11} md={6}>
            <Typography variant='h3'>VAMAAAA</Typography>
            <Typography variant='body1' marginTop='20px'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        <NavBar />
      </>
    );
}

export default VideoDisplay;

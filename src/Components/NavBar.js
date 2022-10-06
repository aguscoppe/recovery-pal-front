import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SmsIcon from '@mui/icons-material/Sms';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation sx={{ backgroundColor: theme.palette.primary.main }}>
        <Link to='/home'>
          <BottomNavigationAction
            label='Home'
            sx={{ color: 'white' }}
            icon={<HomeIcon />}
          />
        </Link>
        <Link to='/profile'>
          <BottomNavigationAction
            label='Perfil'
            sx={{ color: 'white' }}
            icon={<PersonIcon />}
          />
        </Link>
        <Link to='/chat'>
          <BottomNavigationAction
            label='Chat'
            sx={{ color: 'white' }}
            icon={<SmsIcon />}
          />
        </Link>
        <Link to='/videos'>
          <BottomNavigationAction
            label='Videos'
            sx={{ color: 'white' }}
            icon={<VideocamIcon />}
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
};

export default NavBar;

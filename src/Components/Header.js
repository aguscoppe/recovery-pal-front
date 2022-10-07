import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material';

const Header = ({ title, icon }) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.primary.main}
      display='flex'
      alignItems='center'
      sx={{ width: '100%', height: '8vh', position: 'fixed' }}
    >
      <IconButton sx={{ color: '#fff' }}>{icon}</IconButton>
      <Typography color='white'>{title}</Typography>
    </Box>
  );
};

export default Header;

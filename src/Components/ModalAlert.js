import { Modal, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const alertValues = {
  success: {
    icon: (
      <Box
        component='img'
        sx={{
          height: 90,
          width: 90,
        }}
        alt='Success Icon'
        src={require('../Assets/icons/SuccessIcon.png')}
      />
    ),
    color: '#22BEE9',
  },
  error: {
    icon: (
      <Box
        component='img'
        sx={{
          height: 90,
          width: 90,
        }}
        alt='Error Icon'
        src={require('../Assets/icons/ErrorIcon.png')}
      />
    ),
    color: '#E92222',
  },
  warning: {
    icon: (
      <Box
        component='img'
        sx={{
          height: 90,
          width: 90,
        }}
        alt='Warning Icon'
        src={require('../Assets/icons/WarningIcon.png')}
      />
    ),
    color: '#E9D522',
  },
};

/* Styles */
const modalContainer = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '350px',
  height: 'auto',
  backgroundColor: '#FFF',
  borderRadius: '20px',
  padding: '20px',
};

const iconContainer = {
  marginBottom: '20px',
};

const buttonContainer = {
  width: '200px',
};

const modalTitleContainer = {
  textAlign: 'center',
  marginBottom: '30px',
};

const ModalAlert = ({
  open,
  type,
  title,
  subtitle,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnPage,
  setNotOpen,
  secondaryBtnPage,
}) => {
  return (
    <Modal open={open}>
      <Box sx={modalContainer}>
        <Box sx={iconContainer}>{alertValues[type].icon}</Box>
        <Box sx={modalTitleContainer}>
          <Typography variant='h4' fontWeight='bold' marginBottom='10px'>
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </Box>
        <Box sx={buttonContainer}>
          {primaryBtnPage ? (
            <Link to={`${primaryBtnPage}`} style={{ textDecoration: 'none' }}>
              <Button
                onClick={setNotOpen}
                variant='contained'
                fullWidth={true}
                sx={{
                  backgroundColor: alertValues[type].color,
                  marginBottom: '15px',
                }}
              >
                {primaryBtnText}
              </Button>
            </Link>
          ) : (
            <Button
              onClick={(e) => setNotOpen(e)}
              variant='contained'
              fullWidth={true}
              sx={{
                backgroundColor: alertValues[type].color,
                marginBottom: '15px',
              }}
            >
              {primaryBtnText}
            </Button>
          )}
          {secondaryBtnText && (
            <Link to={`${secondaryBtnPage}`} style={{ textDecoration: 'none' }}>
              <Button
                onClick={setNotOpen}
                variant='contained'
                fullWidth={true}
                sx={{
                  border: 1,
                  backgroundColor: '#FFF',
                  color: alertValues[type].color,
                }}
              >
                {secondaryBtnText}
              </Button>
            </Link>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAlert;

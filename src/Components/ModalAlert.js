import { Modal, Typography, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const alertValues = {
  success: {
    icon: (
      <Box
        component="img"
        sx={{
          height: 90,
          width: 90,
        }}
        alt="Success Icon"
        src={require('../Assets/icons/SuccessIcon.png')}
      />
    ),
  },
  error: {
    icon: (
      <Box
        component="img"
        sx={{
          height: 90,
          width: 90,
        }}
        alt="Error Icon"
        src={require('../Assets/icons/ErrorIcon.png')}
      />
    ),
  },
  warning: {
    icon: (
      <Box
        component="img"
        sx={{
          height: 90,
          width: 90,
        }}
        alt="Warning Icon"
        src={require('../Assets/icons/WarningIcon.png')}
      />
    ),
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
  height: '350px',
  backgroundColor: '#FFF',
  borderRadius: '20px',
};

const closeIconContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
};

const iconContainer = {
  marginBottom: '20px',
};

const buttonContainer = {
  width: '200px',
};

const modalTitleContainer = {
  textAlign: 'center',
  marginBottom: '50px',
};

const ModalAlert = ({
  open,
  type,
  title,
  subtitle,
  primaryBtnText,
  secondaryBtnText,
  primaryBtnPage,
  secondaryBtnPage,
}) => {
  return (
    <Modal open={open}>
      <Box sx={modalContainer}>
        {/*<Box sx={closeIconContainer}>
          <CloseIcon />
        </Box> */}
        <Box sx={iconContainer}>{alertValues[type].icon}</Box>
        <Box sx={modalTitleContainer}>
          <Typography variant="h4" fontWeight="bold" marginBottom="10px">
            {title}
          </Typography>
          <Typography>{subtitle}</Typography>
        </Box>
        <Box sx={buttonContainer}>
          <Link to={`${primaryBtnPage}`} style={{ textDecoration: 'none' }}>
            <Button variant="contained" fullWidth={true}>
              {primaryBtnText}
            </Button>
          </Link>
          {secondaryBtnText && (
            <Link to={`${secondaryBtnPage}`} style={{ textDecoration: 'none' }}>
              <Button variant="contained" fullWidth={true}>
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

import {
  Box,
  IconButton,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useTheme } from '@mui/material';
import { daysList } from './RoutineForm';

const checkboxStyle = {
  margin: 0,
  cursor: 'default',
  color: '#5BA102',
  '& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label': {
    color: 'white',
    '& svg': {
      color: '#5BA102',
    },
    '& .Mui-checked': {
      color: '#5BA102',
    },
  },
  '& .Mui-checked': {
    '& svg': {
      color: '#5BA102',
    },
    color: '#5BA102',
  },
  '& .Mui-disabled': {
    color: 'white',
    '& .Mui-checked': {
      color: '#5BA102',
    },
    '& .Mui-unchecked': {
      color: 'white',
    },
    '& .MuiSvgIcon-root': {
      color: '#ddd',
    },
  },
};

const isFromThisWeek = (date) => {
  const today = new Date();
  const firstDay = new Date(today.setDate(today.getDate() - today.getDay()));
  const lastDay = new Date(today.setDate(today.getDate() - today.getDay() + 6));
  return (
    new Date(date).toDateString() >= new Date(date).toDateString(firstDay) &&
    new Date(date).toDateString() <= new Date(date).toDateString(lastDay)
  );
};

const Header = ({ title, icon, routineData = null }) => {
  const theme = useTheme();
  const today = new Date().getDay();
  const pendingDays = Array.from(Object.keys(daysList)).filter(
    (day, i) => day > today
  );
  let todayComplete = false;
  let weekCompletedDays = [];
  if (routineData) {
    const currentDay = routineData.feedbacks.filter(
      (day) => new Date(day.date).toDateString() === new Date().toDateString()
    );
    if (currentDay.length) {
      todayComplete =
        currentDay[0].exercisesDone.length === routineData.exercises.length;
    }
    const completedDays = routineData.feedbacks.filter(
      (el) => isFromThisWeek(el.date) && el.exercisesDone.length !== 0
    );

    const completedDayNumber = completedDays.map((el) =>
      new Date(el.date).getDay()
    );
    weekCompletedDays = completedDayNumber.filter((day) => day <= today);
  }

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      sx={{
        width: '100%',
        height: routineData ? '20vh' : '8vh',
        position: 'fixed',
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ height: routineData ? '10vh' : '100%' }}
      >
        <IconButton sx={{ color: '#fff' }}>{icon}</IconButton>
        <Typography color='white'>{title.toUpperCase()}</Typography>
        {routineData && (
          <Typography
            color='white'
            align='center'
            variant='body2'
            marginLeft={4}
            sx={{ color: '#ccc' }}
          >
            Semana 1 de {routineData.schedule.weeks}
          </Typography>
        )}
      </Box>
      {routineData && (
        <Box display='flex' alignItems='center' justifyContent='center'>
          <FormGroup
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            {daysList.map((day, index) => (
              <FormControlLabel
                key={index}
                onChange={(e) => e.preventDefault()}
                control={
                  <Checkbox
                    disabled={pendingDays.includes(index.toString())}
                    checked={
                      (today === index && todayComplete) ||
                      weekCompletedDays.includes(index) ||
                      (routineData.schedule.days.includes(index) &&
                        pendingDays.includes(index.toString()))
                    }
                    disableRipple
                    sx={{
                      cursor: 'default',
                      color: today === index ? '#F7AB29' : 'white',
                    }}
                  />
                }
                label={day.label}
                labelPlacement='top'
                value={index}
                sx={{
                  ...checkboxStyle,
                  '& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label':
                    {
                      color: today === index ? '#F7AB29' : 'white',
                    },
                }}
              />
            ))}
          </FormGroup>
        </Box>
      )}
    </Box>
  );
};

export default Header;

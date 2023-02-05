import { Box, Card, Grid, CardContent, Typography } from '@mui/material';
import { CChart } from '@coreui/react-chartjs';
import { theme } from '../theme';
import Carousel from 'react-material-ui-carousel';

const Statistics = ({ report, routineAchievements }) => {
  return (
    <>
      <Grid sx={{ p: '20px', zIndex: 1 }} container columnSpacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Carousel
            indicators={false}
            animation='slide'
            sx={{ width: '100%', minHeight: '400px' }}
            navButtonsAlwaysVisible={true}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight='700'>
                  Cumplimiento de ejercicios
                </Typography>
                <CChart
                  type='doughnut'
                  data={{
                    labels: ['N/C', 'Completo', 'No Completo'],
                    datasets: [
                      {
                        backgroundColor: ['gray', 'green', 'red'],
                        data: [0, 42, 3],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight='700'>
                  Estado de ánimo
                </Typography>
                <CChart
                  type='doughnut'
                  data={{
                    labels: ['N/C', 'Positivo', 'Negativo', 'Regular'],
                    datasets: [
                      {
                        backgroundColor: ['gray', 'green', 'red', 'orange'],
                        data: [0, 30, 4, 12],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight='700'>
                  Dolor físico
                </Typography>
                <CChart
                  type='doughnut'
                  data={{
                    labels: ['N/C', 'Poco', 'Mucho', 'Regular'],
                    datasets: [
                      {
                        backgroundColor: ['gray', 'green', 'red', 'orange'],
                        data: [0, 40, 2, 3],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight='700'>
                  Evolución del tratamiento
                </Typography>
                <CChart
                  type='doughnut'
                  data={{
                    labels: ['N/C', 'Positivo', 'Negativo', 'Regular'],
                    datasets: [
                      {
                        backgroundColor: ['gray', 'green', 'red', 'orange'],
                        data: [0, 30, 2, 13],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default Statistics;

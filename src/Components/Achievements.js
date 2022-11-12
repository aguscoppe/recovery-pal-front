import { Box, Card, Grid, Typography } from "@mui/material";

const Achievements = ({ achievements }) => {
  const { routineAchievement, feedBackAchievement, exerciseAchievement } =
    achievements;

  return (
    <Card sx={{ marginBottom: "12px" }}>
      <Grid sx={{ p: "20px" }} container alignItems="center" columnSpacing={2}>
        {exerciseAchievement > 0 && (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              marginTop: "10px",
            }}
            flexDirection="column"
            item
            xs={4}
            xl={4}
            lg={4}
            md={4}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
              }}
              alt="Trophy"
              src={require("../Assets/icons/trophy_firstExercise.png")}
            />
            <Typography sx={{ fontWeight: "700" }}>
              1° Ejercicio Completado
            </Typography>
          </Grid>
        )}
        {Array(Math.floor(exerciseAchievement / 5))
          .fill(0)
          .map((_, index) => {
            return (
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                flexDirection="column"
                item
                xs={4}
                xl={4}
                lg={4}
                md={4}
              >
                <Box
                  component="img"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                  alt="Trophy"
                  src={require("../Assets/icons/trophy_firstExercise.png")}
                />
                <Typography sx={{ fontWeight: "700" }}>
                  {5 * (index + 1)} Ejercicios Completados
                </Typography>
              </Grid>
            );
          })}
        {feedBackAchievement > 0 && (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              marginTop: "10px",
            }}
            item
            flexDirection="column"
            xs={4}
            xl={4}
            lg={4}
            md={4}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
              }}
              alt="Trophy"
              src={require("../Assets/icons/trophy_firstweek.png")}
            />
            <Typography sx={{ fontWeight: "700" }}>
              1° Sesion Completada
            </Typography>
          </Grid>
        )}
        {Array(Math.floor(feedBackAchievement / 5))
          .fill(0)
          .map((_, index) => {
            return (
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                flexDirection="column"
                item
                xs={4}
                xl={4}
                lg={4}
                md={4}
              >
                <Box
                  component="img"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                  alt="Trophy"
                  src={require("../Assets/icons/trophy_firstweek.png")}
                />
                <Typography sx={{ fontWeight: "700" }}>
                  {5 * (index + 1)} Sesiones Completadas
                </Typography>
              </Grid>
            );
          })}
        {routineAchievement > 0 && (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              marginTop: "10px",
            }}
            flexDirection="column"
            item
            xs={4}
            xl={4}
            lg={4}
            md={4}
          >
            <Box
              component="img"
              sx={{
                height: 50,
                width: 50,
              }}
              alt="Trophy"
              src={require("../Assets/icons/trophy_firstRoutine.png")}
            />
            <Typography sx={{ fontWeight: "700" }}>
              1° Rutina Completada
            </Typography>
          </Grid>
        )}
        {Array(Math.floor(routineAchievement / 5))
          .fill(0)
          .map((_, index) => {
            return (
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                flexDirection="column"
                item
                xs={4}
                xl={4}
                lg={4}
                md={4}
              >
                <Box
                  component="img"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                  alt="Trophy"
                  src={require("../Assets/icons/trophy_firstRoutine.png")}
                />
                <Typography sx={{ fontWeight: "700" }}>
                  {5 * (index + 1)} Rutinas Completadas
                </Typography>
              </Grid>
            );
          })}
      </Grid>
    </Card>
  );
};

export default Achievements;

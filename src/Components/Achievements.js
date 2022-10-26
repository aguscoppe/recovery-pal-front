import { Box, Card, Grid, CardContent, Typography } from "@mui/material";

const Achievements = () => {
  return (
    <Card sx={{ marginBottom: "12px" }}>
      <Grid
        sx={{ p: "20px" }}
        container
        justifyContent="space-between"
        columnSpacing={2}
      >
        <Grid
          sx={{ justifyContent: "center", alignItems: "center" }}
          item
          xs={4}
          xl={4}
          lg={4}
          md={4}
        >
          <Box
            component="img"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
            }}
            alt="Trophy"
            src={require("../Assets/icons/trophy_firstExercise.png")}
          />
        </Grid>
        <Grid
          sx={{ justifyContent: "center", alignItems: "center" }}
          item
          xs={4}
          xl={4}
          lg={4}
          md={4}
        >
          <Box
            component="img"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
            }}
            alt="Trophy"
            src={require("../Assets/icons/trophy_firstExercise.png")}
          />
        </Grid>
        <Grid
          sx={{ justifyContent: "center", alignItems: "center" }}
          item
          xs={4}
          xl={4}
          lg={4}
          md={4}
        >
          <Box
            component="img"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: 50,
              width: 50,
            }}
            alt="Trophy"
            src={require("../Assets/icons/trophy_firstExercise.png")}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Achievements;

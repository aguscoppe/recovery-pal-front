import { Box, Card, Grid, CardContent, Typography } from "@mui/material";

const Statistics = () => {
  return (
    <Card sx={{ marginBottom: "12px" }}>
      <Grid sx={{ p: "20px" }} container columnSpacing={2}>
        <Grid
          sx={{ justifyContent: "center", alignItems: "center" }}
          item
          xs={3}
          xl={3}
          lg={3}
          md={3}
        >
          <Box
            component="img"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              height: 72,
              width: 72,
            }}
            alt="CakeGraph"
            src={require("../Assets/piechart.png")}
          />
        </Grid>
        <Grid item xs={9} xl={6} lg={6} md={6}>
          <CardContent>
            <Typography>70% rutinas completadas</Typography>
            <Typography>30% rutinas incompletas</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Statistics;

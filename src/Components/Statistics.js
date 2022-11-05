import { Box, Card, Grid, CardContent, Typography } from "@mui/material";

const Statistics = ({ report, routineAchievements }) => {
  const stylesStatistics = {
    fontWeight: "600",
  };

  return (
    <Card sx={{ marginBottom: "12px" }}>
      <Grid sx={{ p: "20px" }} container columnSpacing={2}>
        <Grid
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
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
            <Typography sx={stylesStatistics}>
              -{report.timesComplete} veces completó una rutina
            </Typography>
            <Typography sx={stylesStatistics}>
              -{report.timesPain} indico que sintió dolor
            </Typography>
            <Typography sx={stylesStatistics}>
              -{report.timesImprove} indico que notó una mejora
            </Typography>
            <Typography sx={stylesStatistics}>
              -{(report.feedbacksDone / report.totalFeedbacks) * 100}% de
              sesiones completadas
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Statistics;

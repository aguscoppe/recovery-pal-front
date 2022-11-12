import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import { Stack } from "@mui/system";

export default function CardLabelExercise(props) {
  const title = props.title;
  const type = props.type;
  const details = props.details;
  const theme = useTheme();
  return (
    <Grid item xs={12} md={12} lg={12} xl={12} >
      <Card sx={{ borderRadius: "16px", minHeight: 40 }} component={Stack} direction="column" justifyContent="center">
        <Box sx={{ mx: 2 }} justify="space-between">
          <Typography
            variant="body1"
            marginTop="5px"
            sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            display={type === "numeric" ? "inline" : null}
          >
            <span>{title}</span>
          </Typography>
          <Typography
            variant="body1"
            marginTop="5px"
            marginBottom="3px"
            display={type === "numeric" ? "inline" : null}
            sx= {{mr: type === "numeric" ? 2 : 0 }}
            
          >
            <span style={{ float: type === "numeric" ? "right" : "left"}} >{details}</span>
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}

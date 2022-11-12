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
      <Card sx={{ borderRadius: "16px", minHeight: 40  }}>
        <Box sx={{ mx: 2, pl: props.icon? 0: "15px" }} >
        <Stack direction="row" alignItems="center" gap={1}>
            {props.icon}

          <Typography
            variant="body1"
            marginTop="5px"
            sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            display={type === "numeric" ? "inline" : "block"}
          >
            {title}
          </Typography>
        { type === "numeric"?
          <Typography
            variant="body1"
            marginTop="5px"
            align ="right"
            display="inline"
            
          >
            <span style ={{float: "right"}}>{details}</span>
          </Typography>
          : null}
          
          </Stack>
          { type !== "numeric"?
          <Typography
            variant="body1"
            marginTop="5px"
            align ="left"
            marginBottom="3px"
          >
            {details}
          </Typography>
          : null}
        </Box>
      </Card>
    </Grid>
  );
}

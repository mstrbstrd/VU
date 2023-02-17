import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// IMAGES
import img1 from "../../imgs/VU_covid2.png";

const card = (
  <React.Fragment>
    <CardMedia
      sx={{ height: 140 }}
      image={img1}
      title="covid virus generated image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Covid-19
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Your safety is our top priority. We are committed to protecting our
        patients and staff during the pandemic, so please take note of our
        COVID-19 policies to stay informed.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box
      sx={{
        minWidth: 260,
        maxWidth: 460,
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

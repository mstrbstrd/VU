import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// IMAGES
import img1 from "../../imgs/VU_patients.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardMedia
      sx={{ height: 140 }}
      image={img1}
      title="doctors' office generated image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Patients
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Make the most of your visit by preparing beforehand. We have a wealth of
        information available on procedures and conditions, so you can be
        informed and ready for your appointment.
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

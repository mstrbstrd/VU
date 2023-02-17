import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// IMAGES
import img1 from "../../imgs/VU_doctor2.png";

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
      title="covid virus generated image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Doctors
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Medical professionals, we are here to provide you with the information
        you need. Whether you need referrals or helpful resources, we are here
        to assist you in any way we can.
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

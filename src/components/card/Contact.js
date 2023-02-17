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
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Contact Us:
      </Typography>
      <Typography sx={{ fontSize: 20 }} color="text.secondary">
        <Typography
          sx={{ padding: "1rem" }}
          color="text.primary"
          gutterBottom
          variant="h6"
        >
          201-3301 24 Ave,
          <br /> Vernon, BC
          <br /> V1T 9S8
        </Typography>
        Office Hours:
        <Typography
          sx={{ padding: "1rem" }}
          color="text.primary"
          gutterBottom
          variant="h6"
        >
          Monday - Friday | 9:00am - 4:00pm
        </Typography>
        Phone:
        <Typography
          sx={{ padding: "1rem" }}
          color="text.primary"
          gutterBottom
          variant="h6"
        >
          +1{bull}250{bull}542{bull}8715
        </Typography>
        Email:
        <Typography
          sx={{ padding: "1rem" }}
          color="text.primary"
          gutterBottom
          variant="h6"
        >
          office@vernonurology.ca <br />
        </Typography>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Card
      sx={{
        minHeight: "100%",
        minWidth: "45%",
        maxWidth: "25rem",
        maxHeight: "100%",
      }}
      variant="outlined"
    >
      {card}
    </Card>
  );
}

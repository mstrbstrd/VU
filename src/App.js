import React from "react";
import NavBar from "./components/navbar/NavBar";
import CssBaseline from "@mui/material/CssBaseline";

import HeroImage from "./imgs/VU_backdrop.jpeg";
import HeroImage2 from "./imgs/VU_CARD_BG2.png";
import HeroImage3 from "./imgs/VU_CARD_BG3.jpeg";

import CovidCard from "./components/card/CovidCard";
import PatientCard from "./components/card/PatientCard";
import DoctorCard from "./components/card/DoctorCard";
import ContactMapContainer from "./components/containers/ContactMapContainer";
import Footer from "./components/footer/Footer";

import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "30%",
    height: "30%",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NavBar />
        <Box
          sx={{
            display: "column",
            background: "none",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center-left",
            padding: "6rem",
          }}
        >
          <Typography variant="h1" component="h1" sx={{}}>
            <b>
              <u>Quality Care</u>
            </b>
            {/* <LocalHospitalIcon fontSize="48px" sx={{ padding: "1rem" }} /> */}
          </Typography>
          <Typography sx={{ padding: "1rem" }} variant="h5">
            {" "}
            - for all your urologic needs.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "none",
              borderRadius: "50px",
              color: "white",
              border: "1px solid white",
            }}
          >
            Contact Now.
          </Button>
        </Box>
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(${HeroImage2})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            padding: "7rem",
            alignItems: "center",
            justify: "center",
            width: "100%",
            height: "100%",
            minHeight: "100vh",
          }}
          spacing={4}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={12}>
              <DoctorCard />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={12}>
              <PatientCard />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={12}>
              <CovidCard />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(${HeroImage3})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactMapContainer />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

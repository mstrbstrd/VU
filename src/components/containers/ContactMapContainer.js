import React from "react";

import { Container } from "@mui/material";

import Contact from "../card/Contact";
import MapCard from "../card/MapCard";

export default function ContactMapContainer() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <Contact />
      <MapCard />
    </Container>
  );
}

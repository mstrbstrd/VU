import * as React from "react";
import Map from "../map/Map";
import Paper from "@mui/material/Paper";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { minWidth } from "@mui/system";

export default function ContactCard() {
  return (
    <Paper
      sx={{
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "500px",
      }}
    >
      {/* <ContactInfoCard></ContactInfoCard> */}
      <Map />
    </Paper>
  );
}

import * as React from "react";
import Map from "../map/Map";
import Paper from "@mui/material/Paper";

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

import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as Popcon } from "./popcon_icon_adobe_express.svg";

const Icon = (props) => {
  return (
    <SvgIcon {...props}>
      <Popcon />
    </SvgIcon>
  );
};

export default Icon;

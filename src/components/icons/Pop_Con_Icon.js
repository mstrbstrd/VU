import React from "react";
import { SvgIcon } from "@mui/material";
import { ReactComponent as LogoIcon } from "./pop_con_icon_adobe_express.svg";

const Icon = (props) => {
  return (
    <SvgIcon {...props}>
      <LogoIcon />
    </SvgIcon>
  );
};

export default Icon;

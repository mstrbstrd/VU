import React from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import PopconIcon from "../icons/popcon.js";

import { AppBar, Typography, styled, Toolbar, Box } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: "1rem",
  });
  const LogoBox = styled(Box)({
    display: "flex",
    gap: "1rem",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: "2.5rem",
  });

  return (
    <AppBar
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
      }}
      elevation={0}
      position={"static"}
    >
      <StyledToolbar>
        <SocialBox>
          <Facebook />
          <Instagram />
          <Twitter />
          <LinkedIn />
        </SocialBox>
        <LogoBox>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Montserrat",
              color: "white",
              fontSize: "1.75rem",
            }}
          >
            Vernon Urology
          </Typography>
        </LogoBox>
        <MenuBox sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography
            variant="p"
            sx={{
              cursor: "pointer",
              fontFamily: "Barlow Semi Condensed",
              color: "white",
            }}
          >
            Website created by <PopconIcon />
            popular-consulting
          </Typography>
        </MenuBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;

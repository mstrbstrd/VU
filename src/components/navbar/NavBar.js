import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Typography,
  styled,
  Toolbar,
  Box,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const LogoBox = styled(Box)({
    display: "flex",
    gap: "1rem",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: "2.5rem",
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: "0.5rem",
  });

  const MenuItems = [
    { Name: "About", Link: "/about" },
    { Name: "Contact", Link: "/contact" },
  ];

  const [open, setOpen] = React.useState(false);
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
          {MenuItems.map((item, index) => (
            <Typography
              variant="h6"
              key={index}
              sx={{
                cursor: "pointer",
                fontFamily: "Barlow Semi Condensed",
                color: "white",
              }}
            >
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <SearchBox>
          <InputBase placeholder="Search..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{ color: "white", display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-button"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item, index) => (
            <MenuItem key={index} sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default NavBar;

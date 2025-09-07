// Header.jsx
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import CampaignIcon from "@mui/icons-material/Campaign";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import GTranslateSharpIcon from "@mui/icons-material/GTranslateSharp";
import NotificationsActiveSharpIcon from "@mui/icons-material/NotificationsActiveSharp";
import TextField from "@mui/material/TextField";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import InputAdornment from "@mui/material/InputAdornment";
import MicSharpIcon from "@mui/icons-material/MicSharp";

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  // state for language menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    if (lang) {
      i18n.changeLanguage(lang); // 👈 change language
    }
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        color: "#333333",
        boxShadow: "none",
        "& *": {
          outline: "none !important",
        },
      }}
    >
      <Toolbar>
        <Box
          component="img"
          src=".\public\justdial-logo-png_seeklogo-324435.png"
          alt="Logo"
          sx={{ height: 30, mr: 2 }}
        />

        {/* Search Bar */}
        <Box sx={{ mx: 1, width: 300 }}>
          <TextField
            placeholder={t("search_placeholder")}
            size="small"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MicSharpIcon />
                  <SearchSharpIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#f1f1f1",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                height: 36,
                fontSize: "14px",
              },
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Language & Other Buttons */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
          {/* 🌍 Language Switcher */}
          <Button
            color="inherit"
            startIcon={<GTranslateSharpIcon />}
            onClick={handleClick}
          >
            {t("")}
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
            <MenuItem onClick={() => handleClose("en")}>English</MenuItem>
            <MenuItem onClick={() => handleClose("hi")}>Hindi</MenuItem>
            <MenuItem onClick={() => handleClose("mr")}>Marathi</MenuItem>
            <MenuItem onClick={() => handleClose("gu")}>Gujrati</MenuItem>
            <MenuItem onClick={() => handleClose("kn")}>Kannada</MenuItem>
            <MenuItem onClick={() => handleClose("ta")}>Tamil</MenuItem>
          </Menu>

          <Button color="inherit" sx={{ textTransform: "none" }}>
            {t("we_are_hiring")}
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            {t("investor_relations")}
          </Button>
          <Button
            color="inherit"
            startIcon={<ForwardToInboxIcon />}
            sx={{ textTransform: "none" }}
          >
            {t("leads")}
          </Button>
          <Button
            color="inherit"
            startIcon={<CampaignIcon />}
            sx={{ textTransform: "none" }}
          >
            {t("advertise")}
          </Button>
          <Button
            color="inherit"
            startIcon={<TrendingUpSharpIcon />}
            sx={{ textTransform: "none" }}
          >
            {t("free_listing")}
          </Button>
          <Button
            color="inherit"
            startIcon={<NotificationsActiveSharpIcon />}
            sx={{ textTransform: "none" }}
          ></Button>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ textTransform: "none" }}
          >
            {t("login")}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
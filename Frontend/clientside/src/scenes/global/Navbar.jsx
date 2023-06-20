import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationAddOutlined,
  Person2Outlined,
  SearchOutlined,
  FilterListOutlined,
  NotesRounded,
  KeyboardArrowDownRounded,
  ExploreOutlined,
} from "@mui/icons-material";
import styled from "@emotion/styled";
import SidebarLeft from "./Sidebar";


function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
    <SidebarLeft open={open}/>
    <Box display="flex" className="navBox" backgroundColor={colors.black[500]} justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" ml="10px" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                marginRight: 1,
                // ...(open && { display: "none" }),
              }}
              onClick={handleDrawerOpen}
              // state={open}
            >
              <NotesRounded sx={{height:"2rem", width:"2rem"}} />
            </IconButton>

        <img
          height="35px"
          width="35px"
          src="../../assets/logo.png"
          alt=""
          srcset=""
        />
        <Typography variant="h4" ml="7px" color={colors.white[100]}>
          CipherSchools
        </Typography>
        <Box display="flex" className="nav-link-left" gap="4px" alignItems="center">
          <ExploreOutlined/>
          <span variant="h5" color={colors.white[100]}>
            Browse
          </span>
          <KeyboardArrowDownRounded/>
        </Box>
      </Box>

      
      <Box className="nav-right">
        <Box
          display="flex"
          backgroundColor={colors.blackAccent[500]}
          borderRadius="2rem"
          zIndex={5}
          padding="0rem 1rem"
        >
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search and Learn" />
          <IconButton>
            <FilterListOutlined />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="space-between" gap='1rem'>
          <IconButton title="Notification">
            <NotificationAddOutlined />
          </IconButton>
          <IconButton title="Jitendra Bunkar" >
            <Person2Outlined />
          </IconButton>
          <div className="top-right" title="CipherPoint:00">
            <a href="" style={{paddingTop:'.4rem'}} > <img src="../../assets/WatchPoints.svg" alt="" srcset="" /> </a>
            <div className="clipherpoints">
              <span>0</span>
            </div>
          </div>
          <IconButton sx={{ mx: 1 }} title="Change Theme" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  </>
  );
}

export default Topbar;

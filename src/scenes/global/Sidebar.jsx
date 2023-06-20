import React, { useContext, useRef, useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
import {
  LocalLibraryRounded,
  ExploreRounded,
  HowToRegOutlined,
  ChevronRightOutlined,
  ChevronLeftOutlined,
  DashboardOutlined,
  FeedbackOutlined,
  LogoutOutlined,
  HomeRounded,
  TourRounded,
  DocumentScannerRounded,
} from "@mui/icons-material";
import styled from "@emotion/styled";
// import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

const DrawerHeader = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  opacity:0,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function SidebarLeft(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const {open}=props;
  // let toggleRef = useRef(null);
  // const {state}=props;
  // setOpen(state);
  

  return (
    <Box
    className="LeftSidebar"
      sx={{
        position: "fixed",
        // width: "240px",
        zIndex: "198",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          backgroundColor: colors.black[500],
          color: colors.white[100],
          "&::-webkit-scrollbar": {
            display: "none",}
          },
      }}
    >
      <Drawer  variant="permanent" open={open}>
        <Box sx={{ display: "inherit" }} >
          <DrawerHeader>
            <IconButton >
              {theme.direction === "rtl" ? (
                <ChevronRightOutlined />
              ) : (
                <ChevronLeftOutlined />
              )}
            </IconButton>
          </DrawerHeader>
        </Box>

        {/* <Divider /> */}
        {open && (
          <>
            <List  >
              {["Inbox", "Starred", "Send email", "Drafts", " ", " "," "," "," "," "].map(
                (text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block", color: "white" ,pr:"3rem" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 3,
                        borderRadius:".5rem .5rem",
                        '&:hover': {
                          backgroundColor: "rgb(212 132 50 / 20%) !important",
                        }
                        
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 1 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {index === 0 ? (
                          <>
                            <HomeRounded />
                            <Typography
                              variant="h5"
                              ml="1rem"
                              color={colors.white[100]}
                            >
                              Home
                            </Typography>
                          </>
                        ) : index === 1 ? (
                          <>
                            <LocalLibraryRounded />
                            <Typography
                              variant="h5"
                              ml="1rem"
                              color={colors.white[100]}
                            >
                              Courses
                            </Typography>
                          </>
                        ) : index === 2 ? (
                          <>
                            <ExploreRounded />
                            <Typography
                              variant="h5"
                              ml="1rem"
                              color={colors.white[100]}
                            >
                              Trending
                            </Typography>
                          </>
                        ) : index === 3 ? (
                          <>
                            <HowToRegOutlined />
                            <Typography
                              variant="h5"
                              ml="1rem"
                              color={colors.white[100]}
                            >
                              Following
                            </Typography>
                          </>
                        ) : index === 4 ? (
                          <>
                            <DashboardOutlined />
                            <Typography
                              variant="h5"
                              ml="1rem"
                              color={colors.white[100]}
                            >
                              Dashboard
                            </Typography>
                          </>
                        ) : index === 5 ? (
                          <>
                            <FeedbackOutlined />
                            <Typography
                              variant="h5"
                              ml="1rem"
                              color={colors.white[100]}
                            >
                             Send Feedback
                            </Typography>
                          </>
                        ): index===6 ? (
                          <>
                          <FeedbackOutlined />
                          <Typography
                            variant="h5"
                            ml="1rem"
                            color={colors.white[100]}
                          >
                            Discord
                          </Typography>
                        </>
                        ): index===7 ? (
                          <>
                          <DocumentScannerRounded />
                          <Typography
                            variant="h5"
                            ml="1rem"
                            color={colors.white[100]}
                          >
                            Resume Builder
                          </Typography>
                        </>
                        ): index===8 ? (
                          <>
                          <FeedbackOutlined />
                          <Typography
                            variant="h5"
                            ml="1rem"
                            color={colors.white[100]}
                          >
                            Creator Access
                          </Typography>
                        </>
                        ):(
                          <>
                          <TourRounded />
                          <Typography
                            variant="h5"
                            ml="1rem"
                            color={colors.white[100]}
                          >
                            User Tour
                          </Typography>
                        </>
                        )
                      }
                      </ListItemIcon>
                    </ListItemButton>
                    {/* <ListItemText  primary={text} 
            sx={{ opacity: open ? 1 : 0 ,color:"white"}} 
           /> */}
                  </ListItem>
                )
              )}
            </List>
            <Divider />

            <List>
              {["LogOut"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      borderRadius:".5rem .5rem",
                      '&:hover': {
                        backgroundColor: "rgb(212 132 50 / 20%) !important",
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        // mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <LogoutOutlined />
                      <Typography
                        variant="h5"
                        ml="1rem"
                        color={colors.white[100]}
                      >
                        LogOut
                      </Typography>
                    </ListItemIcon>
                    {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        )}

        {!open && (
          <>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts", " ", " "," "," "," "," "].map(
                (text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    sx={{ display: "block", color: "white" }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: .1,
                        '&:hover': {
                          backgroundColor: "rgb(212 132 50 / 20%) !important",
                        }
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          //  mr: open ? 1 : "auto",
                          justifyContent: "center",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          borderRadius: "50% !important",
                        }}
                      >
                        {index === 0 ? (
                          <>
                            <HomeRounded />
                            <Typography
                              variant="h7"
                              //  ml=".1rem"
                              color={colors.white[100]}
                            >
                              Home
                            </Typography>
                          </>
                        ) : index === 1 ? (
                          <>
                            <LocalLibraryRounded />
                            <Typography
                              variant="h7"
                              //  ml="1rem"
                              color={colors.white[100]}
                            >
                              Courses
                            </Typography>
                          </>
                        ) : index === 2 ? (
                          <>
                            <ExploreRounded />
                            <Typography
                              variant="h7"
                              //  ml="1rem"
                              color={colors.white[100]}
                            >
                              Trending
                            </Typography>
                          </>
                        ) : index === 3 ? (
                          <>
                            <HowToRegOutlined />
                            <Typography
                              variant="h7"
                              //  ml="1rem"
                              color={colors.white[100]}
                            >
                              Following
                            </Typography>
                          </>
                        ) : index === 4 ? (
                          <>
                            <DashboardOutlined />
                            <Typography
                              variant="h7"
                              //  ml="1rem"
                              color={colors.white[100]}
                            >
                              Dashboard
                            </Typography>
                          </>
                        ) :index===5 ? (
                          <>
                            <FeedbackOutlined />
                            <Typography
                              variant="h7"
                              //  ml="1rem"
                              color={colors.white[100]}
                            >
                              Feedback
                            </Typography>
                          </>
                        ):index===6 ?(
                          <>
                          <FeedbackOutlined />
                          <Typography
                            variant="h7"
                            // ml="1rem"
                            color={colors.white[100]}
                          >
                            Discord
                          </Typography>
                        </>
                        ):index===7 ? (
                          <>
                          <DocumentScannerRounded />
                          <Typography
                            variant="h7"
                            // ml="1rem"
                            color={colors.white[100]}
                          >
                            Resume 
                          </Typography>
                        </>
                        ): index===8 ? (
                          <>
                          <FeedbackOutlined />
                          <Typography
                            variant="h7"
                            // ml="1rem"
                            color={colors.white[100]}
                          >
                            Creator 
                          </Typography>
                          <Typography
                            variant="h7"
                            // ml="1rem"
                            color={colors.white[100]}
                          >
                            Access
                          </Typography>
                        </>
                        ):(
                          <>
                          <TourRounded />
                          <Typography
                            variant="h7"
                            // ml="1rem"
                            color={colors.white[100]}
                          >
                            Tour
                          </Typography>
                        </>
                        )
                      }
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />

            <List>
              {["LogOut"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      '&:hover': {
                        backgroundColor: "rgb(212 132 50 / 20%) !important",
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        // mr: open ? 3 : "auto",
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <LogoutOutlined />
                      <Typography
                        variant="h7"
                        // ml="1rem"
                        color={colors.white[100]}
                      >
                        LogOut
                      </Typography>
                    </ListItemIcon>
                    {/* <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} /> */}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Drawer>
    </Box>
  );
}

export default SidebarLeft;

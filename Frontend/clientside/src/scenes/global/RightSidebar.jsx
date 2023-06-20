import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
  DashboardRounded,
  InterestsRounded,
  LocalLibraryRounded,
  Person2Rounded,
  ThumbUpAltRounded,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Box, Button, IconButton, Typography } from "@mui/material";

export const RightSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapsed, setCollapsed ] = useState(false);
  // const { collapsed, setCollapsed } = useProSidebar();

  return (
    <>
      <span className="rightSidebar">
        {!collapsed && (
          <>
            <Box
              className="rside"
              sx={{ backgroundColor: `${colors.black[500]}`, width: "230px" }}
            >
              <Sidebar
                rootStyles={{
                  [`.${sidebarClasses.container}`]: {
                    backgroundColor: `${colors.black[500]}`,
                  },
                }}
              >
                <main className="collapseBtn">
                  <Button
                    onClick={() => {
                      setCollapsed(!collapsed);
                    }}
                    sx={{
                      backgroundColor: `${colors.black[500]} !important`,
                      padding: "0 !important",
                      minWidth: "2px !important",
                      marginLeft: "-38.5px !important",
                      borderLeft: "1px solid hsl(0deg 0% 100% / 10%)",
                      borderRadius: "5px 0px 0px 5px",
                      borderBottom: "1px solid hsl(0deg 0% 100% / 10%)",
                      height: "40px !important",
                    }}
                  >
                    <IconButton>
                      <ArrowForwardIosOutlined />
                    </IconButton>
                  </Button>
                </main>
                <Menu
                  menuItemStyles={{
                    button: ({ level, active, }) => {
                      // only apply styles on first level elements of the tree
                      if (level === 0)
                        return {
                          backgroundColor: active
                            ? "#f3912e !important"
                            : undefined,
                            "&:hover": {
                              backgroundColor: "rgb(212 132 50 / 20%) !important",
                            }, 
                        };
                    },
                  }}

                      
                    

                >
                  <MenuItem>
                    {" "}
                    <DashboardRounded /> Dashboard
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <Person2Rounded /> My Profile
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <LocalLibraryRounded /> Enrolled Courses
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <InterestsRounded /> Wishlist
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <ThumbUpAltRounded /> Liked Videos
                  </MenuItem>
                </Menu>
              </Sidebar>
            </Box>
          </>
        )}
        {collapsed && (
          <>
            <Box
              className="rside"
              sx={{ backgroundColor: `${colors.black[500]}`, width: "80px" }}
            >
              <Sidebar
                rootStyles={{
                  [`.${sidebarClasses.container}`]: {
                    backgroundColor: `${colors.black[500]}`,
                  },
                }}
              >
                <main className="collapseBtn">
                  <Button
                    onClick={() => {
                      setCollapsed(!collapsed);
                    }}
                    sx={{
                      backgroundColor: `${colors.black[500]} !important`,
                      padding: "0 !important",
                      minWidth: "2px !important",
                      marginLeft: "-38.5px !important",
                      borderLeft: "1px solid hsl(0deg 0% 100% / 10%)",
                      borderRadius: "5px 0px 0px 5px",
                      borderBottom: "1px solid hsl(0deg 0% 100% / 10%)",
                      height: "40px !important",
                    }}
                  >
                    <IconButton>
                      <ArrowBackIosNewOutlined />
                    </IconButton>
                  </Button>
                </main>
                <Menu
                  sx={{}}
                  menuItemStyles={{
                    button: ({ level, active }) => {
                      // only apply styles on first level elements of the tree
                      if (level === 0)
                        return {
                          backgroundColor: active
                            ? "#f3912e !important"
                            : undefined,
                            "&:hover": {
                              backgroundColor: "rgb(212 132 50 / 20%) !important",
                            }, 
                        };
                    },
                  }}
                >
                  <MenuItem>
                    <Box
                      sx={{
                        //  mr: open ? 1 : "auto",
                        justifyContent: "center",
                        mr: "1",
                        display: "flex",
                        // alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <DashboardRounded />
                      <Typography
                        variant="h7"
                        //  ml=".1rem"
                        color={colors.white[100]}
                      >
                        Dashboard
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <Box
                      sx={{
                        //  mr: open ? 1 : "auto",
                        justifyContent: "center",
                        mr: "1",
                        display: "flex",
                        //alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Person2Rounded />
                      <Typography
                        variant="h7"
                        //  ml=".1rem"
                        color={colors.white[100]}
                      >
                        Profile
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <Box
                      sx={{
                        //  mr: open ? 1 : "auto",
                        justifyContent: "center",
                        mr: "1",
                        display: "flex",
                        //alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <LocalLibraryRounded />
                      <Typography
                        variant="h7"
                        //  ml=".1rem"
                        color={colors.white[100]}
                      >
                       Courses
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <Box
                      sx={{
                        //  mr: open ? 1 : "auto",
                        justifyContent: "center",
                        mr: "1",
                        display: "flex",
                        //alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <InterestsRounded />
                      <Typography
                        variant="h7"
                        //  ml=".1rem"
                        color={colors.white[100]}
                      >
                        Wishlist
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem>
                    <Box
                      sx={{
                        //  mr: open ? 1 : "auto",
                        justifyContent: "center",
                        ml: "1",
                        paddingRight: "1",
                        display: "flex",
                        //alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <ThumbUpAltRounded  />
                      <Typography
                        variant="h7"
                        //  ml=".1rem"
                        color={colors.white[100]}
                      >
                        Liked Videos
                      </Typography>
                    </Box>
                  </MenuItem>
                </Menu>
              </Sidebar>
            </Box>
          </>
        )}
      </span>
    </>
  );
};

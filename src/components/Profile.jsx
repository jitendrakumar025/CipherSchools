import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import {  AccountCircleRounded, Edit} from "@mui/icons-material";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import MultipleSelectPlaceholder from "../materialcomponents/Selecter";
import PasswordForm from "./PasswordForm";
import Popup from "../models/PopupModel";
import { ProfileForm } from "./ProfileForm";
import { InterestForm } from "./InterestForm";
import SidebarLeft from "../scenes/global/Sidebar";
import { RightSidebar } from "../scenes/global/RightSidebar";

export const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const names1 = [
    "Primary",
    "Secondary",
    "Higher Secondary",
    "Graduation",
    "Post Graduation",
  ];
  const names2 = [
    "Schooling",
    "College Student",
    "Teaching",
    "Job",
    "Freelancing",
  ];
  const interstList = [
    "Web Development",
    "App Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Cyber Security",
    "Data Science",
    "Cloud Computing",
    "Other",
  ];

  const [openPopup, setOpenPopup] = useState(false);
  const [openPopup1, setOpenPopup1] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
 

  return (
    <>
      <main className="basicInfo" paddingTop="60px">
        <Box className="content_top"></Box>
        <Box className="profile">
          <Box className="userbox">
            <SidebarLeft />
            <div style={{ backgroundColor: `${colors.blackAccent[600]}` }}>
              <div className="prBox">
                <Box
                  className="prcontent"
                  sx={{
                    background: `linear-gradient(to right,${colors.black[500]},transparent,${colors.black[500]}) !important`,
                  }}
                >
                  <Box display="flex" flexDirection="column">
                    <IconButton>
                      <AccountCircleRounded
                        sx={{ height: "80px", width: "80px" }}
                      />
                    </IconButton>
                    <IconButton
                      id="pro1"
                      onClick={() => {
                        setOpenPopup(true);
                        setRecordForEdit(null);
                      }}
                      // sx={{backgroundColor: `${colors.black[500]}`}}
                    >
                      <Edit className="editpr" sx={{backgroundColor: `${colors.black[500]}`}}  />
                    </IconButton>
                  </Box>
                  <Box className="detailsBox">
                    <Box className="details-right">
                      <Typography variant="h5" color={colors.white[100]}>
                        Hello,
                      </Typography>
                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        color={colors.white[100]}
                      >
                        Jitendra Bunkar
                      </Typography>
                      <Typography variant="h6" color={colors.white[100]}>
                        jitendra.bunkar@iitkgp.kgpian.ac.in
                      </Typography>
                    </Box>
                    <Box className="details-left">
                      <div className="text_prop">
                        <span>10</span>
                        <Typography
                          variant="h6"
                          fontWeight="600"
                          mx="0.5rem"
                          color={colors.white[100]}
                        >
                          Followers
                        </Typography>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </div>
            </div>
          </Box>
          <Box className="Dashboard">
            <Box className="dashcontent">
              <Box
                className="dashbox"
                backgroundColor={colors.blackAccent[500]}
              >
                <Box className="about">
                  <Box className="about_top">
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color={colors.white[100]}
                    >
                      ABOUT ME
                    </Typography>
                    <Button className="editBtn">Edit</Button>
                  </Box>
                  <Box className="about_text">
                    <textarea
                      className="about_textarea"
                      style={{ backgroundColor: colors.black[500] }}
                      cols="112"
                      rows="4"
                      placeholder="Something about you"
                    ></textarea>
                  </Box>
                </Box>
                <Box className="underline"></Box>
                <Box className="mapbox">
                  <Box className="map_top">
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color={colors.white[100]}
                    >
                      CLIPHER MAP
                    </Typography>
                  </Box>
                  <Box className="map_calendar">
                    <CalendarHeatmap
                      startDate={new Date("2022-04-1")}
                      endDate={new Date("2023-04-02")}
                      values={[
                        { date: "2021-01-01", count: 1 },
                        { date: "2021-01-22", count: 23 },
                        { date: "2021-03-28", count: 30 },
                        { date: "2021-01-04", count: 40 },
                      ]}
                      weekdayLabels={["Mon", "Wed", "Fri"]}
                      showWeekdayLabels={true}
                      sx={{
                        "& .react-calendar-heatmap .color-empty": {
                          fill: `${colors.black[500]}`,
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Box className="underline"></Box>
                <Box className="weblinks">
                  <Box className="weblinks_top">
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color={colors.white[100]}
                    >
                      ON THE WEB
                    </Typography>
                    <Button className="editBtn">Edit</Button>
                  </Box>
                  <Box className="linkbox">
                    <Grid container spacing={2} margin=".1rem" columns={12}>
                      <Grid xs={6}>
                        <Box className="b-links">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            color={colors.white[100]}
                          >
                            LinkedIn
                          </Typography>
                          <Box
                            className="b-input"
                            backgroundColor={colors.black[500]}
                          >
                            <span>
                              <img
                                src="../../assets/LinkedIn.svg"
                                alt=""
                                srcset=""
                              />
                            </span>
                            <Input
                              className="link-text"
                              placeholder="LinkedIn"
                            ></Input>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={6}>
                        <Box className="b-links">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            color={colors.white[100]}
                          >
                            Github
                          </Typography>
                          <Box
                            className="b-input"
                            backgroundColor={colors.black[500]}
                          >
                            <span>
                              <img
                                src="../../assets/Github.svg"
                                alt=""
                                srcset=""
                              />
                            </span>
                            <Input
                              className="link-text"
                              placeholder="Github"
                            ></Input>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={6}>
                        <Box className="b-links">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            color={colors.white[100]}
                          >
                            Facebook
                          </Typography>
                          <Box
                            className="b-input"
                            backgroundColor={colors.black[500]}
                          >
                            <span>
                              <img
                                src="../../assets/Facebook.svg"
                                alt=""
                                srcset=""
                              />
                            </span>
                            <Input
                              className="link-text"
                              placeholder="Facebook"
                            ></Input>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={6}>
                        <Box className="b-links">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            color={colors.white[100]}
                          >
                            Twitter
                          </Typography>
                          <Box
                            className="b-input"
                            backgroundColor={colors.black[500]}
                          >
                            <span>
                              <img
                                src="../../assets/Twitter.svg"
                                alt=""
                                srcset=""
                              />
                            </span>
                            <Input
                              className="link-text"
                              placeholder="Twitter"
                            ></Input>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={6}>
                        <Box className="b-links">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            color={colors.white[100]}
                          >
                            Instagram
                          </Typography>
                          <Box
                            className="b-input"
                            backgroundColor={colors.black[500]}
                          >
                            <span>
                              <img
                                src="../../assets/Instagram.svg"
                                alt=""
                                srcset=""
                              />
                            </span>
                            <Input
                              className="link-text"
                              placeholder="Instagram"
                            ></Input>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={6}>
                        <Box className="b-links">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            color={colors.white[100]}
                          >
                            Website
                          </Typography>
                          <Box
                            className="b-input"
                            backgroundColor={colors.black[500]}
                          >
                            <span>
                              <img
                                src="../../assets/Website.svg"
                                alt=""
                                srcset=""
                              />
                            </span>
                            <Input
                              className="link-text"
                              placeholder="Website"
                            ></Input>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box className="underline"></Box>
                <Box className="professionbox">
                  <Box className="professionbox_top">
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color={colors.white[100]}
                    >
                      PROFESSIONAL INFORMATION
                    </Typography>
                    <Button className="editBtn">Edit</Button>
                  </Box>
                  <Box className="">
                    <Grid container spacing={2} margin=".1rem" columns={12}>
                      <Grid xs={6}>
                        <Box className="selectBox">
                          <Typography variant="h7" color={colors.white[100]}>
                            Highest Education
                          </Typography>
                          <div style={{ marginRight: "3rem" }}>
                            <MultipleSelectPlaceholder names={names1} />
                          </div>
                        </Box>
                      </Grid>
                      <Grid xs={6}>
                        <Box className="selectBox">
                          <Typography variant="h7" color={colors.white[100]}>
                            What do you do currently?
                          </Typography>
                          <div style={{ marginRight: "2rem" }}>
                            <MultipleSelectPlaceholder names={names2} />
                          </div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box className="underline"></Box>
                <Box className="Passbox">
                  <Box className="Passbox_top">
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color={colors.white[100]}
                    >
                      PASSWORD & SECURITY
                    </Typography>
                    <Button
                      className="editBtn"
                      onClick={() => {
                        setOpenPopup1(true);
                        setRecordForEdit(null);
                      }}
                    >
                      Change
                    </Button>
                  </Box>
                  <Box className="b-links">
                    <Typography
                      variant="h7"
                      // fontWeight="600"
                      color={colors.white[100]}
                    >
                      Password
                    </Typography>
                    <Box
                      className="b-input"
                      backgroundColor={colors.black[500]}
                    >
                      <Input
                        className="link-text"
                        placeholder="*************"
                      ></Input>
                    </Box>
                  </Box>
                </Box>
                <Box className="underline"></Box>
                <Box className="interestbox">
                  <Box className="interestbox_top">
                    <Typography
                      variant="h6"
                      fontWeight="600"
                      color={colors.white[100]}
                    >
                      INTERESTS
                    </Typography>
                    <Button
                      className="editBtn"
                      onClick={() => {
                        setOpenPopup2(true);
                        setRecordForEdit(null);
                      }}
                    >
                      Edit
                    </Button>
                  </Box>
                  <Box className="interestlist">
                    {interstList.map((item) => {
                      return (
                        <Box className="interestBox_item">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            // color={colors.white[100]}
                          >
                            {item}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
            <RightSidebar />
          </Box>
        </Box>
      </main>
      <Popup
        title="Profile Update"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ProfileForm />
      </Popup>
      <Popup
        title="Change Password"
        openPopup={openPopup1}
        setOpenPopup={setOpenPopup1}
      >
        <PasswordForm />
      </Popup>
      <Popup
        title="Select Interests"
        openPopup={openPopup2}
        setOpenPopup={setOpenPopup2}
      >
        <InterestForm />
      </Popup>
      ;
    </>
  );
};

import { useTheme } from "@emotion/react";
import {
  AccountCircleOutlined,
  Edit,
  
} from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import React from "react";
import { tokens } from "../theme";

export const ProfileForm = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" alignItems="center" sx={{width:"34rem",gap:"1rem"
    }}>
      <Box display="flex" flexDirection="column">
        <IconButton>
          <AccountCircleOutlined sx={{ height: "100px", width: "100px" }} />
        </IconButton>
        <IconButton>
          <Edit className="editpr" />
        </IconButton>
      </Box>
      <Box>
        <FormControl defaultValue="" sx={{ width: "200%" }} required>
          <Box mb="1rem">
            <Typography variant="h5">First Name</Typography>
            <Box display="flex" justifyContent="space-between" backgroundColor={colors.grey[900]}>
              <Input placeholder="Your First Name" sx={{ width: "100%" }} />
            </Box>
          </Box>
          <Box mb="1rem">
            <Typography variant="h5"> Last Name</Typography>
            <Box display="flex" justifyContent="space-between" backgroundColor={colors.grey[900]}>
              <Input sx={{ width: "100%" }} />
            </Box>
          </Box>
          <Box mb="1rem">
            <Typography variant="h5">Email Address</Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              backgroundColor={colors.grey[900]}
            >
              <Input sx={{ width: "100%" }} />
            </Box>
          </Box>
          <Box mb="1rem">
            <Typography variant="h5">Mobile Number</Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              backgroundColor={colors.grey[900]}
            >
              <Input sx={{ width: "100%" }} />
            </Box>
          </Box>

          <FormHelperText />
        </FormControl>
      </Box>
    </Box>
  );
};

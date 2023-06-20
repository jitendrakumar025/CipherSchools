import { VisibilityRounded } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  Typography,
} from "@mui/material";
import React from "react";

const PasswordForm = () => {
  return (
    <FormControl defaultValue="" sx={{width:'300px'}} required>
      <Box mb="1rem">
        <Typography variant="h5" >Current Password</Typography>
        <Box display="flex" justifyContent="space-between">
          <Input placeholder="**********" sx={{width:"100%"}} />
          <VisibilityRounded />
        </Box>
      </Box>
      <Box mb="1rem">
        <Typography variant="h5">New Password</Typography>

        <Box display="flex" justifyContent="space-between">
          <Input sx={{width:"100%"}} />
          <VisibilityRounded />
        </Box>
      </Box>
      <Box mb="1rem">
        <Typography variant="h5">Confirm Password</Typography>
        <Box display="flex" justifyContent="space-between" sx={{margin:"0 !importent"}} >
          <Input  sx={{width:"100%"}}/>
          <VisibilityRounded />
        </Box>
      </Box>
      
      <FormHelperText />
    </FormControl>
  );
};

export default PasswordForm;

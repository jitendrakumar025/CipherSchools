import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const InterestForm = () => {
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
  return (
    <Box width="34rem" paddingLeft='5rem'>
    <Grid container spacing={1} margin=".1rem" columns={6}>
    <Box className="interestlist" >     
    {interstList.map((item) => {
                      return (
                        <Grid xs={2}>
                        <Box className="interestBox_item">
                          <Typography
                            variant="h7"
                            // fontWeight="600"
                            // color={colors.grey[100]}
                          >
                            {item}
                          </Typography>
                        </Box>
                        </Grid>
          );
        })}
        </Box>
   </Grid>
    </Box>
  )
}

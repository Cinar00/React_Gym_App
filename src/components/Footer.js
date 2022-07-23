import React from 'react';
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fcebec">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px"> 
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography variant="h6" pb="40px" mt="10px">
          Made with ❤️ by Cinar  	
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer
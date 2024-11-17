import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* Replacing the image with the "Fit&Flex" title */}
      <Typography variant="h4" sx={{ fontSize: { lg: '32px', xs: '24px' } }} fontWeight="bold">
        Fit&Flex
      </Typography>
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      All In One ❤️ Fitness Application
    </Typography>
  </Box>
);
export default Footer;

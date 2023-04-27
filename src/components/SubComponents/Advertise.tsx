import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

export const Advertise = () => {
   //
   const w1024 = useMediaQuery('(min-width:1024px)');

   return (
      <Stack
         direction="row"
         justifyContent="center"
         sx={{ background: '#004a90' }}
         display={w1024 ? 'none' : 'flex'}
      >
         <img
            width="350px"
            src="https://branchimg.sedaily.com/Decenter/Banner/decenter_plus_mobile_9.jpg"
            alt=""
         />
      </Stack>
   );
};

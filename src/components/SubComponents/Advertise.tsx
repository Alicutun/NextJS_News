import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import React from 'react';

export const Advertise = () => {
  //
  const w1024 = useMediaQuery('(min-width:1024px)');

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ background: '#004a90', position: 'relative' }}
      display={w1024 ? 'none' : 'flex'}
      width="100%"
      height="70px"
    >
      <Image
        fill
        style={{ objectFit: 'contain' }}
        src="https://branchimg.sedaily.com/Decenter/Banner/decenter_plus_mobile_9.jpg"
        alt=""
      />
    </Stack>
  );
};

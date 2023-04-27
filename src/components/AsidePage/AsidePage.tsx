import { Box, useMediaQuery } from '@mui/material';
import { BoxNews } from './BoxNews';
import { BoxLive } from './BoxLive';
import React from 'react';

export const AsidePage = () => {
  //
  const w1024 = useMediaQuery('(min-width:1024px)');

  return (
    <aside>
      {/* Image */}
      <Box display={w1024 ? '' : 'none'}>
        <img
          width="100%"
          src="https://tpc.googlesyndication.com/simgad/6687191721012509281"
          alt=""
        />
      </Box>

      {/* Box */}
      <BoxNews />

      {/* Box live */}
      <BoxLive />
    </aside>
  );
};

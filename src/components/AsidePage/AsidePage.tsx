import { Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { BoxLive } from './BoxLive';
import { BoxNews } from './BoxNews';

export const AsidePage = () => {
  const w1024 = useMediaQuery('(min-width:1024px)');

  return (
    <aside>
      <Box
        display={w1024 ? '' : 'none'}
        sx={{
          width: '100%',
          aspectRatio: '1/1',
          position: 'relative',
        }}
      >
        <Image
          fill
          src="https://tpc.googlesyndication.com/simgad/6687191721012509281"
          alt="image 1"
        />
      </Box>
      <BoxNews />
      <BoxLive />
    </aside>
  );
};

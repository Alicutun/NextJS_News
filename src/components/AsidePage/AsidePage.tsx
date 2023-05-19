import { useMediaQuery } from '@mui/material';
import { CustomImage } from '../SubComponents';
import { BoxLive } from './BoxLive';
import { BoxNews } from './BoxNews';

export const AsidePage = () => {
  const w1024 = useMediaQuery('(min-width:1024px)');

  return (
    <aside>
      <CustomImage
        sx={{
          width: '100%',
          aspectRatio: '1/1',
          display: w1024 ? '' : 'none',
        }}
        src="https://tpc.googlesyndication.com/simgad/6687191721012509281"
        altImage="image 1"
      />
      <BoxNews />
      <BoxLive />
    </aside>
  );
};

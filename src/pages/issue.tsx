import { Advertise, AsidePage, TopStory } from '@/components';
import { useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const Issue: React.FC = () => {
  const w1024 = useMediaQuery('(min-width:1024px)');
  return (
    <Container disableGutters>
      {/* header_topstory */}
      <TopStory />
      {/* ad */}
      <Advertise />
      {/* Content */}
      <Grid container columnSpacing={5} mt={w1024 ? '30px' : '20px'}>
        <Grid item xs={w1024 ? 9 : 12}>
          <Typography>Page issue</Typography>
        </Grid>
        <Grid item xs={w1024 ? 3 : 12}>
          <AsidePage />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Issue;

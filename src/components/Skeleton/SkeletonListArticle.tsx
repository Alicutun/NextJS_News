import { Skeleton, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  border: {
    border: '1px solid #e6e8eb',
  },
  borderTop: {
    borderTop: '1px solid #e6e8eb',
  },
  box1: {
    border: 'solid 1px #ced2d7',
    background: '#f7f7f7',
  },
}));

export const SkeletonListArticle = () => {
  const { classes } = useStyles();
  const w1220 = useMediaQuery('(min-width:1220px)');
  const w640 = useMediaQuery('(min-width:640px)');

  return (
    <Box marginLeft={w1220 ? '' : '10px'}>
      {Array.from(Array(3)).map((_, index) => (
        <Grid
          sx={{
            cursor: 'pointer',
          }}
          container
          className={classes.borderTop}
          padding="20px 0"
          key={index}
        >
          <Grid item xs={2}>
            <Stack alignItems="center" className={classes.box1}>
              <Skeleton width="80%" height={w640 ? '75px' : '50px'} />
            </Stack>
          </Grid>
          <Grid item xs={10}>
            <Box marginLeft="10px">
              <Skeleton width="40%" />
              <Skeleton width="30%" />
              <Skeleton sx={{ marginTop: '5px' }} />
              <Skeleton width="95%" />
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

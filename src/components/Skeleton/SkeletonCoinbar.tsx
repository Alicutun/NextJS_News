import { Box, Container, Link, Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  backgroundf2f2f2: {
    background: '#f2f2f2',
  },
  itemCoinbar: {
    borderLeft: '1px solid #ddd',
  },
  iconDown: {
    top: '-5px',
    fontSize: '30px',
    color: 'blue',
  },

  boxSearchFixed: {
    background: 'white',
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    zIndex: '10',
  },
  boxMenu: {
    borderTop: '1px solid #e6e6e6',
    borderBottom: '1px solid #888',
    background: 'white',
  },
  boxMenuFixed: {
    borderTop: '1px solid #e6e6e6',
    borderBottom: '1px solid #888',
    background: 'white',
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    zIndex: '10',
  },
  boxMenuBackground: {
    background: '#28417a',
  },
  subMenuMid: {
    textDecoration: 'none',
    color: '#1e181a',
  },
  subMenuMidRes: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
  backgroundAD: {
    background: '#004a90',
  },
  imgLogo: {
    cursor: 'pointer',
  },
}));

export const SkeletonCoinbar = () => {
  //
  const { classes } = useStyles();
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w500 = useMediaQuery('(min-width:500px)');

  return (
    <Box className={classes.backgroundf2f2f2}>
      <Container disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={w1024 ? 11 : w500 ? 10 : 10} container>
            {Array.from(Array(w1024 ? 4 : w500 ? 3 : 1)).map((_, index) => (
              <Grid
                item
                container
                direction="row"
                xs={w1024 ? 3 : w500 ? 4 : 12}
                padding="10px 0"
                className={classes.itemCoinbar}
                justifyContent="space-between"
                alignItems="center"
                key={index}
              >
                <Grid item xs={3}>
                  <Typography fontSize={20} paddingLeft="20px">
                    <Skeleton />
                  </Typography>
                </Grid>
                <Grid item xs={9} container alignItems="center" justifyContent="flex-end">
                  <Typography width="100%" fontSize={20} padding="0 7px">
                    <Skeleton />
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={w1024 ? 1 : w500 ? 2 : 2}
            className={classes.itemCoinbar}
            justifyContent="center"
            alignItems="center"
            container
          >
            <Link href="https://www.bithumb.com">
              <Box sx={{ height: '12px', width: '54px', position: 'relative' }}>
                <Image
                  fill
                  style={{ objectFit: 'contain' }}
                  src="https://branchimg.sedaily.com/Decenter/bittumb_pc.png"
                  alt=""
                />
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

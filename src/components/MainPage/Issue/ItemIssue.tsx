import AddIcon from '@mui/icons-material/Add';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

export const ItemIssue: React.FC<{
  nameBox: string;
  colorBackground: string;
  listLink?: string;
}> = ({ nameBox, colorBackground, listLink }) => {
  const w1024 = useMediaQuery('(min-width:1024px)');

  return (
    <Box sx={{ background: `${colorBackground}` }} mb={2}>
      <Grid container height={75} padding="0 20px" border="1px solid rgba(0,0,0,0.1)">
        <Grid item xs={6} container direction="row" alignItems="center" gap={2}>
          <Typography
            fontSize={15}
            border="1px solid rgba(225,225,225,0.5)"
            p="5px"
            borderRadius="20px"
            color="#fff"
          >
            &nbsp;issue&nbsp;
          </Typography>
          <Typography color="#fff" fontSize={w1024 ? 24 : 18} sx={{ cursor: 'pointer' }}>
            {nameBox}
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end" alignItems="center">
          <Typography color="#fff" pr={1}>
            +{listLink ? listLink?.length - 3 : 'NaN'}
          </Typography>
          <AddIcon
            fontSize="large"
            sx={{
              color: '#ffffff69',
              cursor: 'pointer',
              '&:hover': {
                color: '#fff',
              },
            }}
          />
        </Grid>
      </Grid>
      <Stack padding="20px">
        <Stack direction="row" spacing={1} color="#fff">
          <ShortcutIcon />
          <Typography
            fontSize={15}
            noWrap
            sx={{
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            [Dcenter NFT Seminar] “The core of utility NFT is community interaction”
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} color="#fff">
          <ShortcutIcon />
          <Typography
            fontSize={15}
            noWrap
            sx={{
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            [Dcenter NFT Seminar] “The core of utility NFT is community interaction”
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} color="#fff">
          <ShortcutIcon />
          <Typography
            fontSize={15}
            noWrap
            sx={{
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            [Dcenter NFT Seminar] “The core of utility NFT is community interaction”
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

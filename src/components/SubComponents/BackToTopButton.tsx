import React, { useEffect, useState } from 'react';
import NorthIcon from '@mui/icons-material/North';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

export const BackToTopButton = () => {
  const w1024 = useMediaQuery('(min-width:1024px)');

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {w1024
        ? backToTop && (
            <Grid
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              container
              alignContent="center"
              justifyContent="center"
              sx={{
                width: '52px',
                height: '52px',
                background: 'white',
                borderRadius: '50%',
                position: 'fixed',
                right: '100px',
                bottom: '200px',
                border: '1px solid gray',
                cursor: 'pointer',
              }}
            >
              <NorthIcon />
            </Grid>
          )
        : null}
    </>
  );
};

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const useStyles = makeStyles()(() => ({
   boxSearch: {
      height: '60px',
   },
   boxSearchFixed: {
      borderBottom: '1px solid #ced2d7',

      background: 'white',
      position: 'fixed',
      top: '0',
      right: '0',
      left: '0',
      zIndex: '10',
   },
   imgLogo: {
      cursor: 'pointer',
   },
}));

export const Search = () => {
   //
   const router = useRouter();

   const { classes } = useStyles();
   const [fixedSearch, setFixedSearch] = useState<boolean>(false);
   const w1220 = useMediaQuery('(min-width:1220px)');
   const w1024 = useMediaQuery('(min-width:1024px)');

   // handle Scroll
   React.useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 50) {
            setFixedSearch(true);
         } else {
            setFixedSearch(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   });

   // img -> home
   function routePage() {
      router.push('/');
   }

   return (
      <Container
         disableGutters
         className={w1024 ? '' : fixedSearch ? classes.boxSearchFixed : classes.boxSearch}
      >
         <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            height={w1024 ? '' : 60}
         >
            {/* Search left */}
            <Stack direction="row" paddingTop="5px" columnGap={1.5} width={150}>
               <MenuIcon
                  sx={{
                     fontSize: '35px',
                     display: w1024 ? 'none' : '',
                     marginLeft: '30px',
                  }}
               />
               <Box marginTop="4px" display={w1024 ? '' : 'none'} paddingLeft={w1220 ? '' : '20px'}>
                  <img
                     src="https://branchimg.sedaily.com/Decenter/top_verbal.jpg"
                     alt="블록체인의 모든 것, 디센터"
                  />
               </Box>
            </Stack>

            {/* Search mid */}
            <img
               className={classes.imgLogo}
               height={w1024 ? '' : 27}
               src={
                  w1024
                     ? 'https://branchimg.sedaily.com/Decenter/logo2.png'
                     : 'https://branchimg.sedaily.com/Decenter/decenter_m_logo.svg'
               }
               alt="Decenter"
               onClick={routePage}
            />

            {/* Search right */}
            <Stack
               direction="row"
               padding="5px 30px 0 0"
               justifyContent="flex-end"
               columnGap={1.5}
               width={150}
            >
               <SearchIcon sx={{ fontSize: '35px', display: w1024 ? 'none' : '' }} />
            </Stack>
         </Stack>
      </Container>
   );
};

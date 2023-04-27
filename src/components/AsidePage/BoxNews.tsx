import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import axios from 'axios';
import { BASE_URL } from '@/common';
import { useRouter } from 'next/router';

const useStyles = makeStyles()(() => ({
   box: {
      marginTop: '10px',
      border: '1px solid #ced2d7',
      height: '336px',
      overflow: 'hidden',
   },
   boxRes: {
      borderTop: '9px solid #ced2d7',
      height: '268px',
      overflow: 'hidden',
   },
   nameBox: {
      lineHeight: '45px',
      height: '40px',
      borderBottom: '1px solid #ced2d7',
      paddingLeft: '20px',
      fontWeight: 'bold',
   },
   nameBoxRes: {
      lineHeight: '45px',
      height: '40px',
      paddingLeft: '20px',
      fontWeight: 'bold',
   },
   itemBox: {
      borderBottom: '1px solid #ced2d7',
   },

   itemBoxRes: {
      borderTop: '1px solid #eceeef',
   },

   boxImg: {
      background: '#f7f7f7',
      border: '1px solid #ced2d7',
   },
}));

export const BoxNews: React.FC<{}> = () => {
   const router = useRouter();
   //
   const { classes } = useStyles();
   const w1024 = useMediaQuery('(min-width:1024px)');
   const w480 = useMediaQuery('(min-width:480px)');

   const [listData, setListData] = useState<any[]>([]);

   // call get top10 news
   const fetchListTop10Article = async () => {
      const { data } = await axios.get(
         `${BASE_URL}/articles?filter=${encodeURIComponent(
            JSON.stringify({
               order: 'clickCount DESC',
               limit: 10,
            })
         )}`
      );
      setListData(data.data);
   };

   useEffect(() => {
      fetchListTop10Article();
      return () => {};
   }, []);

   return (
      <Box className={w1024 ? classes.box : classes.boxRes}>
         <Typography fontSize={16} className={w1024 ? classes.nameBox : classes.nameBoxRes}>
            Best click
         </Typography>
         <Grid container>
            {listData?.slice(0, w1024 ? 5 : w480 ? 10 : 5).map((item, index) => (
               <Grid
                  sx={{
                     cursor: 'pointer',
                  }}
                  item
                  xs={w1024 ? 12 : w480 ? 6 : 12}
                  key={index}
                  onClick={() => {
                     router.push({
                        pathname: '/news/[name]',
                        query: { name: item.id },
                     });
                  }}
               >
                  <Stack
                     alignItems="center"
                     justifyContent={w1024 ? 'space-between' : ''}
                     direction="row"
                     columnGap={1}
                     padding={w1024 ? '10px 0' : '10px 0 10px 10px'}
                     margin="0 10px"
                     className={
                        w1024 ? (Number(index) === 4 ? '' : classes.itemBox) : classes.itemBoxRes
                     }
                  >
                     {/* css number */}
                     {w1024 ? (
                        <Box sx={{ background: 'orange', borderRadius: '50%' }}>
                           <Typography fontSize={11} padding="1px 0px 0 6px" width="18px">
                              {index + 1}
                           </Typography>
                        </Box>
                     ) : (
                        <Typography
                           fontSize={15}
                           paddingLeft="6px"
                           marginRight={index === 9 ? (w1024 ? '' : '5px') : ''}
                           width={18}
                           color="#0078bd"
                           fontWeight="bold"
                        >
                           {index + 1}
                        </Typography>
                     )}
                     {/* content item */}
                     <Typography
                        maxHeight={w1024 ? '39px' : 'auto'}
                        width="100%"
                        alignContent="center"
                        justifyContent="flex-start"
                        fontSize={w1024 ? '13px' : '15px'}
                        noWrap={w1024 ? false : true}
                        overflow="hidden"
                     >
                        {item.details[0].summary}
                     </Typography>
                     {/* image */}
                     <Stack
                        width="100px"
                        display={w1024 ? '' : 'none'}
                        height={35}
                        className={classes.boxImg}
                        alignItems="center"
                     >
                        <img height="100%" src={item.details[0].summaryImage} alt="" />
                     </Stack>
                  </Stack>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

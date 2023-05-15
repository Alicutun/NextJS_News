import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from 'tss-react/mui';
import { BASE_URL, IDataArticle } from '@/common';
import axios from 'axios';
import { formatTimeToYMD } from '@/utilities';
import { format } from 'timeago.js';
const useStyles = makeStyles()(() => ({
  boxLive: {
    marginTop: '10px',
    border: '1px solid #ced2d7',
  },
  boxLiveRes: {
    borderTop: '9px solid #ced2d7',
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
  itemBoxLive: {
    marginLeft: '25px',
    borderLeft: '1px solid #ced2d7',
    position: 'relative',
  },
  itemBoxLiveRes: {
    height: '90px',
    borderBottom: '1px solid #e6e8eb',
  },
  boxImg: {
    border: '1px solid #ced2d7',
  },
  time: {
    background: 'white',
    position: 'absolute',
    top: '5px',
    left: '-18px',
    lineHeight: '13px',
  },
  timeIcon: {
    position: 'absolute',
    top: '20px',
    left: '-12px',
    background: 'white',
  },
  stackTime: {
    height: '100%',
    width: '70px',
    background: '#efefef',
    borderRight: '1px solid #e6e8eb',
  },
}));

export const BoxLive = () => {
  //
  const { classes } = useStyles();
  const w1024 = useMediaQuery('(min-width:1024px)');

  const [listData, setListData] = useState<IDataArticle[]>([]);

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
    <Box className={w1024 ? classes.boxLive : classes.boxLiveRes}>
      <Stack
        columnGap={1}
        alignItems="center"
        direction="row"
        className={w1024 ? classes.nameBox : classes.nameBoxRes}
      >
        <img
          height="55%"
          src="https://img.sedaily.com/Html/Special/politics/politics_13.png"
          alt=""
        />
        <Typography fontSize="16px" fontWeight="bold">
          Wire
        </Typography>
      </Stack>
      <Grid container height={w1024 ? '285px' : 'auto'} overflow="auto">
        {listData?.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Stack
              direction={w1024 ? 'column' : 'row'}
              alignItems={w1024 ? '' : 'center'}
              justifyContent="space-between"
              className={w1024 ? classes.itemBoxLive : classes.itemBoxLiveRes}
            >
              {/* time */}
              <Stack
                alignItems="center"
                justifyContent="center"
                direction="column"
                className={w1024 ? '' : classes.stackTime}
              >
                <AccessTimeIcon className={w1024 ? classes.timeIcon : ''} />
                <Typography fontSize={11} textAlign="center" className={w1024 ? classes.time : ''}>
                  {format(item.createdAt)}
                </Typography>
              </Stack>

              {/* content */}
              <Grid container direction="column" justifyContent="flex-start">
                <Typography padding={w1024 ? '15px 20px 5px' : '5px 0 0 20px'} fontSize="13px">
                  {item.details?.[0].summary}
                </Typography>
                <Typography
                  display={w1024 ? 'none' : ''}
                  padding={w1024 ? '15px 20px 5px' : '5px 0 0 20px'}
                  fontSize="13px"
                  color="#999"
                >
                  김지현 기자 {formatTimeToYMD(item.createdAt)} 블록체인
                </Typography>
              </Grid>
              {/* Image */}
              <img
                style={{ padding: w1024 ? '0 20px' : '0 10px' }}
                height={w1024 ? '80px' : '70px'}
                width={165}
                src={item.details?.[0].summaryImage}
                alt=""
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

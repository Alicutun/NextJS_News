import { IDataArticle, IDetailArticle, NetworkRequest } from '@/common';
import { formatTimeToYMD } from '@/utilities';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { makeStyles } from 'tss-react/mui';
import { CustomImage } from '../SubComponents';
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
  const { classes } = useStyles();
  const w1024 = useMediaQuery('(min-width:1024px)');

  const [listData, setListData] = useState<IDataArticle[]>([]);

  const fetchListTop10Article = async () => {
    const { data } = await axios.get(
      `${NetworkRequest.BASE_URL}/articles?filter=${encodeURIComponent(
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
        <CustomImage
          sx={{
            height: '55%',
            aspectRatio: '2/1',
            position: 'relative',
          }}
          src="https://img.sedaily.com/Html/Special/politics/politics_13.png"
          altImage=""
        />
        <Typography fontSize="16px" fontWeight="bold">
          Wire
        </Typography>
      </Stack>

      <Grid container height={w1024 ? '285px' : 'auto'} overflow="auto">
        {listData?.map((item) => {
          const { summary, summaryImage } =
            item.details?.find((el: IDetailArticle) => el.locale === 'en_US') ?? {};
          return (
            <Grid item xs={12} key={item.id}>
              <Stack
                direction={w1024 ? 'column' : 'row'}
                alignItems={w1024 ? '' : 'center'}
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
                  <Typography
                    fontSize={11}
                    textAlign="center"
                    className={w1024 ? classes.time : ''}
                  >
                    {format(item.createdAt)}
                  </Typography>
                </Stack>

                {/* content */}
                <Grid container direction="column" justifyContent="flex-start">
                  <Typography padding={w1024 ? '21px 20px 5px' : '5px 0 0 20px'} fontSize="13px">
                    {summary}
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
                <CustomImage
                  sx={{
                    margin: w1024 ? '0 20px 5px' : '0 10px',
                    height: w1024 ? '80px' : '63px',
                    width: '140px',
                    border: '1px solid #ced2d7',
                  }}
                  style={{ objectFit: 'contain' }}
                  src={summaryImage}
                />
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

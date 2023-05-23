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
import { useRouter } from 'next/router';
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

  const router = useRouter();
  const { locale } = router.query;

  const [listData, setListData] = useState<IDataArticle[]>([]);

  const fetchListTop10Article = async () => {
    const { data } = await axios.get(
      `${NetworkRequest.BASE_URL}/articles?filter=${encodeURIComponent(
        JSON.stringify({
          limit: 10,
        })
      )}`,
      {
        params: {
          locale,
        },
      }
    );
    setListData(data.data);
  };

  useEffect(() => {
    fetchListTop10Article();
    return () => {};
  }, [locale]);

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
        {listData?.map(({ id, summary, summaryImage, createdAt }) => (
          <Grid item xs={12} key={id}>
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
                <Typography fontSize={11} textAlign="center" className={w1024 ? classes.time : ''}>
                  {format(createdAt)}
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
                  김지현 기자 {formatTimeToYMD(createdAt)} 블록체인
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
                src={
                  summaryImage ??
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXn5+eUlJTq6uqRkZGVlZXi4uLm5ubNzc2ZmZnd3d3R0dG1tbXU1NTHx8e+vr6jo6OdnZ2pqamtra3Z2dmLi4uzs7PIyMjBwcGP1gM/AAADj0lEQVR4nO3X65KjOAyAUWRhYy4JkITk/d90JQNJemprenarpsOP71SFQDdOWUi+UFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUYQQ3i9+rO1fFtPWnZC6pqv2i6Fp2m/7meLzlqHp9ovQ/knbHxP6sSm9CcMoKvO1XKRLrZrv37U95dN60s7WdurWsM7Z2p7/Yp//m1Z0Lh1rs9RTLWP0i0XrnEWb32cijjKVkzSqt5XWzsNZxdueD5LFMEs9lJNe5BTOpWdhULmk1sJNv23bq949jnBS6UMjsthFrGWKcZI6/kT/vxUa3R52sgq1k0kmi/Ai2gYLV7o9EetE8mU6qa61rOkPk+TKW0mswkMt9fa78jhEEq3OcpkgPG2evUXkGuyvlr0wvEotdl0Xq1SOO4uoHvYCvwTPpMd2kcmKtZ38T5/nD/wR21gKTbvSS2mC9Xirt72X15veTqGx4yur9kyWtW1X77VtX1Op7bQP0Q+zUKZqsr5XPgKHUrVyD1Z+vQWSbCDuEYpFWy12HPa2FkNuL7fF2jai9hNV66OxyjL7v2cv3I+zmtR7mrx7NtFo6+mwpIZrSUYV6np6Zqy3krTUPgeiJ70PF/ts5Wk5V8/5Op5tBtNPhfUSBk9S+0cRVklkXJeDlQ20KaX54BFanQ026L5GKP8eoZXxWrvbpd1/D7YOeoT3Z4TLoSL0aOYUh6yPtI7D0lkbhzY8t3E4v+bDNtf1K4XXXOcULZFLeo7D6zYOR79hPMA4LFlR1bq2RKzLmE+utgb67G832JK/vJJ2sruf+xSbkaxZaTsGm0vLSlMq3OfSWJah8TNhvQn9TXWPcEuAFZet2skmwjU1r1XbdgST6L4a+sKhe4RVzD7prmVgs1e+eo7fns7HpGiS1eXDN2fWy+jZ8772vjiWFX2/13abeZj0ORBL22iPxaq0PJc2+PIRS52ffT+0bugOwPdtPoi8Pvurbbx8zvAt6XCSUqtFHOzCt67d+041rCug1afYS0m/bYFsC9c0+RgLvtsjtLlB7Q1IS1Aermopt/Ume3ewrA7l+NZ4i9DfRaytLR/lB8XbyjfvJT8n3G+3NcLU5+drXbhPqvPzNdYiVOu+fd2+Rni7baPtkbVe1vyGYVYdh6ME+C5sn1/P/09bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN4/HskdrpeKiZEAAAAASUVORK5CYII='
                }
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

import { NetworkRequest, IDataArticle, IDetailArticle } from '@/common';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { CustomImage } from '../SubComponents';
import { useTrans } from '@/hooks';

const useStyles = makeStyles()(() => ({
  box: {
    marginTop: '10px',
    border: '1px solid #ced2d7',
    height: '342px',
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
    position: 'relative',
  },
}));

export const BoxNews: React.FC<{}> = () => {
  const router = useRouter();
  const trans = useTrans();
  const { locale } = router.query;
  const { classes } = useStyles();
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w480 = useMediaQuery('(min-width:480px)');

  const [listData, setListData] = useState<IDataArticle[]>([]);

  const fetchListTop10Article = async () => {
    const { data } = await axios.get(
      `${NetworkRequest.BASE_URL}/articles?filter=${encodeURIComponent(
        JSON.stringify({
          order: 'clickCount DESC',
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
    <Box className={w1024 ? classes.box : classes.boxRes}>
      <Typography fontSize={16} className={w1024 ? classes.nameBox : classes.nameBoxRes}>
        {trans.asidePage.name_BestClick}
      </Typography>
      <Grid container>
        {listData
          ?.slice(0, w1024 ? 5 : w480 ? 10 : 5)
          .map(({ id, summary, summaryImage }, index) => (
            <Grid
              sx={{
                cursor: 'pointer',
              }}
              item
              xs={w1024 ? 12 : w480 ? 6 : 12}
              key={id}
              onClick={() => {
                router.replace({
                  pathname: '/[locale]/news/[name]',
                  query: { name: id, locale: router.query.locale },
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
                  <Box
                    sx={{
                      background: 'orange',
                      borderRadius: '50%',
                    }}
                  >
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
                {/* summary item */}
                <Typography
                  maxHeight={w1024 ? '39px' : 'auto'}
                  width="100%"
                  alignContent="center"
                  justifyContent="flex-start"
                  fontSize={w1024 ? '13px' : '15px'}
                  noWrap={w1024 ? false : true}
                  overflow="hidden"
                >
                  {summary}
                </Typography>

                {/* image */}
                <Stack
                  width="100px"
                  display={w1024 ? '' : 'none'}
                  height={35}
                  className={classes.boxImg}
                  alignItems="center"
                >
                  <Image
                    style={{ objectFit: 'contain' }}
                    fill
                    src={
                      summaryImage ??
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXn5+eUlJTq6uqRkZGVlZXi4uLm5ubNzc2ZmZnd3d3R0dG1tbXU1NTHx8e+vr6jo6OdnZ2pqamtra3Z2dmLi4uzs7PIyMjBwcGP1gM/AAADj0lEQVR4nO3X65KjOAyAUWRhYy4JkITk/d90JQNJemprenarpsOP71SFQDdOWUi+UFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUYQQ3i9+rO1fFtPWnZC6pqv2i6Fp2m/7meLzlqHp9ovQ/knbHxP6sSm9CcMoKvO1XKRLrZrv37U95dN60s7WdurWsM7Z2p7/Yp//m1Z0Lh1rs9RTLWP0i0XrnEWb32cijjKVkzSqt5XWzsNZxdueD5LFMEs9lJNe5BTOpWdhULmk1sJNv23bq949jnBS6UMjsthFrGWKcZI6/kT/vxUa3R52sgq1k0kmi/Ai2gYLV7o9EetE8mU6qa61rOkPk+TKW0mswkMt9fa78jhEEq3OcpkgPG2evUXkGuyvlr0wvEotdl0Xq1SOO4uoHvYCvwTPpMd2kcmKtZ38T5/nD/wR21gKTbvSS2mC9Xirt72X15veTqGx4yur9kyWtW1X77VtX1Op7bQP0Q+zUKZqsr5XPgKHUrVyD1Z+vQWSbCDuEYpFWy12HPa2FkNuL7fF2jai9hNV66OxyjL7v2cv3I+zmtR7mrx7NtFo6+mwpIZrSUYV6np6Zqy3krTUPgeiJ70PF/ts5Wk5V8/5Op5tBtNPhfUSBk9S+0cRVklkXJeDlQ20KaX54BFanQ026L5GKP8eoZXxWrvbpd1/D7YOeoT3Z4TLoSL0aOYUh6yPtI7D0lkbhzY8t3E4v+bDNtf1K4XXXOcULZFLeo7D6zYOR79hPMA4LFlR1bq2RKzLmE+utgb67G832JK/vJJ2sruf+xSbkaxZaTsGm0vLSlMq3OfSWJah8TNhvQn9TXWPcEuAFZet2skmwjU1r1XbdgST6L4a+sKhe4RVzD7prmVgs1e+eo7fns7HpGiS1eXDN2fWy+jZ8772vjiWFX2/13abeZj0ORBL22iPxaq0PJc2+PIRS52ffT+0bugOwPdtPoi8Pvurbbx8zvAt6XCSUqtFHOzCt67d+041rCug1afYS0m/bYFsC9c0+RgLvtsjtLlB7Q1IS1Aermopt/Ume3ewrA7l+NZ4i9DfRaytLR/lB8XbyjfvJT8n3G+3NcLU5+drXbhPqvPzNdYiVOu+fd2+Rni7baPtkbVe1vyGYVYdh6ME+C5sn1/P/09bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN4/HskdrpeKiZEAAAAASUVORK5CYII='
                    }
                    alt=""
                  />
                </Stack>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

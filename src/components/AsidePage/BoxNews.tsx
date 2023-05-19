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
        {listData?.slice(0, w1024 ? 5 : w480 ? 10 : 5).map(({ details, id }, index) => {
          const { summary, summaryImage } =
            details?.find((el: IDetailArticle) => el.locale === 'en_US') ?? {};
          return (
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
                  <Image style={{ objectFit: 'contain' }} fill src={summaryImage ?? ''} alt="" />
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

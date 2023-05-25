import { IDataArticle, IDetailArticle, NetworkRequest } from '@/common';
import { useTrans } from '@/hooks';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Skeleton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';

export const TopStory: React.FC<{ display?: boolean }> = ({ display }) => {
  const w1220 = useMediaQuery('(min-width:1220px)');
  const w1024 = useMediaQuery('(min-width:1024px)');
  const trans = useTrans();
  const router = useRouter();
  const { locale } = router.query;

  const [listData, setListData] = useState<IDataArticle[]>([]);
  const [wordData, setWordData] = useState<IDataArticle>();
  const [i, setI] = useState<number>(0);

  const fetchListTop10Article = async () => {
    const { data } = await axios.get(
      `${NetworkRequest.BASE_URL}/articles?filter=${encodeURIComponent(
        JSON.stringify({
          order: 'clickCount DESC',
          limit: 5,
        })
      )}`,
      {
        params: { locale },
      }
    );
    setListData(data.data);
  };

  useEffect(() => {
    fetchListTop10Article();
    return () => {};
  }, [locale]);

  useEffect(() => {
    if (!listData) {
      return;
    }
    setWordData(listData[0]);
    setI(1);
    return () => {};
  }, [listData]);

  useEffect(() => {
    if (!listData) {
      return;
    }
    const timer = setTimeout(() => {
      if (i < listData.length && i !== 0) {
        setWordData(listData[i]);
        setI((prev) => prev + 1);
      }

      if (i === listData.length) {
        setWordData(listData[0]);
        setI(1);
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [listData, i]);

  return (
    <Container disableGutters>
      <Grid
        container={w1024 ? true : false}
        fontSize="16px"
        padding={w1220 ? '20px 0 50px 0' : '20px 20px 50px 20px'}
        justifyContent={w1024 ? 'flex-start' : 'center'}
        display={display ? '' : w1024 ? 'flex' : 'none'}
      >
        <Typography color="#448aff" fontWeight="bold" textAlign={w1024 ? 'unset' : 'center'}>
          {trans.mainPage.topStory}
        </Typography>

        {!wordData ? (
          <Skeleton sx={{ marginLeft: '10px' }} width={200} />
        ) : (
          <>
            <Typography
              margin={w1024 ? '0 0 0 10px' : '0 10px'}
              noWrap
              textAlign={w1024 ? 'unset' : 'center'}
            >
              {wordData?.summary}
            </Typography>
            <Box color="#999" margin="3px 2px 0 10px" display={w1024 ? '' : 'none'}>
              <AccessTimeIcon sx={{ fontSize: '15px' }} />
            </Box>
            <Typography color="#999" fontSize={12} pt="2px" display={w1024 ? '' : 'none'}>
              {format(wordData?.createdAt)}
            </Typography>
          </>
        )}
      </Grid>
    </Container>
  );
};

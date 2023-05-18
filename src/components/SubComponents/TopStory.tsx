import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
import { NetworkRequest, IDataArticle, IDetailArticle } from '@/common';
import axios from 'axios';
import { format } from 'timeago.js';
import { Skeleton } from '@mui/material';

export const TopStory: React.FC<{ display?: boolean }> = ({ display }) => {
  //
  const w1220 = useMediaQuery('(min-width:1220px)');
  const w1024 = useMediaQuery('(min-width:1024px)');

  const [listData, setListData] = useState<IDataArticle[]>([]);
  const [wordData, setWordData] = useState<IDataArticle>();
  const [i, setI] = useState<number>(0);

  // call get top10 news
  const fetchListTop10Article = async () => {
    const { data } = await axios.get(
      `${NetworkRequest.BASE_URL}/articles?filter=${encodeURIComponent(
        JSON.stringify({
          order: 'clickCount DESC',
          limit: 5,
        })
      )}`
    );
    setListData(data.data);
  };

  useEffect(() => {
    fetchListTop10Article();
    return () => {};
  }, []);

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
        container
        fontSize="16px"
        padding={w1220 ? '20px 0 50px 0' : '20px 0 50px 20px'}
        justifyContent={w1024 ? 'flex-start' : 'center'}
        display={display ? '' : w1024 ? 'flex' : 'none'}
      >
        <Typography color="#448aff" fontWeight="bold">
          TOP STORIES
        </Typography>

        {!wordData ? (
          <Skeleton sx={{ marginLeft: '10px' }} width={200} />
        ) : (
          <>
            <Typography marginLeft="10px">
              {wordData?.details?.find((el: IDetailArticle) => el.locale === 'en_US')?.summary}
            </Typography>
            <Box color="#999" margin="3px 2px 0 10px">
              <AccessTimeIcon sx={{ fontSize: '15px' }} />
            </Box>
            <Typography color="#999" fontSize={12} pt="2px">
              {format(wordData?.createdAt)}
            </Typography>
          </>
        )}
      </Grid>
    </Container>
  );
};

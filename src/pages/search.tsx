import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { AsidePage, ListArticle, TopStory, Advertise, DetailSearch } from '@/components';
import { useRouter } from 'next/router';

import axios from 'axios';
import {
  BASE_URL,
  IDataSearchAllTopic,
  IDataSearchTotalTopic,
  IPeriod,
  LIMIT_PAGE,
  LOCALE,
} from '@/common';

const { SIX_MONTH } = IPeriod;

interface ISearch {
  dataSearchAllTopic: IDataSearchAllTopic;
  dataSearchTotalTopic: IDataSearchTotalTopic[];
}

export default function Search(props: ISearch) {
  const router = useRouter();

  const w1220 = useMediaQuery('(min-width:1220px)');
  const w1024 = useMediaQuery('(min-width:1024px)');

  const { dataSearchAllTopic, dataSearchTotalTopic } = props;
  const [total, setTotal] = useState(0);

  const topicName = router.query.topicName || 'All topics';
  const topic = dataSearchTotalTopic.find((s: IDataSearchTotalTopic) => s.topic === topicName);

  useEffect(() => {
    if (topic) setTotal(topic.total);
    return () => {};
  }, [router.query]);

  // Select Topic
  const handleClickTopic = (topicNameClicked: string) => {
    router.push(`/search?text=${router.query.text}&page=1&topicName=${topicNameClicked}`);
  };

  return (
    <Container disableGutters>
      {/* header_topstory */}
      <TopStory />
      {/* ad */}
      <Advertise />

      {/* Content */}
      <Grid container columnSpacing={5} mt={w1024 ? '30px' : '20px'}>
        {/* form big */}
        <Grid item xs={w1024 ? 9 : 12}>
          {/* search */}
          <DetailSearch />

          {/* result */}
          <Grid
            padding={w1220 ? '0 0 0 0' : w1024 ? '0 0 0 20px' : '0 20px 0 20px'}
            container
            direction="row"
            columnSpacing={5}
          >
            {/* Catagory */}
            <Grid item xs={w1220 ? 2 : 0} display={w1220 ? '' : 'none'}>
              <Typography
                fontSize={16}
                paddingBottom="10px"
                marginBottom="20px"
                sx={{ borderBottom: 'solid 1px #ced2d7' }}
              >
                Category별
              </Typography>

              {dataSearchTotalTopic?.map((item: any) => (
                <Typography
                  marginBottom="5px"
                  color={item.topic === topicName ? 'blue' : ''}
                  key={item.topic}
                  onClick={() => handleClickTopic(item.topic)}
                  sx={{ cursor: 'pointer' }}
                  fontSize={13}
                >
                  {item.topic} ({item.total})
                </Typography>
              ))}
            </Grid>
            {/* Total list */}
            <Grid item direction="column" xs={w1220 ? 10 : 12} container>
              <Grid item width="100%">
                <Typography fontSize="18px" paddingBottom="10px">
                  TOTAL ({total})
                </Typography>
              </Grid>

              <Grid item width="100%">
                <ListArticle listArticle={dataSearchAllTopic.articles} total={total} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Aside */}
        <Grid item xs={w1024 ? 3 : 12}>
          <AsidePage />
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { text, topicName, period, periodS, periodE, page } = query;

  const searchData = await axios.get(`${BASE_URL}/articles/search`, {
    params: {
      text,
      locale: LOCALE,
      topicName,
      limit: LIMIT_PAGE,
      period: period ?? SIX_MONTH,
      periodS,
      periodE,
      page: page ?? 1,
    },
  });

  const dataSearchAllTopic = searchData.data;
  const searchTotalData = await axios.get(`${BASE_URL}/articles/search-total`, {
    params: {
      text,
      locale: LOCALE,
      period: period ?? SIX_MONTH,
      periodS,
      periodE,
    },
  });
  const dataSearchTotalTopic = searchTotalData.data;

  return {
    props: {
      dataSearchAllTopic,
      dataSearchTotalTopic,
    },
  };
}

import {
  IDataSearchAllTopic,
  IDataSearchTotalTopic,
  IPeriod,
  LIMIT_PAGE,
  NetworkRequest,
} from '@/common';
import { Advertise, AsidePage, DetailSearch, ListArticle, TopStory } from '@/components';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const { SIX_MONTH } = IPeriod;

const Search: React.FC<{
  dataSearchAllTopic: IDataSearchAllTopic;
  dataSearchTotalTopic: IDataSearchTotalTopic[];
}> = ({ dataSearchAllTopic, dataSearchTotalTopic }) => {
  const router = useRouter();

  const w1220 = useMediaQuery('(min-width:1220px)');
  const w1024 = useMediaQuery('(min-width:1024px)');

  const [total, setTotal] = useState(0);

  const topicName = router.query.topicName || 'All topics';
  const topic = dataSearchTotalTopic.find((s: IDataSearchTotalTopic) => s.topic === topicName);

  useEffect(() => {
    if (topic) setTotal(topic.total);
    return () => {};
  }, [router.query, topic]);

  const handleClickTopic = (topicNameClicked: string) => {
    router.push(
      `/${router.query.locale}/search?text=${router.query.text}&page=1&topicName=${topicNameClicked}`,
      undefined,
      { scroll: false }
    );
  };

  return (
    <Container disableGutters>
      <TopStory />
      <Advertise />
      <Grid container columnSpacing={5} mt={w1024 ? '30px' : '20px'}>
        <Grid item xs={w1024 ? 9 : 12}>
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
};

export default Search;

export async function getServerSideProps(context: any) {
  const { query } = context;

  const { text, topicName, period, periodS, periodE, page, locale } = query;

  const searchData = await axios.get(`${NetworkRequest.BASE_URL}/articles/search`, {
    params: {
      text,
      locale,
      topicName,
      limit: LIMIT_PAGE,
      period: period ?? SIX_MONTH,
      periodS,
      periodE,
      page: page ?? 1,
    },
  });

  const dataSearchAllTopic = searchData.data;
  const searchTotalData = await axios.get(`${NetworkRequest.BASE_URL}/articles/search-total`, {
    params: {
      text,
      locale,
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

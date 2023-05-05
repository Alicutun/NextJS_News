import React, { useCallback, useEffect, useState } from 'react';
import { Container, Grid, Typography, useMediaQuery } from '@mui/material';
import { AsidePage, ListArticle, TopStory, Advertise, DetailSearch } from '@/components';
import { makeStyles } from 'tss-react/mui';
import { useRouter } from 'next/router';

import axios from 'axios';
import {
  BASE_URL,
  IDataArticle,
  IDataSearchAllTopic,
  IDataSearchTotalTopic,
  IPeriod,
  ITarget,
  LIMIT_PAGE,
  LOCALE,
} from '@/common';

const useStyles = makeStyles()(() => ({
  selection: {
    background: '#fff',
    width: 200,
    '.MuiAutocomplete-inputRoot': {
      height: '40px',
    },
    '.MuiAutocomplete-input': {
      padding: '0.5px 4px 7.5px 6px !important',
    },
  },
  textfield: {
    height: '56px',
    width: '50%',
    '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
      borderRadius: '0px',
    },
  },
  buttonSearch: {
    height: '56px',
    background: '#444',
    cursor: 'pointer',
    borderRadius: '0px !important ',
    '&:hover': {
      backgroundColor: '#444 !important',
    },
  },
}));

const { ONE_WEEK, ONE_MONTH, THREE_MONTH, SIX_MONTH, ONE_YEAR } = IPeriod;
const iPeriodOptions = [ONE_WEEK, ONE_MONTH, THREE_MONTH, SIX_MONTH, ONE_YEAR];
const { TITLE_BODY, TITLE, MAIN_TEXT, NAME_REPORTER, KEY_WORD, PHOTO, EVENT_NAME } = ITarget;
const targetOptions = [TITLE_BODY, TITLE, MAIN_TEXT, NAME_REPORTER, KEY_WORD, PHOTO, EVENT_NAME];

interface ISearch {
  dataSearchAllTopic: IDataSearchAllTopic;
  dataSearchTotalTopic: IDataSearchTotalTopic[];
}

export default function Search(props: ISearch) {
  const router = useRouter();

  const { classes } = useStyles();
  const w1220 = useMediaQuery('(min-width:1220px)');
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w640 = useMediaQuery('(min-width:640px)');

  const [listArticle, setListArticle] = useState<IDataArticle[]>([]);
  const [total, setTotal] = useState(0);
  const [nameTopic, setNameTopic] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>('');
  const { dataSearchAllTopic, dataSearchTotalTopic } = props;
  const [period, setPeriod] = useState<string>(SIX_MONTH);

  const allTopic = dataSearchTotalTopic.find(
    (s: IDataSearchTotalTopic) => s.topic === 'All topics'
  );

  useEffect(() => {
    if (!allTopic) {
      return;
    }

    setTotal(allTopic.total);
    setNameTopic(allTopic.topic);

    return () => {};
  }, [allTopic]);

  useEffect(() => {
    setListArticle(dataSearchAllTopic.articles);
    return () => {};
  }, [dataSearchAllTopic.articles]);

  // fetch data
  const fetchList = useCallback(async () => {
    try {
      const { data }: any = await axios.get(`${BASE_URL}/articles/search`, {
        params: {
          text: router.query.text,
          locale: LOCALE,
          topicName: nameTopic,
          limit: LIMIT_PAGE,
          period,
          page,
        },
      });
      setListArticle(data?.articles);
    } catch (error) {}
  }, [nameTopic, page]);

  // Select Topic
  const handleTopic = (topicName: string, total: number) => {
    setNameTopic(topicName);
    setTotal(total);
    setPage(1);
  };

  // Search in page
  const handleSearch = () => {
    router.push(`/search?text=${search}`);
    setPage(1);
  };

  // press enter search
  const handleSearchEnter = async (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    fetchList();

    return () => {};
  }, [fetchList]);

  useEffect(() => {
    setSearch(`${router?.query?.text}` ?? '');
    return () => {};
  }, [router.query.text]);

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
                  color={item.topic === nameTopic ? 'blue' : ''}
                  key={item.topic}
                  onClick={() => handleTopic(item.topic, item.total)}
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
                <ListArticle
                  listArticle={listArticle}
                  page={page}
                  setPage={setPage}
                  total={total}
                  valueSearch={router.query.text}
                />
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
  const { text, period, periodS, periodE, page } = query;

  const searchData = await axios.get(`${BASE_URL}/articles/search`, {
    params: {
      text,
      locale: LOCALE,
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

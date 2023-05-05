import React, { useEffect, useState } from 'react';
import { Container, Grid, useMediaQuery } from '@mui/material';
import { AsidePage, TopStory, Advertise, ListArticle } from '@/components';
import axios from 'axios';
import { BASE_URL, IDataArticle, IDataTopic, LIMIT_PAGE } from '@/common';
import { useRouter } from 'next/router';

export default function Menu({ data }: { data: IDataTopic }) {
  const router = useRouter();

  const [listArticle, setListArticle] = useState<IDataArticle[]>(data.data);
  //   const [page, setPage] = React.useState<number>(0);

  const w1024 = useMediaQuery('(min-width:1024px)');

  // fetch data when click page
  //   const fetchList = async () => {
  //     const filter = {
  //       include: [
  //         {
  //           relation: 'user',
  //           scope: {
  //             include: [{ relation: 'profile' }],
  //           },
  //         },
  //       ],
  //       limit: LIMIT_PAGE,
  //       offset: (page - 1) * LIMIT_PAGE,
  //     };

  //     const { data } = await axios.get(
  //       `${BASE_URL}/topics/${router.query.menuId}/articles?filter=${encodeURIComponent(
  //         JSON.stringify(filter)
  //       )}`
  //     );

  //     await setListArticle(data.data);
  //   };

  //   useEffect(() => {
  //     if (page > 0) fetchList();
  //   }, [page]);

  return (
    <Container disableGutters>
      {/* header_topstory */}
      <TopStory />
      {/* ad */}
      <Advertise />
      {/* Content */}
      <Grid container columnSpacing={5} mt={w1024 ? '30px' : '20px'}>
        <Grid item xs={w1024 ? 9 : 12}>
          <ListArticle listArticle={listArticle} total={data.total} />
        </Grid>
        <Grid item xs={w1024 ? 3 : 12}>
          <AsidePage />
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { menuId, page } = query;
  const filter = {
    include: [
      {
        relation: 'user',
        scope: {
          include: [{ relation: 'profile' }],
        },
      },
    ],
    limit: LIMIT_PAGE,
    offset: 0,
  };

  const { data } = await axios.get(
    `${BASE_URL}/topics/${menuId}/articles?filter=${encodeURIComponent(JSON.stringify(filter))}`
  );

  return {
    props: { data },
  };
}

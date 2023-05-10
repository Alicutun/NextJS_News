import { BASE_URL, IDataTopic, LIMIT_PAGE } from '@/common';
import { Advertise, AsidePage, ListArticle, TopStory } from '@/components';
import { Container, Grid, useMediaQuery } from '@mui/material';
import axios from 'axios';

const Menu: React.FC<{ articles: IDataTopic }> = ({ articles }) => {
  const w1024 = useMediaQuery('(min-width:1024px)');

  return (
    <Container disableGutters>
      {/* header_topstory */}
      <TopStory />
      {/* ad */}
      <Advertise />
      {/* Content */}
      <Grid container columnSpacing={5} mt={w1024 ? '30px' : '20px'}>
        <Grid item xs={w1024 ? 9 : 12}>
          <ListArticle listArticle={articles.data} total={articles.total} />
        </Grid>
        <Grid item xs={w1024 ? 3 : 12}>
          <AsidePage />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;

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
    offset: page ? (page - 1) * LIMIT_PAGE : 0,
  };
  const { data } = await axios.get(
    `${BASE_URL}/topics/${menuId}/articles?filter=${encodeURIComponent(JSON.stringify(filter))}`
  );

  return {
    props: { articles: data },
  };
}

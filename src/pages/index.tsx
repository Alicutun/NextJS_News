import { BASE_URL, IDataTopic, LIMIT_PAGE } from '@/common';
import { HotNewsIndex, TopIndex, TopStory } from '@/components';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  broder: {
    border: '1px solid #d9d9d9',
  },
  broderTopBottom: {
    borderBottom: '1px solid #d9d9d9',
    borderTop: '1px solid #d9d9d9',
  },
  broderTop9px: {
    borderTop: '9px solid #eceeef',
  },
  backgroundf3f3f3: {
    background: '#f3f3f3',
  },
  containerTopIndex: {
    marginBottom: '50px',
  },
  displayNone: {
    display: 'none',
  },
  mainTopIndex: {
    overflow: 'hidden',
    // position: "relative",
  },
  itemTopIndex: {
    cursor: 'pointer',
    border: '1px solid #d9d9d9',
    '&:hover': {
      transform: 'translateY(-3px)',
      transition: '0.4s',
      boxShadow: '1px 2px 4px #888',
    },
  },
  containerItemTopIndex: {
    height: '137px',
    overflow: 'hidden',
  },
  boxContentItem: {
    background: '#009b28',
    lineHeight: '22px',
    display: 'inline-block',
  },
  boxItemLine: {
    border: '1px solid #d9d9d9',
    cursor: 'pointer',
    background: 'white',
    '&:hover': {
      transform: 'translateY(-10px)',
      transition: '0.4s',
      background: '#009b28',
      border: '1px solid #009b28',
      '& .MuiTypography-root': {
        color: 'white',
      },
    },
  },
  iconTopStory: {
    transform: 'scale(0.6)',
  },
  textHeight40: {
    height: '40px',
    lineHeight: '20px',
    overflow: ' hidden',
  },
}));

export default function Index({ articles }: { articles: IDataTopic }) {
  console.log('articles:', articles);
  const { classes } = useStyles();
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w480 = useMediaQuery('(min-width:480px)');

  return (
    <section>
      <TopStory display={true} />
      <TopIndex listArticles={articles.data} />
      <HotNewsIndex listArticles={articles.data} />
    </section>
  );
}
export async function getServerSideProps(context: any) {
  const { query } = context;
  const { page } = query;
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
    `${BASE_URL}/topics/${3}/articles?filter=${encodeURIComponent(JSON.stringify(filter))}`
  );

  return {
    props: { articles: data },
  };
}

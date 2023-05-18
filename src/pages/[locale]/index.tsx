import { NetworkRequest, IColorTopic, IDataTopic, LIMIT_PAGE } from '@/common';
import { HotNewsIndex, TopIndex, TopStory } from '@/components';
import axios from 'axios';

const Index: React.FC<{ articles: IDataTopic }> = ({ articles }) => {
  return (
    <section>
      <TopStory display={true} />
      <TopIndex listArticles={articles.data} />
      <HotNewsIndex
        listArticle={articles.data}
        background={true}
        nameTopic="Business"
        colorTopic={IColorTopic.BlOCKCHAIN}
      />
      <HotNewsIndex
        listArticle={articles.data}
        background={false}
        nameTopic="Health"
        colorTopic={IColorTopic.ITINDUSTRY}
      />
      <HotNewsIndex
        listArticle={articles.data}
        background={true}
        nameTopic="Entertainment"
        colorTopic={IColorTopic.POLICY}
      />
    </section>
  );
};

export default Index;

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { page } = query;
  const filter = {
    where: {
      status: 'PUBLIC',
    },
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
    `${NetworkRequest.BASE_URL}/topics/${3}/articles?filter=${encodeURIComponent(
      JSON.stringify(filter)
    )}`
  );

  return {
    props: { articles: data },
  };
}

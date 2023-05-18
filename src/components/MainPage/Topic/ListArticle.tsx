import React, { useEffect, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Pagination, Stack, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { IDataArticle, IDetailArticle, IListArticle, LIMIT_PAGE } from '@/common';
import { ItemArticle } from './ItemArticle';
import { useRouter } from 'next/router';
import { useChangeParam } from '@/hooks';
import { SkeletonListArticle } from '../../Skeleton';

const useStyles = makeStyles()(() => ({
  border: {
    border: '1px solid #e6e8eb',
  },
  borderTop: {
    borderTop: '1px solid #e6e8eb',
  },
  box1: {
    border: 'solid 1px #ced2d7',
    background: '#f7f7f7',
  },
  itemTime: {
    color: '#888',
    paddingBottom: ' 3px',
    fontSize: '12px',
  },
  itemContent: {
    fontSize: '13px',
    color: '#888888',
    lineHeight: '19px',
    overflow: 'hidden',
    maxHeight: '35px ',
  },
}));

export const ListArticle: React.FC<IListArticle> = ({ listArticle, total }) => {
  //
  const { classes } = useStyles();
  const w1220 = useMediaQuery('(min-width:1220px)');
  const router = useRouter();
  const { page } = router.query;
  const { changeParam } = useChangeParam();

  // fix bug dangerouslySetInnerHTML Error: Hydration failed because the initial UI does not match what was rendered on the server.
  const [listArticles, setDataListArticles] = useState<IDataArticle[]>([]);
  useEffect(() => {
    if (listArticle) {
      setDataListArticles(listArticle);
    }
    return () => {};
  }, [listArticle]);

  return (
    <article>
      <Stack direction="row" className={classes.box1} padding="10px 0px 10px 10px" columnGap={1}>
        <DoneIcon style={{ color: 'orange' }} />
        <Typography>By most recent | By accuracy</Typography>
      </Stack>

      {listArticle ? (
        listArticles?.length === 0 ? (
          <Typography>No data</Typography>
        ) : (
          <Box marginLeft={w1220 ? '' : '10px'}>
            {listArticles?.map(({ id, details, modifiedAt }) => {
              const { summary, summaryImage, content } =
                details?.find((el: IDetailArticle) => el.locale === 'en_US') ?? {};
              return (
                <ItemArticle
                  key={id}
                  id={id}
                  img={summaryImage ?? ''}
                  title={summary ?? ''}
                  modifiedAt={modifiedAt}
                  content={content ?? ''}
                />
              );
            })}
            {/* Pagination */}
            <Stack alignItems="center" marginBottom="20px">
              <Pagination
                size="small"
                count={Math.ceil(total / LIMIT_PAGE)}
                page={Number(page) || 1}
                onChange={(_, value) => changeParam('page', value)}
                showFirstButton
                showLastButton
              />
            </Stack>
          </Box>
        )
      ) : (
        <SkeletonListArticle />
      )}
    </article>
  );
};

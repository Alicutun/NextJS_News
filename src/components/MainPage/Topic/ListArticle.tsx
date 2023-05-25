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
  const { classes } = useStyles();
  const w1220 = useMediaQuery('(min-width:1220px)');
  const router = useRouter();
  const { page, locale } = router.query;
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
            {listArticles?.map(({ id, modifiedAt, summary, summaryImage, content }) => (
              <ItemArticle
                key={id}
                id={id}
                img={
                  summaryImage ??
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXn5+eUlJTq6uqRkZGVlZXi4uLm5ubNzc2ZmZnd3d3R0dG1tbXU1NTHx8e+vr6jo6OdnZ2pqamtra3Z2dmLi4uzs7PIyMjBwcGP1gM/AAADj0lEQVR4nO3X65KjOAyAUWRhYy4JkITk/d90JQNJemprenarpsOP71SFQDdOWUi+UFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUYQQ3i9+rO1fFtPWnZC6pqv2i6Fp2m/7meLzlqHp9ovQ/knbHxP6sSm9CcMoKvO1XKRLrZrv37U95dN60s7WdurWsM7Z2p7/Yp//m1Z0Lh1rs9RTLWP0i0XrnEWb32cijjKVkzSqt5XWzsNZxdueD5LFMEs9lJNe5BTOpWdhULmk1sJNv23bq949jnBS6UMjsthFrGWKcZI6/kT/vxUa3R52sgq1k0kmi/Ai2gYLV7o9EetE8mU6qa61rOkPk+TKW0mswkMt9fa78jhEEq3OcpkgPG2evUXkGuyvlr0wvEotdl0Xq1SOO4uoHvYCvwTPpMd2kcmKtZ38T5/nD/wR21gKTbvSS2mC9Xirt72X15veTqGx4yur9kyWtW1X77VtX1Op7bQP0Q+zUKZqsr5XPgKHUrVyD1Z+vQWSbCDuEYpFWy12HPa2FkNuL7fF2jai9hNV66OxyjL7v2cv3I+zmtR7mrx7NtFo6+mwpIZrSUYV6np6Zqy3krTUPgeiJ70PF/ts5Wk5V8/5Op5tBtNPhfUSBk9S+0cRVklkXJeDlQ20KaX54BFanQ026L5GKP8eoZXxWrvbpd1/D7YOeoT3Z4TLoSL0aOYUh6yPtI7D0lkbhzY8t3E4v+bDNtf1K4XXXOcULZFLeo7D6zYOR79hPMA4LFlR1bq2RKzLmE+utgb67G832JK/vJJ2sruf+xSbkaxZaTsGm0vLSlMq3OfSWJah8TNhvQn9TXWPcEuAFZet2skmwjU1r1XbdgST6L4a+sKhe4RVzD7prmVgs1e+eo7fns7HpGiS1eXDN2fWy+jZ8772vjiWFX2/13abeZj0ORBL22iPxaq0PJc2+PIRS52ffT+0bugOwPdtPoi8Pvurbbx8zvAt6XCSUqtFHOzCt67d+041rCug1afYS0m/bYFsC9c0+RgLvtsjtLlB7Q1IS1Aermopt/Ume3ewrA7l+NZ4i9DfRaytLR/lB8XbyjfvJT8n3G+3NcLU5+drXbhPqvPzNdYiVOu+fd2+Rni7baPtkbVe1vyGYVYdh6ME+C5sn1/P/09bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN4/HskdrpeKiZEAAAAASUVORK5CYII='
                }
                title={summary ?? ''}
                modifiedAt={modifiedAt}
                content={content ?? ''}
              />
            ))}
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

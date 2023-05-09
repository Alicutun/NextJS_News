import { IDataArticle } from '@/common';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  containerTopIndex: {
    width: '1200px',
    margin: '0 auto',
    marginBottom: '50px',
  },
  containerTopIndexRes: {
    width: '100%',
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
  boxContentItem: {
    background: '#009b28',
    display: 'inline-block',
  },

  textHeight40: {
    height: '40px',
    lineHeight: '20px',
    overflow: ' hidden',
  },
  textTopIndex: {
    marginTop: '5px',
    height: '45px',
    overflow: 'hidden',
    fontSize: '15px',
  },
  textTopIndexRes: {
    borderTop: '1px solid #eceeef',
    padding: '10px 0',
  },
}));

export const TopIndex: React.FC<{ listArticles: IDataArticle[] }> = ({ listArticles }) => {
  const { classes } = useStyles();
  const w1200 = useMediaQuery('(min-width:1200px)');
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w480 = useMediaQuery('(min-width:480px)');
  const router = useRouter();

  return (
    <Grid
      container
      height={w1024 ? 485 : ''}
      className={w1200 ? classes.containerTopIndex : classes.containerTopIndexRes}
    >
      <Grid
        item
        xs={w1024 ? 7 : 12}
        container={w1024 ? false : true}
        spacing={w1024 ? '' : 2}
        padding={w1024 ? '' : '0 20px'}
        overflow={w1024 ? 'hidden' : ''}
        height="100%"
        width="100%"
      >
        {w1024 ? (
          <img height="100%" src={listArticles[0].details[0].summaryImage} alt="" />
        ) : (
          <>
            {listArticles &&
              listArticles.slice(0, w480 ? 4 : 2).map((item) => (
                <Grid
                  item
                  xs={w480 ? 3 : 6}
                  key={item.id}
                  onClick={() => {
                    router.push({
                      pathname: '/news/[id]',
                      query: { id: item.id },
                    });
                  }}
                >
                  <img width="100%" src={item.details[0].summaryImage} alt="" />
                  <Typography fontSize="15px" color="#333" className={classes.textHeight40}>
                    {item.details[0].summary}
                  </Typography>
                </Grid>
              ))}
          </>
        )}
      </Grid>

      <Grid
        item
        width="100%"
        container
        xs={w1024 ? 5 : 12}
        spacing={w1024 ? 1 : 0}
        columnSpacing={w1024 ? 0 : 2}
        marginTop={w1024 ? '' : '10px'}
        padding={w1024 ? '0 0 0 16px' : '0 20px'}
      >
        {listArticles &&
          listArticles.slice(1).map((item) => (
            <Grid
              item
              container
              xs={w480 ? 6 : 12}
              key={item.id}
              onClick={() => {
                router.push({
                  pathname: '/news/[id]',
                  query: { id: listArticles[0].id },
                });
              }}
            >
              <Grid className={w1024 ? classes.itemTopIndex : ''} container>
                <Grid item height="120px" overflow="hidden" display={w1024 ? '' : 'none'}>
                  <img width="100%" src={item.details[0].summaryImage} alt="" />
                </Grid>
                <Grid width="100%" item padding={w1024 ? '0 14px' : ''}>
                  <Typography
                    display={w1024 ? '' : 'none'}
                    className={w1024 ? classes.boxContentItem : ''}
                    padding="0 5px"
                    fontSize="12px"
                  >
                    블록체인
                  </Typography>
                  <Typography
                    className={w1024 ? classes.textTopIndex : classes.textTopIndexRes}
                    noWrap={w1024 ? false : true}
                  >
                    {item.details[0].summary}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

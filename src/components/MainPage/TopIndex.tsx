import { BASE_URL, IDataArticle, IDataTopic, LIMIT_PAGE } from '@/common';
import { HotNewsIndex, TopStory } from '@/components';
import { Grid4x4 } from '@mui/icons-material';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import Link from 'next/link';
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
    width: '1200px',
    margin: '0 auto',
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

  boxContentItem: {
    background: '#009b28',
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
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w480 = useMediaQuery('(min-width:480px)');
  return (
    <Grid container height={w1024 ? 485 : ''} className={w1024 ? classes.containerTopIndex : ''}>
      <Grid
        item
        xs={w1024 ? 7 : 12}
        container={w1024 ? false : true}
        spacing={w1024 ? '' : 2}
        padding={w1024 ? '' : '0 20px'}
      >
        {w1024 ? (
          <img
            height="100%"
            width="100%"
            src="https://img.sedaily.com/Web/BlockChain/8931.jpg"
            alt=""
          />
        ) : (
          <>
            {listArticles.slice(0, w480 ? 4 : 2).map((item) => (
              <Grid item xs={w480 ? 3 : 6} key={item.id}>
                <img width="100%" src="https://img.sedaily.com/Web/BlockChain/8931.jpg" alt="" />
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
        padding={w1024 ? '0 0 0 32px' : '0 20px'}
      >
        {listArticles.slice(1).map((item) => (
          <Grid item container xs={w480 ? 6 : 12} key={item.id}>
            <Grid className={w1024 ? classes.itemTopIndex : ''} container>
              <Grid item height="120px" overflow="hidden" display={w1024 ? '' : 'none'}>
                <img width="100%" src="https://img.sedaily.com/Web/BlockChain/8929.jpg" alt="" />
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
{
  /* <Grid container spacing={2} height={485} className={w1024 ? classes.containerTopIndex : ''}>
  <Grid height="100%" item xs={7}>
    <Grid height="100%" width="100%" sx={{ background: 'orange' }}></Grid>
  </Grid>

  <Grid height="100%" item container xs={5}>
    {Array.from(Array(4)).map((_, index) => (
      <Grid item container xs={6} key={index} width="100%" sx={{ background: 'orange' }}></Grid>
    ))}
  </Grid>
</Grid>; */
}

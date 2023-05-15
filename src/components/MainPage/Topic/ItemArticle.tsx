import { IItemArticle } from '@/common';
import { formatTimeToYMD } from '@/utilities';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import React from 'react';
import { Marker } from 'react-mark.js';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  borderTop: {
    borderTop: '1px solid #e6e8eb',
  },
  box1: {
    border: 'solid 1px #ced2d7',
    background: '#f7f7f7',
    overflow: 'hidden',
  },
  itemTime: {
    color: '#888',
    paddingBottom: '3px',
    fontSize: '12px',
  },

  marker: {
    fontWeight: 'bold',
    background: 'none',
    color: '#247acd',
  },
}));

export const ItemArticle: React.FC<IItemArticle> = ({ id, img, title, modifiedAt, content }) => {
  //
  const router = useRouter();
  const { text } = router.query;

  const { classes } = useStyles();
  const w640 = useMediaQuery('(min-width:640px)');

  // let html = document.getElementById( ).innerHTML;
  // const input = document.getElementById('content') as HTMLInputElement | null;
  // input?.innerHTML;

  return (
    <Grid
      sx={{
        cursor: 'pointer',
      }}
      container
      className={classes.borderTop}
      padding="20px 0"
      onClick={() => {
        router.push({
          pathname: '/news/[id]',
          query: { id: id },
        });
      }}
    >
      <Grid
        item
        xs={2}
        container
        justifyContent="center"
        alignItems="center"
        className={classes.box1}
        height={w640 ? '77px' : '55px'}
      >
        <img height="100%" src={img} alt="" />
      </Grid>
      <Grid item xs={10} paddingLeft="15px">
        <Typography noWrap fontSize={20} color="#000" lineHeight="24px">
          {title}
        </Typography>
        <Typography className={classes.itemTime}>
          김정우 기자 | {formatTimeToYMD(modifiedAt)}
        </Typography>
        {/* use Marker to highlight-text */}
        <Marker mark={text} options={{ className: classes.marker }}>
          <Typography
            fontSize={13}
            color="#888888"
            lineHeight="19px"
            maxHeight="35px "
            className="textNoWrap2Word"
            display={w640 ? '' : 'none'}
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          {/* <div id="content"></div> */}
        </Marker>
      </Grid>
    </Grid>
  );
};

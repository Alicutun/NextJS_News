import { IDataArticle, IDetailArticle } from '@/common';
import { CustomImage } from '@/components/SubComponents';
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
    marginBottom: '50px',
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
        padding={w1024 ? '' : '0 20px'}
        overflow={w1024 ? 'hidden' : ''}
      >
        {w1024 ? (
          <CustomImage
            sx={{
              height: '100%',
              width: '100%',
              position: 'relative',
              cursor: 'pointer',
            }}
            src={
              listArticles[0]?.summaryImage ??
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXn5+eUlJTq6uqRkZGVlZXi4uLm5ubNzc2ZmZnd3d3R0dG1tbXU1NTHx8e+vr6jo6OdnZ2pqamtra3Z2dmLi4uzs7PIyMjBwcGP1gM/AAADj0lEQVR4nO3X65KjOAyAUWRhYy4JkITk/d90JQNJemprenarpsOP71SFQDdOWUi+UFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUYQQ3i9+rO1fFtPWnZC6pqv2i6Fp2m/7meLzlqHp9ovQ/knbHxP6sSm9CcMoKvO1XKRLrZrv37U95dN60s7WdurWsM7Z2p7/Yp//m1Z0Lh1rs9RTLWP0i0XrnEWb32cijjKVkzSqt5XWzsNZxdueD5LFMEs9lJNe5BTOpWdhULmk1sJNv23bq949jnBS6UMjsthFrGWKcZI6/kT/vxUa3R52sgq1k0kmi/Ai2gYLV7o9EetE8mU6qa61rOkPk+TKW0mswkMt9fa78jhEEq3OcpkgPG2evUXkGuyvlr0wvEotdl0Xq1SOO4uoHvYCvwTPpMd2kcmKtZ38T5/nD/wR21gKTbvSS2mC9Xirt72X15veTqGx4yur9kyWtW1X77VtX1Op7bQP0Q+zUKZqsr5XPgKHUrVyD1Z+vQWSbCDuEYpFWy12HPa2FkNuL7fF2jai9hNV66OxyjL7v2cv3I+zmtR7mrx7NtFo6+mwpIZrSUYV6np6Zqy3krTUPgeiJ70PF/ts5Wk5V8/5Op5tBtNPhfUSBk9S+0cRVklkXJeDlQ20KaX54BFanQ026L5GKP8eoZXxWrvbpd1/D7YOeoT3Z4TLoSL0aOYUh6yPtI7D0lkbhzY8t3E4v+bDNtf1K4XXXOcULZFLeo7D6zYOR79hPMA4LFlR1bq2RKzLmE+utgb67G832JK/vJJ2sruf+xSbkaxZaTsGm0vLSlMq3OfSWJah8TNhvQn9TXWPcEuAFZet2skmwjU1r1XbdgST6L4a+sKhe4RVzD7prmVgs1e+eo7fns7HpGiS1eXDN2fWy+jZ8772vjiWFX2/13abeZj0ORBL22iPxaq0PJc2+PIRS52ffT+0bugOwPdtPoi8Pvurbbx8zvAt6XCSUqtFHOzCt67d+041rCug1afYS0m/bYFsC9c0+RgLvtsjtLlB7Q1IS1Aermopt/Ume3ewrA7l+NZ4i9DfRaytLR/lB8XbyjfvJT8n3G+3NcLU5+drXbhPqvPzNdYiVOu+fd2+Rni7baPtkbVe1vyGYVYdh6ME+C5sn1/P/09bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN4/HskdrpeKiZEAAAAASUVORK5CYII='
            }
            altImage=""
          />
        ) : (
          <Grid container spacing={2}>
            {listArticles?.slice(0, w480 ? 4 : 2).map(({ summary, id, summaryImage }) => (
              <Grid
                item
                xs={w480 ? 3 : 6}
                key={id}
                onClick={() => {
                  router.replace({
                    pathname: '/[locale]/news/[id]',
                    query: { id: id, locale: router.query.locale },
                  });
                }}
                width="100%"
                sx={{ cursor: 'pointer' }}
              >
                <CustomImage
                  sx={{
                    width: '100%',
                    position: 'relative',
                    aspectRatio: '16/9',
                  }}
                  src={
                    summaryImage ??
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXn5+eUlJTq6uqRkZGVlZXi4uLm5ubNzc2ZmZnd3d3R0dG1tbXU1NTHx8e+vr6jo6OdnZ2pqamtra3Z2dmLi4uzs7PIyMjBwcGP1gM/AAADj0lEQVR4nO3X65KjOAyAUWRhYy4JkITk/d90JQNJemprenarpsOP71SFQDdOWUi+UFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUYQQ3i9+rO1fFtPWnZC6pqv2i6Fp2m/7meLzlqHp9ovQ/knbHxP6sSm9CcMoKvO1XKRLrZrv37U95dN60s7WdurWsM7Z2p7/Yp//m1Z0Lh1rs9RTLWP0i0XrnEWb32cijjKVkzSqt5XWzsNZxdueD5LFMEs9lJNe5BTOpWdhULmk1sJNv23bq949jnBS6UMjsthFrGWKcZI6/kT/vxUa3R52sgq1k0kmi/Ai2gYLV7o9EetE8mU6qa61rOkPk+TKW0mswkMt9fa78jhEEq3OcpkgPG2evUXkGuyvlr0wvEotdl0Xq1SOO4uoHvYCvwTPpMd2kcmKtZ38T5/nD/wR21gKTbvSS2mC9Xirt72X15veTqGx4yur9kyWtW1X77VtX1Op7bQP0Q+zUKZqsr5XPgKHUrVyD1Z+vQWSbCDuEYpFWy12HPa2FkNuL7fF2jai9hNV66OxyjL7v2cv3I+zmtR7mrx7NtFo6+mwpIZrSUYV6np6Zqy3krTUPgeiJ70PF/ts5Wk5V8/5Op5tBtNPhfUSBk9S+0cRVklkXJeDlQ20KaX54BFanQ026L5GKP8eoZXxWrvbpd1/D7YOeoT3Z4TLoSL0aOYUh6yPtI7D0lkbhzY8t3E4v+bDNtf1K4XXXOcULZFLeo7D6zYOR79hPMA4LFlR1bq2RKzLmE+utgb67G832JK/vJJ2sruf+xSbkaxZaTsGm0vLSlMq3OfSWJah8TNhvQn9TXWPcEuAFZet2skmwjU1r1XbdgST6L4a+sKhe4RVzD7prmVgs1e+eo7fns7HpGiS1eXDN2fWy+jZ8772vjiWFX2/13abeZj0ORBL22iPxaq0PJc2+PIRS52ffT+0bugOwPdtPoi8Pvurbbx8zvAt6XCSUqtFHOzCt67d+041rCug1afYS0m/bYFsC9c0+RgLvtsjtLlB7Q1IS1Aermopt/Ume3ewrA7l+NZ4i9DfRaytLR/lB8XbyjfvJT8n3G+3NcLU5+drXbhPqvPzNdYiVOu+fd2+Rni7baPtkbVe1vyGYVYdh6ME+C5sn1/P/09bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN4/HskdrpeKiZEAAAAASUVORK5CYII='
                  }
                  altImage=""
                />
                <Typography fontSize="15px" color="#333" className={classes.textHeight40}>
                  {summary}
                </Typography>
              </Grid>
            ))}
          </Grid>
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
        {listArticles?.slice(1).map((item) => (
          <Grid
            item
            container
            xs={w480 ? 6 : 12}
            key={item.id}
            onClick={() => {
              router.replace({
                pathname: '/[locale]/news/[id]',
                query: { id: listArticles[0].id, locale: router.query.locale },
              });
            }}
          >
            <Grid
              className={w1024 ? classes.itemTopIndex : ''}
              container
              sx={{ cursor: 'pointer' }}
            >
              <Grid
                item
                height="120px"
                width="100%"
                overflow="hidden"
                display={w1024 ? '' : 'none'}
              >
                <CustomImage
                  sx={{
                    width: '100%',
                    aspectRatio: '16/9',
                    position: 'relative',
                  }}
                  src={
                    item.summaryImage ??
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXn5+eUlJTq6uqRkZGVlZXi4uLm5ubNzc2ZmZnd3d3R0dG1tbXU1NTHx8e+vr6jo6OdnZ2pqamtra3Z2dmLi4uzs7PIyMjBwcGP1gM/AAADj0lEQVR4nO3X65KjOAyAUWRhYy4JkITk/d90JQNJemprenarpsOP71SFQDdOWUi+UFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUYQQ3i9+rO1fFtPWnZC6pqv2i6Fp2m/7meLzlqHp9ovQ/knbHxP6sSm9CcMoKvO1XKRLrZrv37U95dN60s7WdurWsM7Z2p7/Yp//m1Z0Lh1rs9RTLWP0i0XrnEWb32cijjKVkzSqt5XWzsNZxdueD5LFMEs9lJNe5BTOpWdhULmk1sJNv23bq949jnBS6UMjsthFrGWKcZI6/kT/vxUa3R52sgq1k0kmi/Ai2gYLV7o9EetE8mU6qa61rOkPk+TKW0mswkMt9fa78jhEEq3OcpkgPG2evUXkGuyvlr0wvEotdl0Xq1SOO4uoHvYCvwTPpMd2kcmKtZ38T5/nD/wR21gKTbvSS2mC9Xirt72X15veTqGx4yur9kyWtW1X77VtX1Op7bQP0Q+zUKZqsr5XPgKHUrVyD1Z+vQWSbCDuEYpFWy12HPa2FkNuL7fF2jai9hNV66OxyjL7v2cv3I+zmtR7mrx7NtFo6+mwpIZrSUYV6np6Zqy3krTUPgeiJ70PF/ts5Wk5V8/5Op5tBtNPhfUSBk9S+0cRVklkXJeDlQ20KaX54BFanQ026L5GKP8eoZXxWrvbpd1/D7YOeoT3Z4TLoSL0aOYUh6yPtI7D0lkbhzY8t3E4v+bDNtf1K4XXXOcULZFLeo7D6zYOR79hPMA4LFlR1bq2RKzLmE+utgb67G832JK/vJJ2sruf+xSbkaxZaTsGm0vLSlMq3OfSWJah8TNhvQn9TXWPcEuAFZet2skmwjU1r1XbdgST6L4a+sKhe4RVzD7prmVgs1e+eo7fns7HpGiS1eXDN2fWy+jZ8772vjiWFX2/13abeZj0ORBL22iPxaq0PJc2+PIRS52ffT+0bugOwPdtPoi8Pvurbbx8zvAt6XCSUqtFHOzCt67d+041rCug1afYS0m/bYFsC9c0+RgLvtsjtLlB7Q1IS1Aermopt/Ume3ewrA7l+NZ4i9DfRaytLR/lB8XbyjfvJT8n3G+3NcLU5+drXbhPqvPzNdYiVOu+fd2+Rni7baPtkbVe1vyGYVYdh6ME+C5sn1/P/09bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN4/HskdrpeKiZEAAAAASUVORK5CYII='
                  }
                  altImage=""
                />
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
                  {item.summary}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

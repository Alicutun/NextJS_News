import { IDataArticle, IDetailArticle } from '@/common';
import { CustomImage } from '@/components/SubComponents';
import { formatTimeToYMD } from '@/utilities';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  borderTopBottom: {
    borderBottom: '1px solid #d9d9d9',
    borderTop: '1px solid #d9d9d9',
  },
  borderTop9px: {
    borderTop: '9px solid #eceeef',
  },
  background: {
    background: '#f3f3f3',
  },
  textHeight40: {
    height: '40px',
    lineHeight: '20px',
    overflow: 'hidden',
  },
  text1024: {
    overflow: 'hidden',
    height: '50px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  textRes: {
    borderBottom: '1px solid #eceeef',
    padding: '10px 0',
  },
}));

export const HotNewsIndex: React.FC<{
  listArticle: IDataArticle[];
  background: boolean;
  nameTopic?: string;
  colorTopic?: string;
}> = ({ listArticle, background, nameTopic, colorTopic }) => {
  const { classes } = useStyles();
  const w1200 = useMediaQuery('(min-width:1200px)');
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w480 = useMediaQuery('(min-width:480px)');
  const router = useRouter();

  // fix bug dangerouslySetInnerHTML Error: Hydration failed because the initial UI does not match what was rendered on the server.
  const [listArticles, setDataListArticles] = useState<IDataArticle[]>([]);
  useEffect(() => {
    if (listArticle) {
      setDataListArticles(listArticle);
    }
    return () => {};
  }, [listArticle]);

  return (
    <Box className={w1024 ? (background ? classes.background : '') : ''} padding="70px 0">
      <Box width={w1200 ? '1200px' : '100%'} margin="0 auto">
        <Stack
          direction={w1024 ? 'column' : 'row'}
          justifyContent={w1024 ? '' : 'space-between'}
          className={w1024 ? '' : classes.borderTop9px}
          padding={w1024 ? '5px 0 15px 0' : '10px 20px 10px 20px'}
        >
          <Grid container justifyContent={w1024 ? 'center' : ''}>
            <Typography lineHeight="40px" fontSize={w1024 ? '32px' : '16px'}>
              {nameTopic}&nbsp;
            </Typography>
            <Box
              width={10}
              height={10}
              sx={{ background: `${colorTopic}`, borderRadius: '50%' }}
            ></Box>
          </Grid>
          {w1024 ? (
            <Typography textAlign="center" mb={1}>
              {nameTopic}
            </Typography>
          ) : (
            <NavigateNextIcon />
          )}
        </Stack>

        {w1024 ? (
          <></>
        ) : (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            padding="20px"
            className={classes.borderTopBottom}
            onClick={() => {
              router.replace({
                pathname: '[locale]/news/[id]',
                query: { id: listArticle[0].id, locale: router.query.locale },
              });
            }}
          >
            <Grid item xs={9}>
              <Box paddingRight="20px">
                <Typography
                  color="#000"
                  fontSize={w480 ? '20px' : '17px'}
                  fontWeight="bold"
                  lineHeight={w480 ? '40px' : 'none'}
                >
                  {listArticles[0]?.summary}
                </Typography>
                <Typography
                  color={w480 ? '#666' : '#999999'}
                  fontSize="14px"
                  margin="10px 0"
                  className={classes.textHeight40}
                >
                  {listArticles[0]?.content}
                </Typography>
                <Typography color="#999" fontSize="12px" display={w480 ? '' : 'none'}>
                  도예리 기자 yeri.do@ | {formatTimeToYMD(listArticle[0].createdAt)}
                </Typography>
              </Box>
            </Grid>
            <Grid item justifyContent="flex-end" xs={3}>
              <CustomImage
                sx={{
                  border: '1px solid #ced2d7',
                  width: '100%',
                  height: w480 ? '120px' : '70px',
                }}
                style={{ objectFit: 'contain' }}
                src={
                  listArticles[0]?.summaryImage ??
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEXn5+eUlJTq6uqRkZGVlZXi4uLm5ubNzc2ZmZnd3d3R0dG1tbXU1NTHx8e+vr6jo6OdnZ2pqamtra3Z2dmLi4uzs7PIyMjBwcGP1gM/AAADj0lEQVR4nO3X65KjOAyAUWRhYy4JkITk/d90JQNJemprenarpsOP71SFQDdOWUi+UFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAUYQQ3i9+rO1fFtPWnZC6pqv2i6Fp2m/7meLzlqHp9ovQ/knbHxP6sSm9CcMoKvO1XKRLrZrv37U95dN60s7WdurWsM7Z2p7/Yp//m1Z0Lh1rs9RTLWP0i0XrnEWb32cijjKVkzSqt5XWzsNZxdueD5LFMEs9lJNe5BTOpWdhULmk1sJNv23bq949jnBS6UMjsthFrGWKcZI6/kT/vxUa3R52sgq1k0kmi/Ai2gYLV7o9EetE8mU6qa61rOkPk+TKW0mswkMt9fa78jhEEq3OcpkgPG2evUXkGuyvlr0wvEotdl0Xq1SOO4uoHvYCvwTPpMd2kcmKtZ38T5/nD/wR21gKTbvSS2mC9Xirt72X15veTqGx4yur9kyWtW1X77VtX1Op7bQP0Q+zUKZqsr5XPgKHUrVyD1Z+vQWSbCDuEYpFWy12HPa2FkNuL7fF2jai9hNV66OxyjL7v2cv3I+zmtR7mrx7NtFo6+mwpIZrSUYV6np6Zqy3krTUPgeiJ70PF/ts5Wk5V8/5Op5tBtNPhfUSBk9S+0cRVklkXJeDlQ20KaX54BFanQ026L5GKP8eoZXxWrvbpd1/D7YOeoT3Z4TLoSL0aOYUh6yPtI7D0lkbhzY8t3E4v+bDNtf1K4XXXOcULZFLeo7D6zYOR79hPMA4LFlR1bq2RKzLmE+utgb67G832JK/vJJ2sruf+xSbkaxZaTsGm0vLSlMq3OfSWJah8TNhvQn9TXWPcEuAFZet2skmwjU1r1XbdgST6L4a+sKhe4RVzD7prmVgs1e+eo7fns7HpGiS1eXDN2fWy+jZ8772vjiWFX2/13abeZj0ORBL22iPxaq0PJc2+PIRS52ffT+0bugOwPdtPoi8Pvurbbx8zvAt6XCSUqtFHOzCt67d+041rCug1afYS0m/bYFsC9c0+RgLvtsjtLlB7Q1IS1Aermopt/Ume3ewrA7l+NZ4i9DfRaytLR/lB8XbyjfvJT8n3G+3NcLU5+drXbhPqvPzNdYiVOu+fd2+Rni7baPtkbVe1vyGYVYdh6ME+C5sn1/P/09bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHN4/HskdrpeKiZEAAAAASUVORK5CYII='
                }
                altImage=""
              />
            </Grid>
          </Grid>
        )}
        {/*  */}
        <Grid
          container
          spacing={w1024 ? 1 : 2}
          padding={w1024 ? '' : '0 20px'}
          height={w1024 ? '' : 105}
          overflow={w1024 ? '' : 'hidden'}
        >
          {listArticles?.slice(w1024 ? 0 : 1).map((item) => (
            <Grid
              item
              xs={w1024 ? 2.4 : w480 ? 6 : 12}
              key={item.id}
              onClick={() => {
                router.replace({
                  pathname: '/[locale]/news/[id]',
                  query: { id: item.id, locale: router.query.locale },
                });
              }}
              width="100%"
            >
              <Box
                sx={
                  w1024
                    ? {
                        border: '1px solid #d9d9d9',
                        cursor: 'pointer',
                        background: 'white',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          transition: '0.4s',
                          background: `${colorTopic}`,
                          border: `1px solid ${colorTopic}`,
                          '& .MuiTypography-root': {
                            color: 'white',
                          },
                        },
                      }
                    : {}
                }
              >
                {w1024 ? (
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
                ) : (
                  ''
                )}
                <Box padding={w1024 ? '20px 15px' : ''}>
                  <Typography
                    noWrap={w1024 ? false : true}
                    className={w1024 ? classes.text1024 : classes.textRes}
                  >
                    {item.summary}
                  </Typography>
                  <Typography
                    display={w1024 ? '' : 'none'}
                    fontSize="13px"
                    height="36px"
                    color="#666"
                    className="textNoWrap2Word"
                    dangerouslySetInnerHTML={{
                      __html: item.content ?? '',
                    }}
                  ></Typography>
                  <Typography
                    display={w1024 ? '' : 'none'}
                    color="#999"
                    fontSize="12px"
                    marginTop="9px"
                  >
                    임진혁 기자 {formatTimeToYMD(item.createdAt)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

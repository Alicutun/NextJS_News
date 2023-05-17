import { IDataArticle } from '@/common';
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
        {/*  */}
        {w1024 ? (
          <></>
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            margin="0 20px"
            padding="20px 0"
            className={classes.borderTopBottom}
            onClick={() => {
              router.push({
                pathname: '/news/[id]',
                query: { id: listArticle[0].id },
              });
            }}
          >
            <Box paddingRight="20px">
              <Typography
                color="#000"
                fontSize={w480 ? '20px' : '17px'}
                fontWeight="bold"
                lineHeight={w480 ? '40px' : 'none'}
              >
                {/* {listArticles[0].details?.[0].summary} */}
              </Typography>
              <Typography
                color={w480 ? '#666' : '#999999'}
                fontSize="14px"
                margin="10px 0"
                className={classes.textHeight40}
              >
                {/* {listArticles[0].details?.[0].content} */}
              </Typography>
              <Typography color="#999" fontSize="12px" display={w480 ? '' : 'none'}>
                도예리 기자 yeri.do@ | {formatTimeToYMD(listArticle[0].createdAt)}
              </Typography>
            </Box>
            <Box
              width={w480 ? '215px' : '115px'}
              height={w480 ? '120px' : '70px'}
              sx={{
                position: 'relative',
              }}
            >
              <Image fill src={listArticle[0].details?.[0].summaryImage} alt="" />
            </Box>
          </Stack>
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
                router.push({
                  pathname: '/news/[id]',
                  query: { id: item.id },
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
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '16/9',
                      position: 'relative',
                    }}
                  >
                    <Image fill src={item.details?.[0].summaryImage} alt="" />
                  </Box>
                ) : (
                  ''
                )}
                <Box padding={w1024 ? '20px 15px' : ''}>
                  <Typography
                    noWrap={w1024 ? false : true}
                    className={w1024 ? classes.text1024 : classes.textRes}
                  >
                    {item.details?.[0].summary}
                  </Typography>
                  <Typography
                    display={w1024 ? '' : 'none'}
                    fontSize="13px"
                    height="36px"
                    color="#666"
                    className="textNoWrap2Word"
                    dangerouslySetInnerHTML={{
                      __html: item.details?.[0].content,
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

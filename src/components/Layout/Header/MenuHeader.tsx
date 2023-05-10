import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from 'tss-react/mui';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { BASE_URL, IDaTaTopic } from '@/common';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import { ModalSearch } from '@/components/Modal';

const useStyles = makeStyles()(() => ({
  boxMenu: {
    borderTop: '1px solid #e6e6e6',
    borderBottom: '1px solid #888',
    background: 'white',
  },
  boxMenuFixed: {
    borderTop: '1px solid #e6e6e6',
    borderBottom: '1px solid #888',
    background: 'white',
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    zIndex: '10',
  },
  boxMenuBackground: {
    background: '#28417a',
  },
  subMenuMid: {
    textDecoration: 'none',
    color: '#1e181a',
  },
  subMenuMidRes: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
}));

export const MenuHeader = () => {
  //
  const { classes } = useStyles();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [fixedMenu, setFixedMenu] = useState<boolean>(false);
  const w1220 = useMediaQuery('(min-width:1220px)');
  const w1024 = useMediaQuery('(min-width:1024px)');

  //
  const [listTopics, setListTopics] = useState<IDaTaTopic[]>([]);

  // handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 140) {
        setFixedMenu(true);
      } else {
        setFixedMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const router = useRouter();

  useEffect(() => {
    const fetchArticle = async () => {
      const { data } = await axios.get(`${BASE_URL}/topics`);
      setListTopics(data);
    };

    fetchArticle();
    return () => {};
  }, []);

  return (
    <Box
      padding="10px 0"
      className={
        w1024 ? (fixedMenu ? classes.boxMenuFixed : classes.boxMenu) : classes.boxMenuBackground
      }
    >
      {/* show modal search */}
      {openModal && <ModalSearch openModal={openModal} setOpenModal={setOpenModal} />}

      <Container disableGutters>
        <Stack
          direction="row"
          justifyContent={w1024 ? 'space-between' : 'center'}
          alignItems="center"
        >
          {/* Menu left */}
          <Stack
            direction="row"
            padding={w1220 ? '5px 0 0 0' : '5px 0 0 20px '}
            columnGap={1.5}
            width={150}
            display={w1024 ? 'flex' : 'none'}
          >
            <TelegramIcon sx={{ fontSize: '25px' }} />
            <YouTubeIcon sx={{ fontSize: '25px' }} />
            <FacebookIcon sx={{ fontSize: '25px' }} />
            <InstagramIcon sx={{ fontSize: '25px' }} />
          </Stack>

          {/* Menu mid */}
          <Grid
            container
            justifyContent="center"
            columnGap={2}
            direction="row"
            fontSize={w1024 ? '20px' : '18px'}
          >
            {listTopics.length > 0 &&
              listTopics?.map((item) => (
                <Button
                  disabled={Number(router.query.menuId) === Number(item.id) ? true : false}
                  // disabled
                  key={item.id}
                  onClick={() => {
                    router.push({
                      pathname: '/[name]',
                      query: { name: item.id },
                    });
                  }}
                >
                  <Typography
                    noWrap
                    component="a"
                    sx={{
                      textDecoration: 'none',
                      color: w1024
                        ? Number(router.query.menuId) === Number(item.id)
                          ? 'blue'
                          : '#000'
                        : '#fff',
                    }}
                  >
                    {item.name}
                  </Typography>
                </Button>
              ))}
            <Button
              // disabled
              disabled={String(router.query.menuId) === 'issue' ? true : false}
              onClick={() => {
                router.push({
                  pathname: '/issue',
                });
              }}
            >
              <Typography
                noWrap
                component="a"
                sx={{
                  textDecoration: 'none',
                  color: w1024 ? (String(router.pathname) === '/issue' ? 'blue' : '#000') : '#fff',
                }}
              >
                Issue
              </Typography>
            </Button>
          </Grid>

          {/* Menu right */}
          <Stack
            direction="row"
            padding={w1220 ? '5px 0 0 0' : '5px 20px 0 0'}
            columnGap={1.5}
            justifyContent="flex-end"
            width={150}
            display={w1024 ? 'flex' : 'none'}
          >
            <EmailIcon sx={{ fontSize: '25px' }} />
            <SearchIcon
              onClick={() => setOpenModal(!openModal)}
              sx={{ fontSize: '25px', cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

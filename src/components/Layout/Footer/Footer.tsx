import FacebookIcon from '@mui/icons-material/Facebook';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { MenuFooter } from './MenuFooter';

const useStyles = makeStyles()(() => ({
  addressRes: {
    color: '#999',
    borderTop: '1px solid #3f3f3f',
    borderBottom: '1px solid #3f3f3f',
  },
}));

export const Footer = () => {
  //
  const { classes } = useStyles();
  const w1024 = useMediaQuery('(min-width:1024px)');
  return (
    <footer>
      <Container disableGutters>
        {/* Link */}
        <Stack
          mt="100px"
          justifyContent={w1024 ? 'flex-end' : 'center'}
          direction="row"
          columnGap="10px"
        >
          디센터를 Follow 하세요
          <FacebookIcon />
          <TwitterIcon />
          <ForwardToInboxIcon />
          <LinkIcon />
        </Stack>

        {/* menu footer */}
        <MenuFooter />

        {/* address */}
        <Stack
          direction="column"
          spacing={1}
          p="20px 30px"
          sx={{ background: w1024 ? 'white' : '#303030' }}
          className={w1024 ? '' : classes.addressRes}
        >
          <img
            width="155px"
            src={
              w1024
                ? 'https://branchimg.sedaily.com/Decenter/footer_logo.jpg'
                : 'https://branchimg.sedaily.com/Decenter/m_footer_log.svg'
            }
            alt=""
          />
          <Grid container>
            <Typography>주소 : 서울 종로구 율곡로 6, 비동 14층</Typography>
            <Typography>대표전화 : ☏ 070-4178-6638</Typography>
          </Grid>
          <Grid container>
            <Typography>등록번호 :서울 아 05049 </Typography>
            <Typography>제호 :디센터</Typography>
            <Typography>등록일자 : 2018.03.27</Typography>
            <Typography>발행 ·편집인 : 손동영</Typography>
            <Typography>청소년보호책임자 : 손동영</Typography>
          </Grid>
          <Typography>Copyright ⓒ Decenter, All right reserved</Typography>
        </Stack>
      </Container>
    </footer>
  );
};

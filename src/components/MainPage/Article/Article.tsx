import React from 'react';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import SubjectIcon from '@mui/icons-material/Subject';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import TextField from '@mui/material/TextField';
import { useReactToPrint } from 'react-to-print';
import { makeStyles } from 'tss-react/mui';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { IDataArticle, LIMIT_COMMENT } from '@/common';
import { formatTimeToYMD_HMS } from '@/utilities';

const useStyles = makeStyles()(() => ({
  main: {
    position: 'relative',
    marginBottom: '30px',
  },
  mainRes1220: {
    margin: '0 0 30px 20px',
  },
  mainRes1024: {
    margin: '0 20px 30px',
  },
  topNews: {
    paddingBottom: '10px',
    marginBottom: '20px',
    borderBottom: '1px solid #ced2d7',
  },
  buttonP: {
    cursor: 'pointer',
    textAlign: 'right',
  },
  buttonC: {
    color: 'gray.500',
  },
}));

export const Article: React.FC<{ dataNews: IDataArticle }> = ({ dataNews }) => {
  //
  const { classes } = useStyles();
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w1220 = useMediaQuery('(min-width:1220px)');
  //
  const [text, setText] = React.useState<string>('');
  const [count, setCount] = React.useState<number>(0);

  // fix bug dangerouslySetInnerHTML Error: Hydration failed because the initial UI does not match what was rendered on the server.
  const [dataContent, setDataContent] = React.useState<any>('');
  React.useEffect(() => {
    setDataContent(dataNews.details[0].content);
    return () => {};
  }, []);

  // func count word in comment
  const handleChange = (e: any) => {
    const length = e.target.value.toString().length;
    if (length <= LIMIT_COMMENT) {
      setText(e.target.value);
      setCount(length);
    }
  };

  // func print PDF
  const componentPDF = React.useRef(null);
  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
  });

  return (
    <article className={w1220 ? classes.main : w1024 ? classes.mainRes1220 : classes.mainRes1024}>
      <Box position="absolute" left={-180}>
        <img src="https://tpc.googlesyndication.com/simgad/6913498388766754588" alt="" />
      </Box>
      <Grid container direction="column" className={classes.topNews}>
        <Typography marginBottom="10px" variant="h2" fontSize="32px" fontWeight="bold">
          {dataNews.details[0].summary}
        </Typography>

        <Grid item container marginBottom="15px" fontSize={12} gap="32px">
          <Box>입력 {formatTimeToYMD_HMS(dataNews.createDate)}</Box>
          <Box>수정 {formatTimeToYMD_HMS(dataNews.editDate)}</Box>
          <Box>김정우 기자</Box>
        </Grid>

        <Grid item container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item xs={6} container gap="10px">
            <FacebookShareButton url={'https://www.decenter.kr/NewsView/29OATPNBV1/GZ03'}>
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={'https://www.decenter.kr/NewsView/29OATPNBV1/GZ03'}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>
            <EmailShareButton url={'https://www.decenter.kr/NewsView/29OATPNBV1/GZ03'}>
              <EmailIcon size={40} round={true} />
            </EmailShareButton>
          </Grid>

          <Grid item xs={6} container justifyContent="flex-end" gap="10px">
            <SubjectIcon />
            <PrintIcon sx={{ cursor: 'pointer' }} onClick={generatePDF} />
          </Grid>
        </Grid>
      </Grid>
      {/* print */}
      <Box
        width="100%"
        overflow="hidden"
        ref={componentPDF}
        dangerouslySetInnerHTML={{ __html: dataContent }}
      />

      <Grid container direction="column" spacing={2} paddingTop="100px">
        <Grid item container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item xs={6} container gap="10px">
            <FacebookIcon size={40} round={true} />
            <FacebookIcon size={40} round={true} />
            <FacebookIcon size={40} round={true} />
          </Grid>

          <Grid item xs={6} container justifyContent="flex-end">
            <QuestionAnswerIcon />
          </Grid>
        </Grid>

        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item xs={6} container gap="10px">
            <Typography fontWeight="bold">최신순</Typography>
            <Typography color="red" fontWeight="bold">
              0
            </Typography>
          </Grid>

          <Grid item xs={6} container gap="15px" justifyContent="flex-end">
            <Typography color="red" fontWeight="bold">
              최신순
            </Typography>
            <Typography fontWeight="bold">인기순</Typography>
          </Grid>
        </Grid>

        <Grid item container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              multiline
              fullWidth
              placeholder="댓글 이용 시 클린한 댓글을 입력해 주세요"
              inputProps={{ maxLength: LIMIT_COMMENT }}
              value={text}
              onChange={handleChange}
            />
          </Grid>

          <Grid
            item
            xs={12}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Typography variant="body2" color="grey.500">
                {count}/{LIMIT_COMMENT}
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.buttonP}>
              <Button variant="text" className={classes.buttonC}>
                Post
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Typography sx={{ textAlign: 'center' }}>등록된 댓글이 없습니다.</Typography>

        <Grid item container>
          <Grid item container xs={6} justifyContent={'center'}>
            <Box width={250} height={250} sx={{ background: 'gray' }}></Box>
          </Grid>
          <Grid item container xs={6} justifyContent={'center'}>
            <Box width={250} height={250} sx={{ background: 'gray' }}></Box>
          </Grid>
        </Grid>
      </Grid>
    </article>
  );
};
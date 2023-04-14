import {
	Box,
	Button,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import * as React from "react";
import PrintIcon from "@mui/icons-material/Print";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SubjectIcon from "@mui/icons-material/Subject";
import LinkIcon from "@mui/icons-material/Link";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TextField from "@mui/material/TextField";

import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	root: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
	articleNews: {
		position: "relative",
		marginBottom: "30px",
	},
	articleNewsRes1220: {
		margin: "0 0 30px 20px",
	},
	articleNewsRes1024: {
		margin: "0 20px 30px",
	},
	topNews: {
		paddingBottom: "20px",
		borderBottom: "1px solid #ced2d7",
	},
	buttonP: {
		cursor: "pointer",
		textAlign: "right",
	},
	buttonC: {
		color: "gray.500",
	},
}));
export interface ArticleNewsProps {}

const LIMIT_LENGTH = 500;

export function ArticleNews(props: ArticleNewsProps) {
	const { classes, cx } = useStyles({ color: "red" });

	const [text, setText] = React.useState("");
	const [count, setCount] = React.useState(0);

	const handleChange = (e: any) => {
		const length = e.target.value.toString().length;
		if (length <= LIMIT_LENGTH) {
			setText(e.target.value);
			setCount(length);
		}
	};
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w1220 = useMediaQuery("(min-width:1220px)");

	return (
		<article
			className={
				w1220
					? classes.articleNews
					: w1024
					? classes.articleNewsRes1220
					: classes.articleNewsRes1024
				// w1220 ? classes.articleNews : w1024 ? C : classes.articleNewsRes1024
			}
		>
			<Box position='absolute' left='-180px'>
				<img
					src='https://tpc.googlesyndication.com/simgad/6913498388766754588'
					alt=''
				/>
			</Box>
			<Grid container direction='column' className={classes.topNews}>
				<Grid item xs>
					<Typography
						marginBottom='10px'
						variant='h2'
						fontSize='32px'
						fontWeight='bold'
					>
						델리오 “토큰증권 지갑 서비스 제공”
					</Typography>
				</Grid>

				<Grid item container marginBottom='15px' fontSize='12px' gap='32px'>
					<Box>입력 2023-04-05 11:16:37</Box>
					<Box>수정 2023.04.05 11:16:37</Box>
					<Box>김정우 기자</Box>
				</Grid>

				<Grid
					item
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Grid item xs={6} container gap='10px'>
						<FacebookIcon />
						<TwitterIcon />
						<ForwardToInboxIcon />
						<LinkIcon />
					</Grid>
					<Grid item xs={6} container justifyContent='flex-end' gap='10px'>
						<SubjectIcon />
						<PrintIcon />
					</Grid>
				</Grid>
			</Grid>
			<h1>Call api text editor</h1>
			<Grid container direction='column' spacing={2} paddingTop='100px'>
				<Grid
					item
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Grid item xs={6} container gap='10px'>
						<FacebookIcon />
						<TwitterIcon />
						<ForwardToInboxIcon />
						<LinkIcon />
					</Grid>

					<Grid item xs={6} container justifyContent='flex-end'>
						<QuestionAnswerIcon />
					</Grid>
				</Grid>

				<Grid item container justifyContent='space-between' alignItems='center'>
					<Grid item xs={6} container gap='10px'>
						<Typography fontWeight='bold'>최신순</Typography>
						<Typography color='red' fontWeight='bold'>
							0
						</Typography>
					</Grid>

					<Grid item xs={6} container gap='15px' justifyContent='flex-end'>
						<Typography color='red' fontWeight='bold'>
							최신순
						</Typography>
						<Typography fontWeight='bold'>인기순</Typography>
					</Grid>
				</Grid>

				<Grid item container rowSpacing={2}>
					<Grid item xs={12}>
						<TextField
							multiline
							fullWidth
							placeholder='댓글 이용 시 클린한 댓글을 입력해 주세요'
							inputProps={{ maxLength: LIMIT_LENGTH }}
							value={text}
							onChange={handleChange}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						container
						direction='row'
						justifyContent='space-between'
						alignItems='center'
					>
						<Grid item xs={6}>
							<Typography variant='body2' color='grey.500'>
								{count}/{LIMIT_LENGTH}
							</Typography>
						</Grid>

						<Grid item xs={6} className={classes.buttonP}>
							<Button variant='text' className={classes.buttonC}>
								댓글등록
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Typography sx={{ textAlign: "center" }}>
					등록된 댓글이 없습니다.
				</Typography>
				<Grid item container>
					<Grid item container xs={6} justifyContent={"center"}>
						<Box
							sx={{
								width: "300px",
								height: "300px",
								background: "gray",
							}}
						></Box>
					</Grid>
					<Grid item container xs={6} justifyContent={"center"}>
						<Box
							sx={{ width: "300px", height: "300px", background: "gray" }}
						></Box>
					</Grid>
				</Grid>
			</Grid>
		</article>
	);
}

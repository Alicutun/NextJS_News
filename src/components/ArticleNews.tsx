import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import PrintIcon from "@mui/icons-material/Print";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SubjectIcon from "@mui/icons-material/Subject";
import LinkIcon from "@mui/icons-material/Link";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TextField from "@mui/material/TextField";

export interface ArticleNewsProps {}

const LIMIT_LENGTH = 500;

export default function ArticleNews(props: ArticleNewsProps) {
	const [text, setText] = React.useState("");
	const [count, setCount] = React.useState(0);

	const handleChange = (e: any) => {
		const length = e.target.value.toString().length;
		if (length <= LIMIT_LENGTH) {
			setText(e.target.value);
			setCount(length);
		}
	};

	return (
		<article>
			<Grid
				container
				direction='column'
				rowSpacing={2}
				sx={{ paddingBottom: "20px", borderBottom: "1px solid #ced2d7" }}
			>
				<Grid item xs>
					<Typography
						variant='h2'
						sx={{ fontSize: "32px", fontWeight: "bold" }}
					>
						델리오 “토큰증권 지갑 서비스 제공”
					</Typography>
				</Grid>

				<Grid item container sx={{ fontSize: "12px", gap: "32px" }}>
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
					<Grid item xs={6} container sx={{ gap: "10px" }}>
						<FacebookIcon />
						<TwitterIcon />
						<ForwardToInboxIcon />
						<LinkIcon />
					</Grid>
					<Grid
						item
						xs={6}
						container
						justifyContent='flex-end'
						sx={{ gap: "10px" }}
					>
						<SubjectIcon />
						<PrintIcon />
					</Grid>
				</Grid>
			</Grid>
			<h1>Call api text editor</h1>
			<Grid
				container
				direction='column'
				spacing={2}
				sx={{ paddingTop: "100px" }}
			>
				<Grid
					item
					container
					direction='row'
					justifyContent='space-between'
					alignItems='center'
				>
					<Grid item xs={6} container sx={{ gap: "10px" }}>
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
					<Grid item xs={6} container sx={{ gap: "10px" }}>
						<Typography sx={{ fontWeight: "bold" }}>최신순</Typography>
						<Typography sx={{ color: "red", fontWeight: "bold" }}>0</Typography>
					</Grid>

					<Grid
						item
						xs={6}
						container
						sx={{ gap: "15px" }}
						justifyContent='flex-end'
					>
						<Typography sx={{ color: "red", fontWeight: "bold" }}>
							최신순
						</Typography>
						<Typography sx={{ fontWeight: "bold" }}>인기순</Typography>
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
							<Typography variant='body2' sx={{ color: "grey.500" }}>
								{count}/{LIMIT_LENGTH}
							</Typography>
						</Grid>

						<Grid item xs={6} sx={{ cursor: "pointer", textAlign: "right" }}>
							<Button variant='text' sx={{ color: "grey.500" }}>
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

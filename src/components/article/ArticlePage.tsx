import * as React from "react";
import DoneIcon from "@mui/icons-material/Done";
import {
	Box,
	Grid,
	Pagination,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import Link from "next/link";

import { makeStyles } from "tss-react/mui";
import { useRouter } from "next/router";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	root: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
	boder: {
		border: "1px solid #e6e8eb",
	},
	boderTop: {
		borderTop: "1px solid #e6e8eb",
	},
	box1: {
		border: "solid 1px #ced2d7",
		background: "#f7f7f7",
	},
	itemTime: {
		color: "#888",
		paddingBottom: " 3px",
		fontSize: "12px",
	},
	itemContent: {
		fontSize: "13px",
		color: "#888888",
		lineHeight: "19px",
		overflow: "hidden",
		maxHeight: "35px ",
	},
}));

export function ArticlePage({ listArticle }: any) {
	// console.log("propsList", listArticle);
	const { classes, cx } = useStyles({ color: "red" });
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w640 = useMediaQuery("(min-width:640px)");
	const router = useRouter();
	return (
		<article>
			{/* Category */}
			<Stack
				direction='row'
				className={classes.box1}
				padding='10px 0px 10px 10px'
				columnGap={2}
			>
				<DoneIcon style={{ color: "orange" }} />
				<Typography>최신순 | 인기도순</Typography>
			</Stack>
			{/* List */}
			<Box marginLeft={w1220 ? "" : "10px"}>
				{listArticle?.map((item: any) => (
					<Grid
						container
						className={classes.boderTop}
						padding='20px 0'
						key={item.id}
						onClick={() => {
							router.push({
								pathname: "/News/[name]",
								query: { name: item.id },
							});
						}}
					>
						<Grid item xs={2}>
							<Stack alignItems='center' className={classes.box1}>
								<img
									height={w640 ? "75px" : "50px"}
									src='https://newsimg.sedaily.com/2023/04/05/29O6OUJHMV_1_s.png'
									alt=''
								/>
							</Stack>
						</Grid>
						<Grid item xs={10}>
							<Box marginLeft='10px'>
								<Typography fontSize='20px' color='#000' lineHeight='24px'>
									{item.details[0].summary}
								</Typography>
								<Typography className={classes.itemTime}>
									김정우 기자 | {item.editDate}
								</Typography>
								<Typography
									className={classes.itemContent}
									display={w640 ? "" : "none"}
								>
									델리오는 토큰 증권(ST)을 보관·관리할 수 있는 지갑 서비스를
									제공한다고 5일 밝혔다. 델리오는 현재 운영하고 있는 금고형
									가상자산 전문 지갑 ‘볼트(Vault)’를 활용해 기관·개인에게 토큰
									증권 지갑 서비스를 제공할 예정이다. 볼트는 비트코인(BTC),
									이더리움(ETH) 등 가상자산과 대체불가토큰(NFT) 등 디지털자산을
									보관관리할 수 있는 디지털자산 지갑이다.
									△멀티시그(Multi-signature) △소유자자격증명 △탈중앙 출금
								</Typography>
							</Box>
						</Grid>
					</Grid>
				))}
			</Box>
			<Stack alignItems='center' marginBottom='20px'>
				<Pagination size='small' count={10} showFirstButton showLastButton />
			</Stack>
		</article>
	);
}

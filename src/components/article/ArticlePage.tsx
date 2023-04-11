import * as React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import Link from "next/link";

export interface ArticlePageProps {}

export function ArticlePage(props: ArticlePageProps) {
	return (
		<article className='left'>
			<Box
				sx={{
					border: "solid 1px #ced2d7",
					background: "#f7f7f7",
				}}
			>
				<Grid container m={"10px 10px 5px 10px"} columnGap={2}>
					<Grid item>
						<DoneIcon style={{ color: "orange" }} />
					</Grid>
					<Grid item>
						<Typography>최신순 | 인기도순</Typography>
					</Grid>
				</Grid>
			</Box>
			<Box>
				{Array.from(Array(5)).map((_, index) => (
					<Link href='/News' key={index} style={{ textDecoration: "none" }}>
						<Box
							sx={{
								borderTop: "1px solid #e6e8eb",
								padding: "20px 0 20px 0",
							}}
						>
							<Grid container>
								<Grid item xs={2}>
									<Box sx={{ border: "1px solid #e6e8eb" }}>
										<Stack alignItems='center'>
											<img
												width={"85%"}
												src='https://newsimg.sedaily.com/2023/04/05/29O6OUJHMV_1_s.png'
												alt=''
											/>
										</Stack>
									</Box>
								</Grid>
								<Grid item xs={10}>
									<Box sx={{ marginLeft: "10px" }}>
										<Typography
											sx={{
												fontSize: "20px",
												color: "#000",
												lineHeight: "24px",
											}}
										>
											델리오 “토큰증권 지갑 서비스 제공”
										</Typography>
										<Typography
											sx={{
												color: "#888",
												paddingBottom: " 3px",
												fontSize: "12px",
											}}
										>
											김정우 기자 | 2023-04-05
										</Typography>
										<Typography
											sx={{
												fontSize: "13px",
												color: "#888888",
												lineHeight: "19px",
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "normal",
												maxHeight: "35px ",
												textAlign: "left",
												wordWrap: "breakWord",
												display: "WebkitBox",
												WebkitLineClamp: "2",
												WebkitBoxOrient: "vertical",
											}}
										>
											델리오는 토큰 증권(ST)을 보관·관리할 수 있는 지갑 서비스를
											제공한다고 5일 밝혔다. 델리오는 현재 운영하고 있는 금고형
											가상자산 전문 지갑 ‘볼트(Vault)’를 활용해 기관·개인에게
											토큰 증권 지갑 서비스를 제공할 예정이다. 볼트는
											비트코인(BTC), 이더리움(ETH) 등 가상자산과
											대체불가토큰(NFT) 등 디지털자산을 보관관리할 수 있는
											디지털자산 지갑이다. △멀티시그(Multi-signature)
											△소유자자격증명 △탈중앙 출금
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Link>
				))}
			</Box>
			<Stack alignItems='center'>
				<Pagination size='small' count={10} showFirstButton showLastButton />
			</Stack>
		</article>
	);
}

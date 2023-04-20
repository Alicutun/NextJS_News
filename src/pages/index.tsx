import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Image from "next/image";
import { Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TopStory } from "@/components";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	broder: {
		border: "1px solid #d9d9d9",
	},
	broderTopBottom: {
		borderBottom: "1px solid #d9d9d9",
		borderTop: "1px solid #d9d9d9",
	},
	broderTop9px: {
		borderTop: "9px solid #eceeef",
	},
	backgroundf3f3f3: {
		background: "#f3f3f3",
	},
	containerTopIndex: {
		marginBottom: "50px",
	},
	displayNone: {
		display: "none",
	},
	mainTopIndex: {
		overflow: "hidden",
		// position: "relative",
	},
	itemTopIndex: {
		cursor: "pointer",
		border: "1px solid #d9d9d9",
		"&:hover": {
			transform: "translateY(-3px)",
			transition: "0.4s",
			boxShadow: "1px 2px 4px #888",
		},
	},
	containerItemTopIndex: {
		height: "137px",
		overflow: "hidden",
	},
	boxContentItem: {
		background: "#009b28",
		lineHeight: "22px",
		display: "inline-block",
	},
	boxItemLine: {
		border: "1px solid #d9d9d9",
		cursor: "pointer",
		background: "white",
		"&:hover": {
			transform: "translateY(-10px)",
			transition: "0.4s",
			background: "#009b28",
			border: "1px solid #009b28",
			"& .MuiTypography-root": {
				color: "white",
			},
		},
	},
	iconTopStory: {
		transform: "scale(0.6)",
	},
	textHeight40: {
		height: "40px",
		lineHeight: "20px",
		overflow: " hidden",
	},
}));

export default function Index() {
	const { classes, cx } = useStyles({ color: "red" });
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w480 = useMediaQuery("(min-width:480px)");

	return (
		<section>
			{/* header_topstory */}
			<TopStory display={true} />
			{/* Container TopIndex */}
			<Container
				className={w1024 ? classes.containerTopIndex : classes.displayNone}
			>
				<Grid container spacing={2}>
					<Grid item xs={7} className={classes.mainTopIndex}>
						{/* <Image
							//  loader={myLoader}
							alt='Picture of the author'
							fill
							src='https://img.sedaily.com/Web/BlockChain/8931.jpg'
						/> */}
						<img
							height='485px'
							src='https://img.sedaily.com/Web/BlockChain/8931.jpg'
							alt=''
						/>
					</Grid>

					<Grid item xs={5} container spacing={1}>
						{Array.from(Array(4)).map((_, index) => (
							<Grid item xs={6} key={index}>
								<Link
									href='/News'
									style={{ textDecoration: "none", color: "black" }}
								>
									<Grid container className={classes.itemTopIndex}>
										<Grid
											item
											xs={12}
											className={classes.containerItemTopIndex}
										>
											<img
												width={"100%"}
												src='https://img.sedaily.com/Web/BlockChain/8929.jpg'
												alt=''
											/>
										</Grid>

										<Grid item xs={12} p={"14px"}>
											<Typography
												className={classes.boxContentItem}
												padding={"0 5px"}
												fontSize={"12px"}
											>
												블록체인
											</Typography>
											<Typography
												mt={"5px"}
												height={"45px"}
												overflow='hidden'
												fontSize='15px'
											>
												[STO 분석]⑦“투명성 확보해야 시장 커져…NH證, IB 강점 기반
												발행에 초점”
											</Typography>
										</Grid>
									</Grid>
								</Link>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Container>
			{/* Hot News */}
			<Box className={w1024 ? classes.backgroundf3f3f3 : classes.displayNone}>
				<Container disableGutters sx={{ padding: "70px 0" }}>
					<Box padding={"5px 0 15px 0"}>
						<Typography textAlign='center' bottom={"5px"} fontSize='32px'>
							블록체인
						</Typography>
						<Typography textAlign='center'>Blockchain</Typography>
					</Box>
					<Grid container spacing={{ xs: 1 }}>
						{Array.from(Array(5)).map((_, index) => (
							<Grid item xs={2.4} key={index}>
								<Link href='/News' style={{ textDecoration: "none" }}>
									<Box className={classes.boxItemLine}>
										<img
											width={"100%"}
											src='https://newsimg.sedaily.com/2023/04/03/29O5R0QAIH_1_m.jpg'
											alt=''
										/>
										<Box padding='20px 15px'>
											<Typography
												fontSize='16px'
												fontWeight='bold'
												color='#333'
											>
												[코인가십] 아비트럼 거버넌스 논란…폭락 이유는?
											</Typography>
											<Typography
												fontSize='13px'
												height='36px'
												overflow='hidden'
												color='#666'
											>
												스마트사운드가 미국 원격진료 전문 회사 아조바헬스(Azova
												Health)에 스마트청진기 ‘스키퍼’를 공급한다고 3일 밝혔다.
												스마트사운드는 아조바헬스와 최근 이같은 내용의
												사업협약을 맺었다. 아조바헬스는 스마트사운드의 실시간
												청진 기술을 자사 플랫폼에 도입한다. 양사는 향후 미국내
												원격의료 플랫폼 회사들을 상대
											</Typography>
											<Typography color='#999' fontSize='12px' marginTop='9px'>
												임진혁 기자 2023-04-03
											</Typography>
										</Box>
									</Box>
								</Link>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			{/* Responsive  */}
			{/* Responsive Container TopIndex  */}
			<Box display={w1024 ? "none" : "unset"}>
				<Grid container spacing={2} padding='0 20px'>
					{Array.from(Array(w480 ? 4 : 2)).map((_, index) => (
						<Grid item xs={w480 ? 3 : 6} key={index}>
							<img
								width={"100%"}
								src='https://img.sedaily.com/Web/BlockChain/8931.jpg'
								alt=''
							/>
							<Typography
								fontSize='15px'
								color='#333'
								className={classes.textHeight40}
							>
								지닥, 200억여 원 해킹…다른 거래소 핫월렛 보유량은?
							</Typography>
						</Grid>
					))}
				</Grid>
				<Grid container marginTop='10px' spacing={2} padding='0 20px'>
					{Array.from(Array(w480 ? 2 : 1)).map((_, index) => (
						<Grid item xs={w480 ? 6 : 12} key={index}>
							{Array.from(Array(3)).map((_, index) => (
								<Typography
									noWrap
									key={index}
									sx={{ borderTop: "1px solid #eceeef", padding: "10px 0" }}
								>
									[디센터 스냅샷] 투자자와 거리 두기 하는 거래소의 패착
								</Typography>
							))}
						</Grid>
					))}
				</Grid>
			</Box>
			{/* Responsive Hot News */}
			<Box display={w1024 ? "none" : "unset"} marginTop='10px'>
				<Stack
					direction='row'
					justifyContent='space-between'
					padding=' 10px 20px 10px 20px'
					className={classes.broderTop9px}
				>
					<Typography>블록체인</Typography>
					<NavigateNextIcon />
				</Stack>
				<Stack
					direction='row'
					justifyContent='space-between'
					margin='0 20px'
					padding='20px 0'
					className={classes.broderTopBottom}
				>
					<Box paddingRight='20px'>
						<Typography
							color='#000'
							fontSize={w480 ? "20px" : "17px"}
							fontWeight='bold'
							lineHeight={w480 ? "40px" : "none"}
						>
							인천시, 블록체인 허브 조성 전략 짠다
						</Typography>
						<Typography
							color={w480 ? "#666" : "#999999"}
							fontSize='14px'
							margin='10px 0'
							className={classes.textHeight40}
						>
							인천시가 블록체인 기술에 기반한 디지털 경제 특구 조성을 위해
							140여억 원을 투입한다고 13일 밝혔다. 시는 우선 내년부터 2027년까지
							실행 전략을 담은 블록체인 허브 조성 마스터플랜을 수립하기로 했다.
							6개월간 이뤄지는 마스터플랜 수립 용역은 국내·외 현황조사 및 분석을
							통한 단계별 로드맵 마련과 디지털 경제
						</Typography>
						<Typography
							color='#999'
							fontSize='12px'
							display={w480 ? "unset" : "none"}
						>
							도예리 기자 yeri.do@ | 2023-03-13
						</Typography>
					</Box>
					<img
						width={w480 ? "215px" : "115px"}
						height={w480 ? "120px" : "70px"}
						src='https://newsimg.sedaily.com/2023/04/05/29O6OP7JUJ_1_m.png'
						alt=''
					/>
				</Stack>
				<Grid
					container
					spacing={2}
					padding='0 20px'
					height='105px'
					overflow='hidden'
				>
					{Array.from(Array(w480 ? 2 : 1)).map((_, index) => (
						<Grid item xs={w480 ? 6 : 12} key={index}>
							{Array.from(Array(2)).map((_, index) => (
								<Typography
									key={index}
									sx={{ borderBottom: "1px solid #eceeef", padding: "10px 0" }}
									noWrap
								>
									[디센터 스냅샷] 투자자와 거리 두기 하는 거래소의 패착
								</Typography>
							))}
						</Grid>
					))}
				</Grid>
			</Box>
		</section>
	);
}

import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Container, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const index = () => {
	return (
		<section>
			<Container disableGutters>
				<Grid container xs={12} mb={"50px"}>
					<Grid item xs={7.14}>
						<img
							width={"100%"}
							src='https://img.sedaily.com/Web/BlockChain/8931.jpg'
							alt=''
						/>
					</Grid>
					<Grid item xs={4.86}>
						<Grid container spacing={1}>
							{Array.from(Array(4)).map((_, index) => (
								<Grid item xs={6} key={index}>
									<Link
										href='/News'
										style={{ textDecoration: "none", color: "black" }}
									>
										<Box
											border={"1px solid #d9d9d9"}
											sx={{
												cursor: "pointer",

												"&:hover": {
													transform: "translateY(-3px)",
													transition: "0.4s",
													boxShadow: "1px 2px 4px #888",
												},
											}}
										>
											<img
												width={"100%"}
												height={"130px"}
												src='https://img.sedaily.com/Web/BlockChain/8929.jpg'
												alt=''
											/>
											<Box m={"15px"}>
												<Typography
													padding={"0 5px"}
													fontSize={"12px"}
													sx={{
														background: "#009b28",
														lineHeight: "22px",
													}}
												>
													블록체인
												</Typography>
												<Typography
													mt={"5px"}
													height={"44px"}
													sx={{
														overflow: "hidden",
													}}
												>
													[STO 분석]⑦“투명성 확보해야 시장 커져…NH證, IB 강점
													기반 발행에 초점”
												</Typography>
											</Box>
										</Box>
									</Link>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Box
				sx={{
					background: "#f3f3f3",
				}}
			>
				<Container disableGutters>
					<Box padding={"70px 0"}>
						<Box padding={"5px 0 15px 0"}>
							<Typography
								textAlign='center'
								bottom={"5px"}
								sx={{ fontSize: "32px" }}
							>
								블록체인
							</Typography>
							<Typography textAlign='center'>Blockchain</Typography>
						</Box>
						<Box>
							<Grid container spacing={{ xs: 1 }}>
								{Array.from(Array(5)).map((_, index) => (
									<Grid item xs={2.4} key={index}>
										<Link href='/News' style={{ textDecoration: "none" }}>
											<Box
												sx={{
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
												}}
											>
												<img
													width={"100%"}
													src='https://newsimg.sedaily.com/2023/04/03/29O5R0QAIH_1_m.jpg'
													alt=''
												/>
												<Box
													sx={{
														padding: "20px 15px",
													}}
												>
													<Typography
														sx={{
															fontSize: "16px",
															color: "#333",
															fontWeight: "bold",
														}}
													>
														[코인가십] 아비트럼 거버넌스 논란…폭락 이유는?
													</Typography>
													<Typography
														sx={{
															color: "#666",
															fontSize: "13px",
															height: "36px",
															overflow: "hidden",
														}}
													>
														스마트사운드가 미국 원격진료 전문 회사
														아조바헬스(Azova Health)에 스마트청진기 ‘스키퍼’를
														공급한다고 3일 밝혔다. 스마트사운드는 아조바헬스와
														최근 이같은 내용의 사업협약을 맺었다. 아조바헬스는
														스마트사운드의 실시간 청진 기술을 자사 플랫폼에
														도입한다. 양사는 향후 미국내 원격의료 플랫폼
														회사들을 상대
													</Typography>
													<Typography
														sx={{
															color: "#999",
															fontSize: "12px",
															marginTop: "9px",
														}}
													>
														임진혁 기자 2023-04-03
													</Typography>
												</Box>
											</Box>
										</Link>
									</Grid>
								))}
							</Grid>
						</Box>
					</Box>
				</Container>
			</Box>
		</section>
	);
};

export default index;

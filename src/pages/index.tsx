import React from "react";
import s from "../styles/pages/index.module.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
const index = () => {
	return (
		<section className={s.index}>
			<section className={s.hotnews}>
				<div className={s.main_left}>
					<img src='https://img.sedaily.com/Web/BlockChain/8931.jpg' alt='' />
				</div>
				<div className={s.main_right}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<div className={s.item}>
								<img
									src='https://img.sedaily.com/Web/BlockChain/8929.jpg'
									alt=''
								/>
								<div className={s.content}>
									<label className={s.tag}>블록체인</label>
									<div className={s.text}>
										[STO 분석]⑦“투명성 확보해야 시장 커져…NH證, IB 강점 기반
										발행에 초점”
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={s.item}>
								<img
									src='https://img.sedaily.com/Web/BlockChain/8929.jpg'
									alt=''
								/>
								<div className={s.content}>
									<label className={s.tag}>블록체인</label>
									<div className={s.text}>
										[STO 분석]⑦“투명성 확보해야 시장 커져…NH證, IB 강점 기반
										발행에 초점”
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={s.item}>
								<img
									src='https://img.sedaily.com/Web/BlockChain/8929.jpg'
									alt=''
								/>
								<div className={s.content}>
									<label className={s.tag}>블록체인</label>
									<div className={s.text}>
										[STO 분석]⑦“투명성 확보해야 시장 커져…NH證, IB 강점 기반
										발행에 초점”
									</div>
								</div>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className={s.item}>
								<img
									src='https://img.sedaily.com/Web/BlockChain/8929.jpg'
									alt=''
								/>
								<div className={s.content}>
									<label className={s.tag}>블록체인</label>
									<div className={s.text}>
										[STO 분석]⑦“투명성 확보해야 시장 커져…NH證, IB 강점 기반
										발행에 초점”
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
			</section>
			<section className={s.sec1}>
				<div className={s.main}>
					<h3 className={s.top}>
						<div className={s.title}>블록체인</div>
						<div className={s.text}>Blockchain</div>
					</h3>
					<div className={s.list_item}>
						<Grid container spacing={{ xs: 1 }}>
							{Array.from(Array(5)).map((_, index) => (
								<Grid item xs={2.4} key={index}>
									<div className={s.item}>
										<img
											src='https://newsimg.sedaily.com/2023/04/03/29O5R0QAIH_1_m.jpg'
											alt=''
										/>
										<div className={s.text}>
											<div className={s.title}>
												[코인가십] 아비트럼 거버넌스 논란…폭락 이유는?
											</div>
											<div className={s.content}>
												스마트사운드가 미국 원격진료 전문 회사 아조바헬스(Azova
												Health)에 스마트청진기 ‘스키퍼’를 공급한다고 3일 밝혔다.
												스마트사운드는 아조바헬스와 최근 이같은 내용의
												사업협약을 맺었다. 아조바헬스는 스마트사운드의 실시간
												청진 기술을 자사 플랫폼에 도입한다. 양사는 향후 미국내
												원격의료 플랫폼 회사들을 상대
											</div>
											<div className={s.time}>임진혁 기자 2023-04-03</div>
										</div>
									</div>
								</Grid>
							))}
						</Grid>
					</div>
				</div>
			</section>
			<section className={s.sec2}>
				<div className={s.main}>
					<h3 className={s.top}>
						<div className={s.title}>IT산업</div>
						<div className={s.text}>ITIndustry</div>
					</h3>
					<div className={s.list_item}>
						<Grid container spacing={{ xs: 1 }}>
							{Array.from(Array(5)).map((_, index) => (
								<Grid item xs={2.4} key={index}>
									<div className={s.item}>
										<img
											src='https://newsimg.sedaily.com/2023/04/03/29O5R0QAIH_1_m.jpg'
											alt=''
										/>
										<div className={s.text}>
											<div className={s.title}>
												[코인가십] 아비트럼 거버넌스 논란…폭락 이유는?
											</div>
											<div className={s.content}>
												스마트사운드가 미국 원격진료 전문 회사 아조바헬스(Azova
												Health)에 스마트청진기 ‘스키퍼’를 공급한다고 3일 밝혔다.
												스마트사운드는 아조바헬스와 최근 이같은 내용의
												사업협약을 맺었다. 아조바헬스는 스마트사운드의 실시간
												청진 기술을 자사 플랫폼에 도입한다. 양사는 향후 미국내
												원격의료 플랫폼 회사들을 상대
											</div>
											<div className={s.time}>임진혁 기자 2023-04-03</div>
										</div>
									</div>
								</Grid>
							))}
						</Grid>
					</div>
				</div>
			</section>
		</section>
	);
};

export default index;

import * as React from "react";
import s from "../styles/components/asidePage.module.scss";
import { Grid } from "@mui/material";

export interface AsidePageProps {}

export default function AsidePage(props: AsidePageProps) {
	return (
		<aside className={s.right}>
			<div className={s.ad}>
				<img
					src='https://tpc.googlesyndication.com/simgad/6687191721012509281'
					alt=''
				/>
			</div>
			<div className={s.box}>
				<h3>베스트 클릭</h3>
				<div className={s.list_item}>
					<Grid
						container
						direction='column'
						justifyContent='flex-end'
						alignItems='center'
					>
						{Array.from(Array(3)).map((_, index) => (
							<div className={s.item} key={index}>
								<div className={s.main}>
									<span className={s.number}>
										<span className={s.ab}>1</span>
									</span>
									<div className={s.content}>
										암호화폐 하락장에 두나무 영업이익 4분의 1토막
									</div>
									<div className={s.img}>
										<img
											src='https://newsimg.sedaily.com/2023/03/31/29N8OT7XAH_1_s.jpg'
											alt=''
										/>
									</div>
								</div>
							</div>
						))}
					</Grid>
				</div>
			</div>
			<div className={s.box}>
				<h3>베스트 클릭</h3>
				<div className={s.list_item}>
					<Grid
						container
						direction='column'
						justifyContent='flex-end'
						alignItems='center'
					>
						{Array.from(Array(3)).map((_, index) => (
							<div className={s.item} key={index}>
								<div className={s.main}>
									<span className={s.number}>
										<span className={s.ab}>1</span>
									</span>
									<div className={s.content}>
										암호화폐 하락장에 두나무 영업이익 4분의 1토막
									</div>
									<div className={s.img}>
										<img
											src='https://newsimg.sedaily.com/2023/03/31/29N8OT7XAH_1_s.jpg'
											alt=''
										/>
									</div>
								</div>
							</div>
						))}
					</Grid>
				</div>
			</div>
			<div className={s.boxlive}>
				<h3>
					<img
						src='https://img.sedaily.com/Html/Special/politics/politics_13.png'
						alt=''
					/>
					<div>베스트 클릭</div>
				</h3>
				<div className={s.list_item}>
					<div className={s.item}>
						<span className={s.time}>3분전</span>
						<div className={s.clock}></div>
						<div className={s.content}>
							[점심 브리핑] 텍사스주, “암호화폐 채굴량 줄이면 보상금” 폐지 박차
						</div>
						<div className={s.img}>
							<img
								src='https://newsimg.sedaily.com/2023/04/05/29O6OBEJL9_1_s.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}

import * as React from "react";
import { Grid } from "@mui/material";

export interface AsidePageProps {}

export function AsidePage(props: AsidePageProps) {
	return (
		<aside className="right">
			<div className="ad">
				<img
					src='https://tpc.googlesyndication.com/simgad/6687191721012509281'
					alt=''
				/>
			</div>
			<div className="box">
				<h3>베스트 클릭</h3>
				<div className="list_item">
					<Grid
						container
						direction='column'
						justifyContent='flex-end'
						alignItems='center'
					>
						{Array.from(Array(3)).map((_, index) => (
							<div className="item" key={index}>
								<div className="main">
									<span className="number">
										<span className="ab">1</span>
									</span>
									<div className="content">
										암호화폐 하락장에 두나무 영업이익 4분의 1토막
									</div>
									<div className="img">
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
			<div className="box">
				<h3>베스트 클릭</h3>
				<div className="list_item">
					<Grid
						container
						direction='column'
						justifyContent='flex-end'
						alignItems='center'
					>
						{Array.from(Array(3)).map((_, index) => (
							<div className="item" key={index}>
								<div className="main">
									<span className="number">
										<span className="ab">1</span>
									</span>
									<div className="content">
										암호화폐 하락장에 두나무 영업이익 4분의 1토막
									</div>
									<div className="img">
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
			<div className="boxlive">
				<h3>
					<img
						src='https://img.sedaily.com/Html/Special/politics/politics_13.png'
						alt=''
					/>
					<div>베스트 클릭</div>
				</h3>
				<div className="list_item">
					<div className="item">
						<span className="time">3분전</span>
						<div className="clock"></div>
						<div className="content">
							[점심 브리핑] 텍사스주, “암호화폐 채굴량 줄이면 보상금” 폐지 박차
						</div>
						<div className="img">
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

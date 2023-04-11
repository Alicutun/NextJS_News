import * as React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Grid } from "@mui/material";
import Link from "next/link";

export interface ArticlePageProps {}

export function ArticlePage(props: ArticlePageProps) {
	return (
		<article className="left">
			<div className="sort">
				<DoneIcon style={{ color: "orange" }} />
				최신순 | 인기도순
			</div>
			<div className="list_item">
				<Grid
					container
					direction='column'
					justifyContent='flex-end'
					alignItems='center'
				>
					{Array.from(Array(5)).map((_, index) => (
						<Link href='/News' key={index}>
							<div className="item">
								<div className="img">
									<img
										src='https://newsimg.sedaily.com/2023/04/05/29O6OUJHMV_1_s.png'
										alt=''
									/>
								</div>
								<div className="text">
									<div className="title">
										델리오 “토큰증권 지갑 서비스 제공”
									</div>
									<div className="time">김정우 기자 | 2023-04-05</div>
									<div className="content">
										델리오는 토큰 증권(ST)을 보관·관리할 수 있는 지갑 서비스를
										제공한다고 5일 밝혔다. 델리오는 현재 운영하고 있는 금고형
										가상자산 전문 지갑 ‘볼트(Vault)’를 활용해 기관·개인에게 토큰
										증권 지갑 서비스를 제공할 예정이다. 볼트는 비트코인(BTC),
										이더리움(ETH) 등 가상자산과 대체불가토큰(NFT) 등
										디지털자산을 보관관리할 수 있는 디지털자산 지갑이다.
										△멀티시그(Multi-signature) △소유자자격증명 △탈중앙 출금
									</div>
								</div>
							</div>
						</Link>
					))}
				</Grid>
			</div>
		</article>
	);
}

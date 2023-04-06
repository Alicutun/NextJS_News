import * as React from "react";
import s from "../styles/pages/news.module.scss";
import ArticleNews from "@/components/ArticleNews";
import { Grid } from "@mui/material";
import AsidePage from "@/components/AsidePage";

export interface NewsProps {}

export default function News(props: NewsProps) {
	return (
		<section className={s.news}>
			<div className={s.main}>
				<Grid container spacing={5}>
					<Grid item xs={8.7}>
						<ArticleNews />
					</Grid>
					<Grid item xs={3.3}>
						<AsidePage />
					</Grid>
				</Grid>
			</div>
		</section>
	);
}

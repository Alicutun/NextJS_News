import React from "react";
import s from "../styles/pages/menu01.module.scss";
import { Grid } from "@mui/material";
import AsidePage from "@/components/AsidePage";
import ArticlePage from "@/components/ArticlePage";

export interface Menu01Props {}

export default function Menu01(props: Menu01Props) {
	return (
		<section className={s.menu01}>
			<div className={s.main}>
				<Grid container spacing={5}>
					<Grid item xs={8.3}>
						<ArticlePage />
					</Grid>
					<Grid item xs={3.3}>
						<AsidePage />
					</Grid>
				</Grid>
			</div>
		</section>
	);
}

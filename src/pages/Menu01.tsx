import React from "react";
import { Container, Grid } from "@mui/material";
import AsidePage from "@/components/AsidePage";
import ArticlePage from "@/components/ArticlePage";

export interface Menu01Props {}

export default function Menu01(props: Menu01Props) {
	return (
		<Container disableGutters>
			<Grid container spacing={5} mt={"30px"}>
				<Grid item xs={8.7}>
					<ArticlePage />
				</Grid>
				<Grid item xs={3.3}>
					<AsidePage />
				</Grid>
			</Grid>
		</Container>
	);
}

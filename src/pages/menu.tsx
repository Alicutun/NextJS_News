import React from "react";
import { Container, Grid } from "@mui/material";
import { AsidePage, ArticlePage } from "@/components";

export interface Menu01Props {}

export default function Menu(props: Menu01Props) {
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

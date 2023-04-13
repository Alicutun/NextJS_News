import React from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { AsidePage, ArticlePage } from "@/components";

export interface Menu01Props {}

export default function Menu(props: Menu01Props) {
	const w1024 = useMediaQuery("(min-width:1024px)");
	return (
		<Container disableGutters>
			<Grid container spacing={5} mt={"30px"}>
				<Grid item xs={w1024 ? 9 : 12}>
					<ArticlePage />
				</Grid>
				<Grid item xs={w1024 ? 3 : 12}>
					<AsidePage />
				</Grid>
			</Grid>
		</Container>
	);
}

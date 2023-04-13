import * as React from "react";
import { ArticleNews, AsidePage } from "@/components";
import { Container, Grid, useMediaQuery } from "@mui/material";

export interface NewsProps {}

export default function News(props: NewsProps) {
	const w1024 = useMediaQuery("(min-width:1024px)");

	return (
		<Container disableGutters>
			<Grid container spacing={5} mt={"30px"}>
				<Grid item xs={w1024 ? 8.7 : 12}>
					<ArticleNews />
				</Grid>
				<Grid item xs={w1024 ? 3.3 : 12}>
					<AsidePage />
				</Grid>
			</Grid>
		</Container>
	);
}

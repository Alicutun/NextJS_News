import * as React from "react";
import { ArticleNews, AsidePage } from "@/components";
import { Container, Grid } from "@mui/material";

export interface NewsProps {}

export default function News(props: NewsProps) {
	return (
		<Container disableGutters>
			<Grid container spacing={5} mt={"30px"}>
				<Grid item xs={8.7}>
					<ArticleNews />
				</Grid>
				<Grid item xs={3.3}>
					<AsidePage />
				</Grid>
			</Grid>
		</Container>
	);
}

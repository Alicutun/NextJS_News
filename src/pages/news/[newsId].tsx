import * as React from "react";
import { Advertise, Article, AsidePage, TopStory } from "@/components";
import { Container, Grid, useMediaQuery } from "@mui/material";
import axios from "axios";
import { BASE_URL, IDataArticle } from "@/common";

export interface NewsProps {}

export default function News({ data }: { data: IDataArticle }) {
	const w1024 = useMediaQuery("(min-width:1024px)");

	return (
		<Container disableGutters>
			{/* header_topstory */}
			<TopStory />
			{/* ad */}
			<Advertise />
			{/* Content */}
			<Grid container columnSpacing={5} mt={w1024 ? "30px" : "20px"}>
				<Grid item xs={w1024 ? 9 : 12}>
					<Article dataNews={data} />
				</Grid>
				<Grid item xs={w1024 ? 3 : 12}>
					<AsidePage />
				</Grid>
			</Grid>
		</Container>
	);
}

export async function getServerSideProps(context: any) {
	const { params } = context;
	const filter = {
		filter: {
			include: [
				{
					relation: "user",
					scope: {
						include: [{ relation: "profile" }],
					},
				},
			],
		},
	};
	const { data } = await axios.get(`${BASE_URL}/articles/${params.newsId}`, {
		params: filter,
	});
	return {
		props: {
			data,
		},
	};
}

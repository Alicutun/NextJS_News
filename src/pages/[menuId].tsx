import React from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { AsidePage, TopStory, Advertise, ArticleTopic } from "@/components";
import axios from "axios";
import { BASE_URL } from "@/constant";

export interface Menu01Props {}

export default function Menu({ data }: any) {
	const w1024 = useMediaQuery("(min-width:1024px)");
	// console.log("data: ", data);
	const listArticle = data;

	return (
		<Container disableGutters>
			{/* header_topstory */}
			<TopStory />
			{/* ad */}
			<Advertise />
			{/* Content */}
			<Grid container columnSpacing={5} mt={w1024 ? "30px" : "20px"}>
				<Grid item xs={w1024 ? 9 : 12}>
					<ArticleTopic listArticle={listArticle} />
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

	console.log(filter);
	const { data } = await axios.get(
		`${BASE_URL}/topics/${params.menuId}/articles?filter=${encodeURIComponent(
			JSON.stringify(filter.filter)
		)}`
		// {
		// 	params: filter,
		// 	paramsSerializer: {
		// 		serialize: (params) => {
		// 			const serialized = stringify(params);
		// 			return serialized;
		// 		},
		// 	},
		// }
	);

	return {
		props: { data },
	};
}

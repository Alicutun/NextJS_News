import React, { useEffect, useState } from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { AsidePage, TopStory, Advertise, ListArticle } from "@/components";
import axios from "axios";
import { BASE_URL, LIMIT } from "@/common";
import { useRouter } from "next/router";

export default function Menu({ data }: any) {
	const router = useRouter();

	const [listArticle, setListArticle] = useState<any[]>(data.data);
	const [page, setPage] = React.useState(0);

	const w1024 = useMediaQuery("(min-width:1024px)");

	// fetch data when click page
	const fetchList = async () => {
		console.log("co vao ko");

		const filter = {
			include: [
				{
					relation: "user",
					scope: {
						include: [{ relation: "profile" }],
					},
				},
			],
			limit: LIMIT,
			offset: (page - 1) * LIMIT,
		};

		const { data } = await axios.get(
			`${BASE_URL}/topics/${
				router.query.menuId
			}/articles?filter=${encodeURIComponent(JSON.stringify(filter))}`
		);

		await setListArticle(data.data);
		console.log("page", page);
		console.log("offset", (page - 1) * 5);
	};

	useEffect(() => {
		if (page > 0) fetchList();
	}, [page]);

	// console.log("listarticle: ", listArticle);
	return (
		<Container disableGutters>
			{/* header_topstory */}
			<TopStory />
			{/* ad */}
			<Advertise />
			{/* Content */}
			<Grid container columnSpacing={5} mt={w1024 ? "30px" : "20px"}>
				<Grid item xs={w1024 ? 9 : 12}>
					<ListArticle
						listArticle={listArticle}
						page={page}
						setPage={setPage}
						total={data.total}
					/>
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
		include: [
			{
				relation: "user",
				scope: {
					include: [{ relation: "profile" }],
				},
			},
		],
		limit: LIMIT,
		offset: 0,
	};

	console.log(filter);
	const { data } = await axios.get(
		`${BASE_URL}/topics/${params.menuId}/articles?filter=${encodeURIComponent(
			JSON.stringify(filter)
		)}`
	);

	return {
		props: { data },
	};
}

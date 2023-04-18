import React, { useEffect, useState } from "react";
import {
	Box,
	Container,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AsidePage, ArticlePage } from "@/components";
import axios from "axios";

export interface Menu01Props {}

export default function Menu({ data }: any) {
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	// console.log("dataCha: ", data);
	const listArticle = data;

	return (
		<Container disableGutters>
			{/* header_topstory */}
			<Container disableGutters>
				<Grid
					container
					fontSize='16px'
					padding={w1220 ? "20px 0 50px 0" : "20px 0 50px 20px"}
					justifyContent={w1024 ? "flex-start" : "center"}
					display={w1024 ? "flex" : "none"}
				>
					<Typography color='#448aff' fontWeight='bold'>
						TOP STORIES
					</Typography>
					<Typography marginLeft='10px'>
						업비트, 37분 만에 원화마켓 거래 재개
					</Typography>

					<Box color='#999' margin='3px 2px 0 10px'>
						<AccessTimeIcon sx={{ fontSize: "15px" }} />
					</Box>

					<Typography color='#999' fontSize='12px' pt='2px'>
						24분전
					</Typography>
				</Grid>
			</Container>
			{/* ad */}
			<Stack
				direction='row'
				justifyContent='center'
				sx={{ background: "#004a90" }}
				display={w1024 ? "none" : "flex"}
			>
				<img
					width='350px'
					src='https://branchimg.sedaily.com/Decenter/Banner/decenter_plus_mobile_9.jpg'
					alt=''
				/>
			</Stack>
			{/* Content */}
			<Grid container columnSpacing={5} mt={w1024 ? "30px" : "20px"}>
				<Grid item xs={w1024 ? 9 : 12}>
					<ArticlePage listArticle={listArticle} />
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
	console.log(params);
	const { data } = await axios.get(
		`https://353d-2405-4803-c830-3ff0-c81e-1f08-20dc-d8f1.ngrok-free.app/topics/${params.menuId}/articles`
	);

	return {
		props: {
			data,
		},
	};
}

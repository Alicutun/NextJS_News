import React, { useCallback, useEffect, useState } from "react";
import {
	Autocomplete,
	Box,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import {
	AsidePage,
	ArticleTopic,
	TopStory,
	Advertise,
	SearchInput,
} from "@/components";
import { makeStyles } from "tss-react/mui";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "@/constant";
import { Marker } from "react-mark.js";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/icons-material";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	selection: {
		background: "#fff",
		width: 200,
		".MuiAutocomplete-inputRoot": {
			height: "40px",
		},
		".MuiAutocomplete-input": {
			padding: "0.5px 4px 7.5px 6px !important",
		},
	},
	marker: {
		fontWeight: "bold",
		background: "none",
		color: "#247acd",
	},
}));

export default function Search({ data }: any) {
	console.log(data);
	const { classes, cx } = useStyles({ color: "red" });
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const options = [
		"last 1 week ",
		"last 1 mounth ",
		"last 6 mounths ",
		"last 1 years ",
	];
	const options2 = ["nganh CNTT", "nganh CNTT", "nganh CNTT", "nganh CNTT"];
	const router = useRouter();
	const [infoSearch, setInfoSearch] = useState<any[]>([]);
	const [listArticle, setListArticle] = useState<any[]>([]);

	const allTopics = infoSearch.find((info: any) => info.topic === "All topics");

	// console.log("topic", allTopics);
	const notAllTopics = infoSearch.filter(
		(info: any) => info.topic !== "All topics"
	);

	useEffect(() => {
		setInfoSearch(data);
		setListArticle(data[3].articles);

		return () => {};
	}, []);

	console.log("info", infoSearch);
	console.log("listArtile", listArticle);

	const handleTopic = (name: string) => {
		const topic = infoSearch.find((info: any) => info.topic === name);
		// console.log("topic click: ", topic);
		setListArticle(topic?.articles);
	};

	return (
		<Container disableGutters>
			{/* header_topstory */}
			<TopStory />
			{/* ad */}
			<Advertise />
			{/* Content */}
			<Grid container columnSpacing={5} mt={w1024 ? "30px" : "20px"}>
				<Grid item xs={w1024 ? 9 : 12} margin={w1024 ? "" : "0 20px 0 20px"}>
					<Box
						marginLeft={w1220 ? "0" : w1024 ? "20px" : "0"}
						marginBottom='40px'
						sx={{ background: "#f7f7f7", border: "solid 1px #ced2d7" }}
					>
						<Grid
							container
							height='100px'
							alignItems='center'
							sx={{ borderBottom: "solid 1px #ced2d7" }}
						></Grid>

						<Grid
							container
							alignItems='center'
							direction='row'
							justifyContent='space-between'
							height='70px'
							padding='0 20px'
						>
							<Stack
								direction='row'
								alignItems='center'
								columnGap={2}
								height='40px'
							>
								<Typography>Time</Typography>
								<Autocomplete
									sx={{ width: "200px" }}
									id='controllable-states-demo'
									options={options}
									className={classes.selection}
									renderInput={(params) => <TextField {...params} />}
								/>
								<Typography>Title + Content</Typography>
								<Autocomplete
									sx={{ width: "200px" }}
									id='controllable-states-demo'
									options={options2}
									className={classes.selection}
									renderInput={(params) => <TextField {...params} />}
								/>
							</Stack>

							<Typography
								sx={{ borderLeft: "solid 1px #ced2d7" }}
								paddingLeft='20px'
								height='70px'
								lineHeight='70px'
							>
								상세 검색
							</Typography>
						</Grid>
					</Box>

					<Grid container direction='row' columnSpacing={5}>
						<Grid item xs={2} display={w1220 ? "" : "none"}>
							<Typography
								fontSize='16px'
								paddingBottom='10px'
								marginBottom='20px'
								sx={{ borderBottom: "solid 1px #ced2d7" }}
							>
								Category별
							</Typography>

							<Typography
								fontSize='13px'
								color='blue'
								fontWeight='bold'
								sx={{ cursor: "pointer" }}
								onClick={() => handleTopic(allTopics?.topic)}
							>
								{allTopics?.topic} ({allTopics?.total})
							</Typography>
							{notAllTopics?.map((item, index) => (
								<Typography
									key={index}
									onClick={() => handleTopic(item.topic)}
									sx={{ cursor: "pointer" }}
									fontSize='13px'
								>
									{item.topic} ({item.total})
								</Typography>
							))}
						</Grid>
						<Grid
							item
							direction='column'
							xs={w1220 ? 10 : 12}
							container
							marginLeft={w1220 ? "0" : w1024 ? "20px" : "0"}
						>
							<Typography fontSize='18px' paddingBottom='10px'>
								TOTAL ()
							</Typography>

							{/* use Marker to highlight-text */}
							<Marker
								mark={router.query.searchId}
								options={{ className: classes.marker }}
							>
								<ArticleTopic listArticle={listArticle} />
							</Marker>
						</Grid>
					</Grid>
				</Grid>
				{/* Aside */}
				<Grid item xs={w1024 ? 3 : 12}>
					<AsidePage />
				</Grid>
			</Grid>
		</Container>
	);
}

export async function getServerSideProps(context: any) {
	const { params } = context;
	console.log("params: { text: params.searchId }: ", {
		text: params.searchId,
		locale: "vi_VN",
	});
	const { data } = await axios.get(`${BASE_URL}/articles/search`, {
		params: { text: params.searchId, locale: "vi_VN" },
	});
	return {
		props: {
			data,
		},
	};
}

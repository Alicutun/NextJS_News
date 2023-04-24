import React, { useCallback, useEffect, useState } from "react";
import {
	Autocomplete,
	Box,
	Container,
	Grid,
	Pagination,
	Stack,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import {
	AsidePage,
	ListArticle,
	TopStory,
	Advertise,
	SearchInput,
} from "@/components";
import { makeStyles } from "tss-react/mui";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL, LIMIT } from "@/common";
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
export default function Search({ searchData, searchTotal }: any) {
	const allTopic = searchTotal.find((s: any) => s.topic === "All topics");
	const [listArticle, setListArticle] = useState<any[]>(searchData.articles);
	const [total, setTotal] = useState<number>(allTopic.total);
	const [nameTopic, setNameTopic] = useState(allTopic.topic);
	const [loading, setLoading] = useState(false);
	console.log("nameTopic: ", nameTopic);
	const [page, setPage] = React.useState(1);
	console.log("page:", page);

	const { classes, cx } = useStyles({ color: "red" });
	// click select topic
	const handleTopic = async (topicName: string, total: number) => {
		const { data } = await axios.get(`${BASE_URL}/articles/search`, {
			params: {
				text: router.query.searchId,
				locale: "vi_VN",
				topicName,
				limit: LIMIT,
			},
		});
		setListArticle(data.articles);
		setNameTopic(topicName);
		setTotal(total);
		setPage(1);
	};
	const fetchList = async () => {
		setLoading(true);
		try {
			const { data }: any = await axios.get(`${BASE_URL}/articles/search`, {
				params: {
					text: router.query.searchId,
					locale: "vi_VN",
					topicName: nameTopic,
					limit: LIMIT,
					page,
				},
			});
			setLoading(false);
			// if(!data) return
			setListArticle(data?.articles);
		} catch (error) {
			console.log("err");
		}
	};
	useEffect(() => {
		fetchList();
	}, [page]);
	console.log("list: ", listArticle);

	// responsive
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const options = [
		"last 1 week ",
		"last 1 month ",
		"last 6 months ",
		"last 1 years ",
	];
	const options2 = ["nganh CNTT", "nganh CNTT", "nganh CNTT", "nganh CNTT"];

	const router = useRouter();
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
								// onClick={() => handleTopic(allTopics?.topic)}
							>
								{/* {allTopics?.topic} ({allTopics?.total}) */}
							</Typography>
							{searchTotal?.map((item: any, index: number) => (
								<Typography
									key={index}
									onClick={() => handleTopic(item.topic, item.total)}
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
								TOTAL ({total})
							</Typography>

							{/* use Marker to highlight-text */}
							<Marker
								mark={router.query.searchId}
								options={{ className: classes.marker }}
							>
								<ListArticle listArticle={listArticle} />
							</Marker>
							{/* Pagination */}
							{listArticle?.length !== 0 && (
								<Stack alignItems='center' marginBottom='20px'>
									<Pagination
										size='small'
										count={Math.ceil(total / LIMIT)}
										page={page}
										onChange={(e, value) => setPage(value)}
										showFirstButton
										showLastButton
									/>
								</Stack>
							)}
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
	const dataSearchAllTopic = await axios.get(`${BASE_URL}/articles/search`, {
		params: { text: params.searchId, locale: "vi_VN", limit: LIMIT, page: 1 },
	});
	const searchData = dataSearchAllTopic.data;
	const dataSearchTotal = await axios.get(`${BASE_URL}/articles/search-total`, {
		params: { text: params.searchId, locale: "vi_VN" },
	});
	const searchTotal = dataSearchTotal.data;

	return {
		props: {
			searchData,
			searchTotal,
		},
	};
}

import React, { useEffect, useState } from "react";
import {
	Autocomplete,
	Box,
	Button,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { AsidePage, ListArticle, TopStory, Advertise } from "@/components";
import { makeStyles } from "tss-react/mui";
import { useRouter } from "next/router";
import axios from "axios";
import {
	BASE_URL,
	IDataArticle,
	IDataSearchAllTopic,
	IDataSearchTotal,
	LIMIT,
	LOCALE,
} from "@/common";

const useStyles = makeStyles()(() => ({
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
	textfield: {
		height: "56px",
		width: "50%",
		".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
			borderRadius: "0px",
		},
	},
	buttonSearch: {
		height: "56px",
		background: "#444",
		cursor: "pointer",
		borderRadius: "0px !important ",
		"&:hover": {
			backgroundColor: "#444 !important",
		},
	},
}));

// {
// 	dataSearchModalAllTopic: IDataSearchAllTopic;
// 	dataSearchModalTotalTopic: IDataSearchTotal[];
// }

export default function Search({
	dataSearchModalAllTopic,
	dataSearchModalTotalTopic,
}: any) {
	//
	const { classes } = useStyles();

	const router = useRouter();
	//
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const options = [
		"last 1 week ",
		"last 1 month ",
		"last 6 months ",
		"last 1 years ",
	];
	const options2 = ["nganh CNTT", "nganh CNTT", "nganh CNTT", "nganh CNTT"];

	const allTopic = dataSearchModalTotalTopic.find(
		(s: IDataSearchTotal) => s.topic === "All topics"
	);

	const [listArticle, setListArticle] = useState<IDataArticle[]>(
		dataSearchModalAllTopic.articles
	);

	const [total, setTotal] = useState<number>(allTopic.total);
	const [nameTopic, setNameTopic] = useState<string>(allTopic.topic);
	const [searchArticle, setSearchArticle] = useState<any>();
	const [page, setPage] = React.useState(1);

	useEffect(() => {
		setTotal(allTopic.total);
		setNameTopic(allTopic.topic);
		return () => {};
	}, [allTopic]);

	// click select topic
	const handleTopic = async (topicName: string, total: number) => {
		const { data } = await axios.get(`${BASE_URL}/articles/search`, {
			params: {
				text: router.query.searchId,
				locale: LOCALE,
				topicName,
				limit: LIMIT,
			},
		});
		setListArticle(data.articles);
		setNameTopic(topicName);
		setTotal(total);
		setPage(1);
	};

	// fetch data when click pagination
	const fetchList = async () => {
		try {
			const { data }: any = await axios.get(`${BASE_URL}/articles/search`, {
				params: {
					text: router.query.searchId,
					locale: LOCALE,
					topicName: nameTopic,
					limit: LIMIT,
					page,
				},
			});
			setListArticle(data?.articles);
		} catch (error) {
			console.log("err");
		}
	};

	// Search in page
	const handleSearch = () => {
		router.push({
			pathname: `/search/${searchArticle}`,
		});
		setPage(1);
	};

	// press enter search
	const handleSearchEnter = async (event: any) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	useEffect(() => {
		fetchList();
		return () => {};
	}, [page, router.query.searchId]);

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
							justifyContent='center'
							sx={{ borderBottom: "solid 1px #ced2d7" }}
						>
							<TextField
								className={classes.textfield}
								onKeyUp={(e) => handleSearchEnter(e)}
								onChange={(e) => setSearchArticle(e.target.value)}
							/>

							<Button
								disabled={!searchArticle ? true : false}
								className={classes.buttonSearch}
								onClick={handleSearch}
							>
								<Typography m='0 10px' color='white'>
									search
								</Typography>
							</Button>
						</Grid>

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
								Advanced search
							</Typography>
						</Grid>
					</Box>

					<Grid container direction='row' columnSpacing={5}>
						<Grid item xs={w1220 ? 2 : 12} display={w1220 ? "" : "none"}>
							<Typography
								fontSize='16px'
								paddingBottom='10px'
								marginBottom='20px'
								sx={{ borderBottom: "solid 1px #ced2d7" }}
							>
								Category별
							</Typography>

							{dataSearchModalTotalTopic?.map((item: any) => (
								<Typography
									color={item.topic === nameTopic ? "blue" : ""}
									key={item.topic}
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
							{/* Total list */}
							<Grid item sx={{ width: "100%" }}>
								<Typography fontSize='18px' paddingBottom='10px'>
									TOTAL ({total})
								</Typography>
							</Grid>

							<Grid item sx={{ width: "100%" }}>
								<ListArticle
									listArticle={listArticle}
									page={page}
									setPage={setPage}
									total={total}
									valueSearch={router.query.searchId}
								/>
							</Grid>
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
		locale: LOCALE,
	});
	const data1 = await axios.get(`${BASE_URL}/articles/search`, {
		params: { text: params.searchId, locale: LOCALE, limit: LIMIT, page: 1 },
	});
	const dataSearchModalAllTopic = data1.data;
	const data2 = await axios.get(`${BASE_URL}/articles/search-total`, {
		params: { text: params.searchId, locale: LOCALE },
	});
	const dataSearchModalTotalTopic = data2.data;

	return {
		props: {
			dataSearchModalAllTopic,
			dataSearchModalTotalTopic,
		},
	};
}

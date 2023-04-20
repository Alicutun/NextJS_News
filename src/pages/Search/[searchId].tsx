import React from "react";
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
	const { classes, cx } = useStyles({ color: "red" });
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const options = ["1 week ago", "1 mounth ago", "6 mounth ago", "1 year ago"];
	const options2 = ["nganh CNTT", "nganh CNTT", "nganh CNTT", "nganh CNTT"];
	const router = useRouter();
	const listArticle = data;

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
						>
							<SearchInput search={router.query.searchId} />
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
								상세 검색
							</Typography>
						</Grid>
					</Box>
					<Grid container direction='row' columnSpacing={5}>
						<Grid item xs={2} display={w1220 ? "" : "none"}>
							<Typography
								fontSize='16px'
								color='blue'
								paddingBottom='10px'
								marginBottom='20px'
								sx={{ borderBottom: "solid 1px #ced2d7" }}
							>
								Category별
							</Typography>
							<Typography fontSize='13px'>All topics</Typography>
							<Typography fontSize='13px'>IT(50)</Typography>
							<Typography fontSize='13px'>IT(50)</Typography>
							<Typography fontSize='13px'>IT(50)</Typography>
						</Grid>
						<Grid
							item
							direction='column'
							xs={w1220 ? 10 : 12}
							container
							marginLeft={w1220 ? "0" : w1024 ? "20px" : "0"}
						>
							<Typography fontSize='18px' paddingBottom='10px'>
								TOTAL (200)
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
	const { data } = await axios.get(`${BASE_URL}/topics/54/articles`);
	return {
		props: {
			data,
		},
	};
}

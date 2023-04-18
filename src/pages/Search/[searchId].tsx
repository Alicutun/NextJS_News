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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { AsidePage, ArticlePage } from "@/components";
import SearchInput from "@/components/subComponents/SearchInput";
import { makeStyles } from "tss-react/mui";
import { useRouter } from "next/router";
import { Marker } from "react-mark.js";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	root: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
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
const Search = () => {
	const { classes, cx } = useStyles({ color: "red" });
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const options = ["1 week ago", "1 mounth ago", "6 mounth ago", "1 year ago"];
	const options2 = ["nganh CNTT", "nganh CNTT", "nganh CNTT", "nganh CNTT"];
	const router = useRouter();
	console.log(router.query.searchId);
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
								<ArticlePage />
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
};

export default Search;

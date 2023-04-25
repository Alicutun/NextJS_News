import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import axios from "axios";
import { BASE_URL } from "@/common";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	box: {
		marginTop: "10px",
		border: "1px solid #ced2d7",
		height: "342px",
		overflow: "hidden",
	},
	boxRes: {
		borderTop: "9px solid #ced2d7",
		height: "268px",
		overflow: "hidden",
	},
	nameBox: {
		lineHeight: "45px",
		height: "40px",
		borderBottom: "1px solid #ced2d7",
		paddingLeft: "20px",
		fontWeight: "bold",
	},
	nameBoxRes: {
		lineHeight: "45px",
		height: "40px",
		paddingLeft: "20px",
		fontWeight: "bold",
	},
	itemBox: {
		borderBottom: "1px solid #ced2d7",
	},

	itemBoxRes: {
		borderTop: "1px solid #eceeef",
	},

	boxImg: {
		background: "#f7f7f7",
		border: "1px solid #ced2d7",
	},
}));
const BoxNews: React.FC<{}> = () => {
	const { classes, cx } = useStyles({ color: "red" });
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w480 = useMediaQuery("(min-width:480px)");
	const [listData, setListData] = useState<any[]>([]);
	const params = { order: "clickCount DESC", limit: 10 };
	const fetchListTop10Article = async () => {
		const { data } = await axios.get(
			`${BASE_URL}/articles?filter=${encodeURIComponent(
				JSON.stringify(params)
			)}`
		);
		setListData(data);
	};

	useEffect(() => {
		fetchListTop10Article();
	}, []);

	// console.log("data top 10: ", listData);
	return (
		<Box className={w1024 ? classes.box : classes.boxRes}>
			<Typography
				fontSize='16px'
				className={w1024 ? classes.nameBox : classes.nameBoxRes}
			>
				베스트 클릭
			</Typography>
			<Grid container>
				{/* {Array.from(Array(w1024 ? 5 : w480 ? 10 : 5)).map((_, index) => ( */}
				{listData?.slice(0, w1024 ? 5 : w480 ? 10 : 5).map((item, index) => (
					<Grid item xs={w1024 ? 12 : w480 ? 6 : 12} key={index}>
						<Stack
							alignItems='center'
							justifyContent={w1024 ? "space-between" : ""}
							direction='row'
							columnGap={1}
							padding={w1024 ? "10px 0" : "10px 0 10px 10px"}
							margin='0 10px'
							className={w1024 ? classes.itemBox : classes.itemBoxRes}
						>
							{/* css number */}
							{w1024 ? (
								<Box sx={{ background: "orange", borderRadius: "50%" }}>
									<Typography
										fontSize='11px'
										padding='1px 0px 0 6px'
										width='18px'
									>
										{index + 1}
									</Typography>
								</Box>
							) : (
								<Typography
									fontSize='15px'
									paddingLeft='6px'
									marginRight={index === 9 ? (w1024 ? "" : "5px") : ""}
									width='18px'
									color='#0078bd'
									fontWeight='bold'
								>
									{index + 1}
								</Typography>
							)}
							{/* content item */}
							<Typography
								height={w1024 ? "39px" : "auto"}
								width='100%'
								justifyContent='flex-start'
								fontSize={w1024 ? "13px" : "15px"}
								noWrap={w1024 ? false : true}
								overflow='hidden'
							>
								{item.details[0].summary}
							</Typography>
							{/* image */}
							<Stack
								width='100px'
								display={w1024 ? "" : "none"}
								height='35px'
								className={classes.boxImg}
								alignItems='center'
							>
								<img height='100%' src={item.details[0].summaryImage} alt='' />
							</Stack>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
export default BoxNews;

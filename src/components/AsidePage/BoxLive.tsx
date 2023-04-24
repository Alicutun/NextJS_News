import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { makeStyles } from "tss-react/mui";
import axios from "axios";
import { BASE_URL } from "@/common";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	boxLive: {
		marginTop: "10px",
		border: "1px solid #ced2d7",
	},
	boxLiveRes: {
		borderTop: "9px solid #ced2d7",
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
	itemBoxLive: {
		marginLeft: "25px",
		borderLeft: "1px solid #ced2d7",
		position: "relative",
	},
	itemBoxLiveRes: {
		height: "90px",
		borderBottom: "1px solid #e6e8eb",
	},
	boxImg: {
		border: "1px solid #ced2d7",
	},
	time: {
		position: "absolute",
		top: "5px",
		left: "-18px",
	},
	timeIcon: {
		position: "absolute",
		top: "20px",
		left: "-12px",
		background: "white",
	},
	stackTime: {
		height: "100%",
		width: "70px",
		background: "#efefef",
		borderRight: "1px solid #e6e8eb",
	},
}));
export const BoxLive = () => {
	const { classes, cx } = useStyles({ color: "red" });
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w480 = useMediaQuery("(min-width:480px)");

	return (
		<Box className={w1024 ? classes.boxLive : classes.boxLiveRes}>
			<Stack
				columnGap={1}
				alignItems='center'
				direction='row'
				className={w1024 ? classes.nameBox : classes.nameBoxRes}
			>
				<img
					height='55%'
					src='https://img.sedaily.com/Html/Special/politics/politics_13.png'
					alt=''
				/>
				<Typography fontSize='16px' fontWeight='bold'>
					베스트 클릭
				</Typography>
			</Stack>
			<Grid container height={w1024 ? "285px" : "auto"} overflow='auto'>
				{Array.from(Array(w1024 ? 5 : w480 ? 5 : 5)).map((_, index) => (
					<Grid item xs={12} key={index}>
						<Stack
							direction={w1024 ? "column" : "row"}
							alignItems={w1024 ? "" : "center"}
							justifyContent='space-between'
							className={w1024 ? classes.itemBoxLive : classes.itemBoxLiveRes}
						>
							{/* time */}
							<Stack
								alignItems='center'
								justifyContent='center'
								direction='column'
								className={w1024 ? "" : classes.stackTime}
							>
								<AccessTimeIcon className={w1024 ? classes.timeIcon : ""} />
								<Typography
									fontSize='11px'
									className={w1024 ? classes.time : ""}
								>
									17분전
								</Typography>
							</Stack>

							{/* content */}
							<Grid container direction='column' justifyContent='flex-start'>
								<Typography
									padding={w1024 ? "15px 20px 5px" : "5px 0 0 20px"}
									fontSize='13px'
								>
									코빗도 적자…매출 43억, 영업손실 358억
								</Typography>
								<Typography
									display={w1024 ? "none" : ""}
									padding={w1024 ? "15px 20px 5px" : "5px 0 0 20px"}
									fontSize='13px'
									color='#999'
								>
									김지현 기자 2023-04-14 블록체인
								</Typography>
							</Grid>
							{/* Image */}
							<img
								style={{ padding: w1024 ? "0 20px" : "0 10px" }}
								height={w1024 ? "80px" : "70px"}
								width='165px'
								src='https://newsimg.sedaily.com/2023/04/14/29OAUBRQ91_1_s.jpg'
								alt=''
							/>
						</Stack>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

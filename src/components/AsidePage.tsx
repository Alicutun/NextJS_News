import * as React from "react";
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	root: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
	box: {
		marginTop: "10px",
		border: "1px solid #ced2d7",
		height: "340px",
		overflow: "hidden",
	},
	boxRes: {
		borderTop: "9px solid #ced2d7",
		height: "268px",
		overflow: "hidden",
	},
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
	itemBox: {
		borderBottom: "1px solid #ced2d7",
	},
	itemBoxLive: {
		marginLeft: "25px",
		borderLeft: "1px solid #ced2d7",
		position: "relative",
	},
	itemBoxRes: {
		borderTop: "1px solid #eceeef",
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
export interface AsidePageProps {}

export function AsidePage(props: AsidePageProps) {
	const { classes, cx } = useStyles({ color: "red" });
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w480 = useMediaQuery("(min-width:480px)");
	return (
		<aside>
			{/* Image */}
			<Box display={w1024 ? "unset" : "none"}>
				<img
					width='100%'
					src='https://tpc.googlesyndication.com/simgad/6687191721012509281'
					alt=''
				/>
			</Box>
			{/* list Box */}
			{Array.from(Array(2)).map((_, index) => (
				<Box className={w1024 ? classes.box : classes.boxRes} key={index}>
					<Typography
						fontSize='16px'
						className={w1024 ? classes.nameBox : classes.nameBoxRes}
					>
						베스트 클릭
					</Typography>
					<Grid container>
						{Array.from(Array(w1024 ? 5 : w480 ? 10 : 5)).map((_, index) => (
							<Grid item xs={w1024 ? 12 : w480 ? 6 : 12} key={index}>
								<Stack
									alignItems='center'
									direction='row'
									columnGap={1}
									padding={w1024 ? "10px 0" : "10px 0 10px 10px"}
									margin='0 10px'
									className={w1024 ? classes.itemBox : classes.itemBoxRes}
								>
									{/* css number */}
									<Box sx={{ background: "orange", borderRadius: "50%" }}>
										<Typography
											fontSize='11px'
											padding='1px 0px 0 6px'
											width='18px'
										>
											1
										</Typography>
									</Box>
									{/* content item */}
									<Typography
										fontSize={w1024 ? "13px" : "15px"}
										height={w1024 ? "39px" : "auto"}
										noWrap={w1024 ? false : true}
										overflow='hidden'
									>
										암호화폐 하락장에 두나무 영업이익 4분의 1토막
									</Typography>
									{/* image */}
									<Stack
										display={w1024 ? "unset" : "none"}
										height='35px'
										className={classes.boxImg}
										justifyContent='center'
									>
										<img
											height='100%'
											src='https://newsimg.sedaily.com/2023/04/11/29O9GMLL2X_1_s.jpg'
											alt=''
										/>
									</Stack>
								</Stack>
							</Grid>
						))}
					</Grid>
				</Box>
			))}

			{/* Box live */}
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
		</aside>
	);
}

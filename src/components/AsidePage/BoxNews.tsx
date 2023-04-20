import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
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
		border: "1px solid #ced2d7",
	},
}));
const BoxNews: React.FC<{}> = () => {
	const { classes, cx } = useStyles({ color: "red" });
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w480 = useMediaQuery("(min-width:480px)");
	return (
		<Box className={w1024 ? classes.box : classes.boxRes}>
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
	);
};
export default BoxNews;

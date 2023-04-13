import * as React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { makeStyles } from "tss-react/mui";
import { orange } from "@mui/material/colors";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	root: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
	box: {
		marginTop: "10px",
		border: "1px solid #ced2d7",
		overflow: "hidden",
	},
	nameBox: {
		lineHeight: "45px",
		height: "40px",
		borderBottom: "1px solid #ced2d7",
		paddingLeft: "20px",
		fontWeight: "bold",
	},
	itemBox: {
		borderBottom: "1px solid #ced2d7",
		padding: "10px 0",
		margin: "0 10px",
	},
}));
export interface AsidePageProps {}

export function AsidePage(props: AsidePageProps) {
	const { classes, cx } = useStyles({ color: "red" });

	return (
		<aside>
			<img
				width='100%'
				src='https://tpc.googlesyndication.com/simgad/6687191721012509281'
				alt=''
			/>
			<Box className={classes.box} height='253px'>
				<Typography fontSize='16px' className={classes.nameBox}>
					베스트 클릭
				</Typography>
				{Array.from(Array(3)).map((_, index) => (
					<Stack
						alignItems='center'
						direction='row'
						columnGap={1}
						key={index}
						className={classes.itemBox}
					>
						<Box sx={{ background: "orange", borderRadius: "50%" }}>
							<Typography fontSize='11px' padding='1px 0px 0 7px' width='18px'>
								1
							</Typography>
						</Box>
						<Typography fontSize='13px' height='39px' overflow='hidden'>
							암호화폐 하락장에 두나무 영업이익 4분의 1토막
						</Typography>
						<img
							width='75px'
							src='https://newsimg.sedaily.com/2023/03/31/29N8OT7XAH_1_s.jpg'
							alt=''
						/>
					</Stack>
				))}
			</Box>
		</aside>
	);
}

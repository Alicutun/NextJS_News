import { formatPrice } from "@/utilities";
import { Box, Container, Link, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	backgroundf2f2f2: {
		background: "#f2f2f2",
	},
	itemCoibar: {
		borderLeft: "1px solid #ddd",
	},
	iconDown: {
		top: "-5px",
		fontSize: "30px",
		color: "blue",
	},
	boxSearch: {
		// height: "60px",
	},
	boxSearchFixed: {
		background: "white",
		position: "fixed",
		top: "0",
		right: "0",
		left: "0",
		zIndex: "10",
	},
	boxMenu: {
		borderTop: "1px solid #e6e6e6",
		borderBottom: "1px solid #888",
		background: "white",
	},
	boxMenuFixed: {
		borderTop: "1px solid #e6e6e6",
		borderBottom: "1px solid #888",
		background: "white",
		position: "fixed",
		top: "0",
		right: "0",
		left: "0",
		zIndex: "10",
	},
	boxMenuBackground: {
		background: "#28417a",
	},
	subMenuMid: {
		textDecoration: "none",
		color: "#1e181a",
	},
	subMenuMidRes: {
		textDecoration: "none",
		color: "#FFFFFF",
	},
	backgroundAD: {
		background: "#004a90",
	},
	imgLogo: {
		cursor: "pointer",
	},
}));
const SkeletonCoibar = () => {
	const { classes, cx } = useStyles({ color: "red" });
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w500 = useMediaQuery("(min-width:500px)");
	return (
		<Box className={classes.backgroundf2f2f2}>
			<Container disableGutters>
				<Grid container spacing={2}>
					<Grid item xs={w1024 ? 11 : w500 ? 10 : 10} container>
						{Array.from(Array(4)).map((_, index) => (
							<Grid
								item
								container
								xs={w1024 ? 3 : w500 ? 4 : 12}
								padding='10px 0'
								className={classes.itemCoibar}
								justifyContent='space-between'
								alignItems='center'
								key={index}
							>
								<Grid item xs={3}>
									<Typography fontSize='20px' paddingLeft='20px'>
										<Skeleton />
									</Typography>
								</Grid>
								<Grid
									item
									xs={9}
									container
									alignItems='center'
									justifyContent='flex-end'
								>
									<Typography width='100%' fontSize='20px' padding='0 7px'>
										<Skeleton />
									</Typography>
								</Grid>
							</Grid>
						))}
					</Grid>
					<Grid
						item
						xs={w1024 ? 1 : w500 ? 2 : 2}
						className={classes.itemCoibar}
						justifyContent='center'
						alignItems='center'
						container
					>
						<Link href='https://www.bithumb.com'>
							<img
								src='https://branchimg.sedaily.com/Decenter/bittumb_pc.png'
								alt=''
							/>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default SkeletonCoibar;

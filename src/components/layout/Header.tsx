import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, FC } from "react";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	root: {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
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
	searchLeft: {
		transform: "scale(1.5)",
		paddingLeft: "32px",
	},
	searchRight: {
		float: "right",
		transform: "scale(1.5)",
	},
	boxMenu: {
		borderTop: "1px solid #e6e6e6",
		borderBottom: "1px solid #888",
	},
	boxMenuBackground: {
		borderTop: "1px solid #e6e6e6",
		borderBottom: "1px solid #888",
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
}));

export const Header: FC = () => {
	const { classes, cx } = useStyles({ color: "red" });
	const [navbar, setNavbar] = useState(false);
	const router = useRouter();
	function routePage() {
		router.push("/");
	}
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w500 = useMediaQuery("(min-width:500px)");
	const fixedNavBar = () => {
		console.log(window.scrollY);
	};

	// console.log(window.scrollY);

	return (
		<header>
			{/* Coin bar */}
			<Box className={classes.backgroundf2f2f2}>
				<Container disableGutters>
					<Grid container>
						<Grid item xs={w1024 ? 11 : w500 ? 10 : 10} container>
							{Array.from(Array(w1024 ? 4 : w500 ? 3 : 1)).map((_, index) => (
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
										<Typography fontSize='16px' paddingLeft='20px'>
											BTC
										</Typography>
									</Grid>
									<Grid
										item
										xs={9}
										container
										alignItems='center'
										justifyContent='flex-end'
									>
										<Typography fontSize='13px' paddingRight='7px'>
											37,643,000 원
										</Typography>
										<Stack direction='row' alignItems='center'>
											<Typography fontSize='13px'>(+0.52%)</Typography>
											<ArrowDropDownIcon
												sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
											/>
										</Stack>
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
			{/* Search */}
			<Container disableGutters>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					spacing={2}
				>
					{/* Search left */}
					<Box width='150px'>
						<Stack direction='row' paddingTop='5px' columnGap={1.5}>
							<Box
								className={classes.searchLeft}
								display={w1024 ? "none" : "unset"}
							>
								<MenuIcon sx={{ fontSize: "25px" }} />
							</Box>
							<Box marginTop='4px' display={w1024 ? "unset" : "none"}>
								<img
									src='https://branchimg.sedaily.com/Decenter/top_verbal.jpg'
									alt='블록체인의 모든 것, 디센터'
								/>
							</Box>
						</Stack>
					</Box>
					{/* Search mid */}
					<Box>
						<img
							src='https://branchimg.sedaily.com/Decenter/logo2.png'
							alt='Decenter'
							onClick={routePage}
						/>
					</Box>
					{/* Search right */}
					<Box width='150px'>
						<Stack
							direction='row'
							paddingTop='5px'
							paddingRight='30px'
							className={classes.searchRight}
							columnGap={1.5}
							display={w1024 ? "none" : "unset"}
						>
							<Box>
								<SearchIcon sx={{ fontSize: "25px" }} />
							</Box>
						</Stack>
					</Box>
				</Stack>
			</Container>

			{/* Menu */}
			<Box
				padding='10px 0'
				className={w1024 ? classes.boxMenu : classes.boxMenuBackground}
			>
				<Container disableGutters>
					<Stack
						direction='row'
						justifyContent={w1024 ? "space-between" : "center"}
						alignItems='center'
						spacing={2}
					>
						{/* Menu left */}
						<Box width='150px' display={w1024 ? "unset" : "none"}>
							<Stack direction='row' paddingTop='5px' columnGap={1.5}>
								<Box>
									<TelegramIcon sx={{ fontSize: "25px" }} />
								</Box>
								<Box>
									<YouTubeIcon sx={{ fontSize: "25px" }} />
								</Box>

								<Box>
									<FacebookIcon sx={{ fontSize: "25px" }} />
								</Box>

								<Box>
									<InstagramIcon sx={{ fontSize: "25px" }} />
								</Box>
							</Stack>
						</Box>
						{/* Menu mid */}
						<Stack
							direction='row'
							columnGap='25px'
							fontSize={w1024 ? "20px" : "18px"}
						>
							<Typography
								onClick={() => router.push("/menu")}
								noWrap
								component='a'
								href='#'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								블록체인
							</Typography>
							<Typography
								noWrap
								component='a'
								href='#'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								IT산업
							</Typography>
							<Typography
								noWrap
								component='a'
								href='#'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								정책
							</Typography>
							<Typography
								noWrap
								component='a'
								href='#'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								동영상
							</Typography>
							<Typography
								noWrap
								component='a'
								href='#'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								피플·라이프
							</Typography>
							<Typography
								noWrap
								component='a'
								href='#'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								오피니언
							</Typography>
							<Typography
								noWrap
								component='a'
								href='#'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								이슈
							</Typography>
							{/* <Link
								href='/menu'
								className={w1024 ? classes.subMenuMid : classes.subMenuMidRes}
							>
								블록체인
							</Link>
							<Link
								href='/menu'
								className={w1024 ? classes.subMenuMid : classes.subMenuMidRes}
							>
								IT산업
							</Link>
							<Link
								href='/menu'
								className={w1024 ? classes.subMenuMid : classes.subMenuMidRes}
							>
								정책
							</Link>
							<Link
								href='/menu'
								className={w1024 ? classes.subMenuMid : classes.subMenuMidRes}
							>
								동영상
							</Link>
							<Link
								href='/menu'
								className={w1024 ? classes.subMenuMid : classes.subMenuMidRes}
							>
								피플·라이프
							</Link>
							<Link
								href='/menu'
								className={w1024 ? classes.subMenuMid : classes.subMenuMidRes}
							>
								오피니언
							</Link>
							<Link
								href='/menu'
								className={w1024 ? classes.subMenuMid : classes.subMenuMidRes}
							>
								이슈
							</Link> */}
						</Stack>
						{/* Menu right */}
						<Box width='150px' display={w1024 ? "unset" : "none"}>
							<Stack
								direction='row'
								paddingTop='5px'
								columnGap={1.5}
								justifyContent='flex-end'
							>
								<Box>
									<EmailIcon sx={{ fontSize: "25px" }} />
								</Box>

								<Box>
									<SearchIcon sx={{ fontSize: "25px" }} />
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Container>
			</Box>
		</header>
	);
};

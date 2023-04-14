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
	boxMenu: {
		borderTop: "1px solid #e6e6e6",
		borderBottom: "1px solid #888",
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
					<Stack direction='row' paddingTop='5px' columnGap={1.5} width='150px'>
						<Box display={w1024 ? "none" : "unset"}>
							<MenuIcon sx={{ fontSize: "35px" }} />
						</Box>
						<Box marginTop='4px' display={w1024 ? "unset" : "none"}>
							<img
								src='https://branchimg.sedaily.com/Decenter/top_verbal.jpg'
								alt='블록체인의 모든 것, 디센터'
							/>
						</Box>
					</Stack>

					{/* Search mid */}
					<Box>
						<img
							src='https://branchimg.sedaily.com/Decenter/logo2.png'
							alt='Decenter'
							onClick={routePage}
						/>
					</Box>
					{/* Search right */}

					<Stack
						direction='row'
						paddingTop='5px'
						justifyContent='flex-end'
						columnGap={1.5}
						width='150px'
					>
						<Box display={w1024 ? "none" : "unset"}>
							<SearchIcon sx={{ fontSize: "35px" }} />
						</Box>
					</Stack>
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
					>
						{/* Menu left */}
						<Stack
							direction='row'
							paddingTop='5px'
							columnGap={1.5}
							width='150px'
							display={w1024 ? "flex" : "none"}
						>
							<TelegramIcon sx={{ fontSize: "25px" }} />
							<YouTubeIcon sx={{ fontSize: "25px" }} />
							<FacebookIcon sx={{ fontSize: "25px" }} />
							<InstagramIcon sx={{ fontSize: "25px" }} />
						</Stack>

						{/* Menu mid */}
						<Stack
							direction='row'
							columnGap='25px'
							fontSize={w1024 ? "20px" : "18px"}
						>
							<Typography
								noWrap
								component='a'
								href='/menu'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								블록체인
							</Typography>
							<Typography
								noWrap
								component='a'
								href='/menu'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								IT산업
							</Typography>
							<Typography
								noWrap
								component='a'
								href='/menu'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								정책
							</Typography>
							<Typography
								noWrap
								component='a'
								href='/menu'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								동영상
							</Typography>
							<Typography
								noWrap
								component='a'
								href='/menu'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								피플·라이프
							</Typography>
							<Typography
								noWrap
								component='a'
								href='/menu'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								오피니언
							</Typography>
							<Typography
								noWrap
								component='a'
								href='/menu'
								sx={{ textDecoration: "none", color: w1024 ? "#000" : "#fff" }}
							>
								이슈
							</Typography>
						</Stack>
						{/* Menu right */}
						<Stack
							direction='row'
							paddingTop='5px'
							columnGap={1.5}
							justifyContent='flex-end'
							width='150px'
							display={w1024 ? "flex" : "none"}
						>
							<EmailIcon sx={{ fontSize: "25px" }} />

							<SearchIcon sx={{ fontSize: "25px" }} />
						</Stack>
					</Stack>
				</Container>
			</Box>
		</header>
	);
};

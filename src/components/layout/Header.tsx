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
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, FC, useEffect } from "react";
import ModalSearch from "../subComponents/ModalSearch";
import axios from "axios";

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

export const Header: FC = () => {
	const { classes, cx } = useStyles({ color: "red" });
	const [fixedMenu, setFixedMenu] = useState(false);
	const [fixedSearch, setFixedSearch] = useState(false);

	function routePage() {
		router.push("/");
	}
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w500 = useMediaQuery("(min-width:500px)");

	// handle Scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 50) {
				setFixedSearch(true);
			} else {
				setFixedSearch(false);
			}
			if (window.scrollY >= 140) {
				setFixedMenu(true);
			} else {
				setFixedMenu(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const [openModal, setOpenModal] = useState<boolean>(false);
	const [listTopics, setListTopics] = useState<any[]>([]);
	useEffect(() => {
		const fetchArticels = async () => {
			const { data } = await axios.get(`http://192.168.0.72:3000/topics`);
			setListTopics(data);
		};

		fetchArticels();
	}, []);
	// console.log("Topics:", listTopics);
	const router = useRouter();
	// console.log("param", router.query.menuId);
	return (
		<header>
			{openModal && (
				<ModalSearch openModal={openModal} setOpenModal={setOpenModal} />
			)}
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
			<Container
				disableGutters
				className={
					w1024 ? "" : fixedSearch ? classes.boxSearchFixed : classes.boxSearch
				}
			>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					spacing={2}
					height={w1024 ? "" : "60px"}
				>
					{/* Search left */}
					<Stack direction='row' paddingTop='5px' columnGap={1.5} width='150px'>
						<MenuIcon
							sx={{
								fontSize: "35px",
								display: w1024 ? "none" : "",
								marginLeft: "30px",
							}}
						/>
						<Box
							marginTop='4px'
							display={w1024 ? "" : "none"}
							paddingLeft={w1220 ? "" : "20px"}
						>
							<img
								src='https://branchimg.sedaily.com/Decenter/top_verbal.jpg'
								alt='블록체인의 모든 것, 디센터'
							/>
						</Box>
					</Stack>

					{/* Search mid */}
					<img
						className={classes.imgLogo}
						height={w1024 ? "" : "27px"}
						src={
							w1024
								? "https://branchimg.sedaily.com/Decenter/logo2.png"
								: "https://branchimg.sedaily.com/Decenter/decenter_m_logo.svg"
						}
						alt='Decenter'
						onClick={routePage}
					/>

					{/* Search right */}
					<Stack
						direction='row'
						padding='5px 30px 0 0'
						justifyContent='flex-end'
						columnGap={1.5}
						width='150px'
					>
						<SearchIcon
							sx={{ fontSize: "35px", display: w1024 ? "none" : "" }}
						/>
					</Stack>
				</Stack>
			</Container>

			{/* Menu */}
			<Box
				padding='10px 0'
				className={
					w1024
						? fixedMenu
							? classes.boxMenuFixed
							: classes.boxMenu
						: classes.boxMenuBackground
				}
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
							padding={w1220 ? "5px 0 0 0" : "5px 0 0 20px "}
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
						<Grid
							container
							justifyContent='center'
							columnGap={2}
							direction='row'
							fontSize={w1024 ? "20px" : "18px"}
						>
							{listTopics?.map((item) => (
								<Button
									disabled={
										Number(router.query.menuId) === Number(item.id)
											? true
											: false
									}
									// disabled
									key={item.id}
									onClick={() => {
										router.push({
											pathname: "/[name]",
											query: { name: item.id },
										});
									}}
								>
									<Typography
										noWrap
										component='a'
										sx={{
											textDecoration: "none",
											color: w1024 ? "#000" : "#fff",
										}}
									>
										블록체인
									</Typography>
								</Button>
							))}
						</Grid>
						{/* Menu right */}
						<Stack
							direction='row'
							padding={w1220 ? "5px 0 0 0" : "5px 20px 0 0"}
							columnGap={1.5}
							justifyContent='flex-end'
							width='150px'
							display={w1024 ? "flex" : "none"}
						>
							<EmailIcon sx={{ fontSize: "25px" }} />
							<SearchIcon
								onClick={() => setOpenModal(!openModal)}
								sx={{ fontSize: "25px", cursor: "pointer" }}
							/>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</header>
	);
};

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "tss-react/mui";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { BASE_URL } from "@/common";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { ModalSearch } from "@/components/SubComponents";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
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
}));

const Menu = () => {
	//
	const { classes, cx } = useStyles({ color: "red" });
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [fixedMenu, setFixedMenu] = useState(false);
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w500 = useMediaQuery("(min-width:500px)");
	//
	const [listTopics, setListTopics] = useState<any[]>([]);

	// handle Scroll
	useEffect(() => {
		const handleScroll = () => {
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
	const router = useRouter();

	useEffect(() => {
		const fetchArticle = async () => {
			const { data } = await axios.get(`${BASE_URL}/topics`);
			setListTopics(data);
		};

		fetchArticle();
	}, []);

	return (
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
			{/* show modal search */}
			{openModal && (
				<ModalSearch openModal={openModal} setOpenModal={setOpenModal} />
			)}
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
									Number(router.query.menuId) === Number(item.id) ? true : false
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
										color: w1024
											? Number(router.query.menuId) === Number(item.id)
												? "blue"
												: "#000"
											: "#fff",
									}}
								>
									{item.name}
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
	);
};

export default Menu;
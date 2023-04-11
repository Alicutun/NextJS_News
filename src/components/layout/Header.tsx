import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export const Header: React.FC = () => {
	const router = useRouter();
	function routePage() {
		router.push("/");
	}

	return (
		<header>
			{/* Coin bar */}
			<Box
				sx={{
					background: "#f2f2f2",
				}}
			>
				<Container disableGutters>
					<Grid container>
						<Grid
							item
							xs={2.8}
							sx={{
								borderLeft: "1px solid #ddd",
								padding: "10px 0",
							}}
						>
							<Stack
								direction='row'
								justifyContent='space-between'
								color='blue'
							>
								<Stack justifyContent='center'>
									<Typography fontSize='16px' paddingLeft='20px'>
										BTC
									</Typography>
								</Stack>
								<Stack direction='row' alignItems='center'>
									<Typography fontSize='13px'>37,643,000 원 </Typography>
									<Stack direction='row' alignItems='center'>
										<Typography fontSize='13px'>(+0.52%)</Typography>
										<ArrowDropDownIcon
											sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
										/>
									</Stack>
								</Stack>
							</Stack>
						</Grid>
						<Grid
							item
							xs={2.8}
							sx={{
								borderLeft: "1px solid #ddd",
								padding: "10px 0",
							}}
						>
							<Stack
								direction='row'
								justifyContent='space-between'
								color='blue'
							>
								<Stack justifyContent='center'>
									<Typography fontSize='16px' paddingLeft='20px'>
										BTC
									</Typography>
								</Stack>
								<Stack direction='row' alignItems='center'>
									<Typography fontSize='13px'>37,643,000 원 </Typography>
									<Stack direction='row' alignItems='center'>
										<Typography fontSize='13px'>(+0.52%)</Typography>
										<ArrowDropDownIcon
											sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
										/>
									</Stack>
								</Stack>
							</Stack>
						</Grid>
						<Grid
							item
							xs={2.8}
							sx={{
								borderLeft: "1px solid #ddd",
								padding: "10px 0",
							}}
						>
							<Stack
								direction='row'
								justifyContent='space-between'
								color='blue'
							>
								<Stack justifyContent='center'>
									<Typography fontSize='16px' paddingLeft='20px'>
										BTC
									</Typography>
								</Stack>
								<Stack direction='row' alignItems='center'>
									<Typography fontSize='13px'>37,643,000 원 </Typography>
									<Stack direction='row' alignItems='center'>
										<Typography fontSize='13px'>(+0.52%)</Typography>
										<ArrowDropDownIcon
											sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
										/>
									</Stack>
								</Stack>
							</Stack>
						</Grid>
						<Grid
							item
							xs={2.8}
							sx={{
								borderLeft: "1px solid #ddd",
								padding: "10px 0",
							}}
						>
							<Stack
								direction='row'
								justifyContent='space-between'
								color='blue'
							>
								<Stack justifyContent='center'>
									<Typography fontSize='16px' paddingLeft='20px'>
										BTC
									</Typography>
								</Stack>
								<Stack direction='row' alignItems='center'>
									<Typography fontSize='13px'>37,643,000 원 </Typography>
									<Stack direction='row' alignItems='center'>
										<Typography fontSize='13px'>(+0.52%)</Typography>
										<ArrowDropDownIcon
											sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
										/>
									</Stack>
								</Stack>
							</Stack>
						</Grid>
						<Grid
							item
							xs={0.8}
							sx={{
								borderLeft: "1px solid #ddd",
							}}
						>
							<Stack margin='15px'>
								<Link href='https://www.bithumb.com'>
									<img
										src='https://branchimg.sedaily.com/Decenter/bittumb_pc.png'
										alt=''
									/>
								</Link>
							</Stack>
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
								sx={{
									transform: "scale(1.5)",
									paddingLeft: "32px",
								}}
							>
								<MenuIcon />
							</Box>
							<Box marginTop='4px'>
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
							sx={{
								float: "right",
								transform: "scale(1.5)",
							}}
							columnGap={1.5}
						>
							<Box>
								<SearchIcon />
							</Box>
						</Stack>
					</Box>
				</Stack>
			</Container>

			{/* Menu */}
			<Box
				padding='10px 0'
				sx={{
					borderTop: "1px solid #e6e6e6",
					borderBottom: "1px solid #888",
				}}
			>
				<Container disableGutters>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='center'
						spacing={2}
					>
						{/* Menu left */}
						<Box width='150px'>
							<Stack
								direction='row'
								paddingTop='5px'
								paddingLeft='15px'
								sx={{
									transform: "scale(1.3)",
								}}
								columnGap={1.5}
							>
								<Box>
									<TelegramIcon />
								</Box>
								<Box>
									<YouTubeIcon />
								</Box>

								<Box>
									<FacebookIcon />
								</Box>

								<Box>
									<InstagramIcon />
								</Box>
							</Stack>
						</Box>
						{/* Menu mid */}
						<Stack direction='row' columnGap='25px' fontSize='20px'>
							<Link
								href='/menu'
								style={{
									textDecoration: "none",
									color: "#1e181a",
								}}
							>
								블록체인
							</Link>
							<Link
								href='/menu'
								style={{
									textDecoration: "none",
									color: "#1e181a",
								}}
							>
								IT산업
							</Link>
							<Link
								href='/menu'
								style={{
									textDecoration: "none",
									color: "#1e181a",
								}}
							>
								정책
							</Link>
							<Link
								href='/menu'
								style={{
									textDecoration: "none",
									color: "#1e181a",
								}}
							>
								동영상
							</Link>
							<Link
								href='/menu'
								style={{
									textDecoration: "none",
									color: "#1e181a",
								}}
							>
								피플·라이프
							</Link>
							<Link
								href='/menu'
								style={{
									textDecoration: "none",
									color: "#1e181a",
								}}
							>
								오피니언
							</Link>
							<Link
								href='/menu'
								style={{
									textDecoration: "none",
									color: "#1e181a",
								}}
							>
								이슈
							</Link>
						</Stack>
						{/* Menu right */}
						<Box width='150px'>
							<Stack
								direction='row'
								paddingTop='5px'
								sx={{
									float: "right",
									transform: "scale(1.3)",
								}}
								columnGap={1.5}
							>
								<Box>
									<EmailIcon />
								</Box>

								<Box>
									<SearchIcon />
								</Box>
							</Stack>
						</Box>
					</Stack>
				</Container>
			</Box>

			{/* header_topstory */}
			<Container disableGutters>
				<Grid container fontSize='16px' margin='20px 0'>
					<Grid item>
						<Typography color='#448aff' fontWeight='bold'>
							TOP STORIES
						</Typography>
					</Grid>
					<Grid item marginLeft='10px'>
						<Typography>업비트, 37분 만에 원화마켓 거래 재개</Typography>
					</Grid>
					<Grid item marginLeft='10px'>
						<Box
							color='#999'
							mt='-2px'
							sx={{
								transform: "scale(0.6)",
							}}
						>
							<AccessTimeIcon />
						</Box>
					</Grid>
					<Grid item>
						<Typography color='#999' fontSize='12px' pt='2px'>
							24분전
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</header>
	);
};

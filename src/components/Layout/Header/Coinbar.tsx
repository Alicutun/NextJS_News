import { SkeletonCoinbar } from "@/components/Skeleton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { socket } from "@/helpers";
import { formatPrice } from "@/utilities";
import Link from "next/link";
interface IDataSocket {
	symbol: string;
	price: string;
	percent: string;
}

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	backgroundf2f2f2: {
		background: "#f2f2f2",
	},
	itemCoinbar: {
		borderLeft: "1px solid #ddd",
	},
	iconDown: {
		top: "-5px",
		fontSize: "30px",
		color: "blue",
	},
}));

const Coinbar = () => {
	//
	const { classes, cx } = useStyles({ color: "red" });
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	const w500 = useMediaQuery("(min-width:500px)");
	//
	const [dataSocket, setDataSocket] = useState<IDataSocket[]>([]);

	useEffect(() => {
		socket.on("connect", () => {
			console.log("SOCKET CONNECTED");
			socket.emit("authenticate");
		});

		socket.on("authenticated", () => {
			socket.emit("join", {
				rooms: ["market-price"],
			});
		});

		socket.on("market-price", (args) => {
			setDataSocket(args);
		});

		return () => {};
	}, []);

	return (
		<>
			{dataSocket.length === 0 ? (
				<SkeletonCoinbar />
			) : (
				<Box className={classes.backgroundf2f2f2}>
					<Container disableGutters>
						<Grid container spacing={2}>
							<Grid item xs={w1024 ? 11 : w500 ? 10 : 10} container>
								{dataSocket
									?.slice(0, w1024 ? 4 : w500 ? 3 : 1)
									.map((item, index) => (
										<Grid
											item
											container
											xs={w1024 ? 3 : w500 ? 4 : 12}
											padding='10px 0'
											className={classes.itemCoinbar}
											justifyContent='space-between'
											alignItems='center'
											key={index}
										>
											<Grid item xs={3}>
												<Typography fontSize='16px' paddingLeft='20px'>
													{item.symbol}
												</Typography>
											</Grid>
											<Grid
												item
												xs={9}
												container
												alignItems='center'
												justifyContent='flex-end'
											>
												<Typography
													fontSize='13px'
													paddingRight='7px'
													color={Number(item.percent) > 0 ? "red" : "blue"}
												>
													{formatPrice(item.price)} 원
												</Typography>
												<Stack direction='row' alignItems='center'>
													<Typography
														color={Number(item.percent) > 0 ? "red" : "blue"}
														fontSize='13px'
													>
														({item.percent})%
													</Typography>
													{Number(item.percent) > 0 ? (
														<ArrowDropUpIcon
															sx={{
																top: "-5px",
																fontSize: "30px",
																color: "red",
															}}
														/>
													) : (
														<ArrowDropDownIcon
															sx={{
																top: "-5px",
																fontSize: "30px",
																color: "blue",
															}}
														/>
													)}
												</Stack>
											</Grid>
										</Grid>
									))}
							</Grid>
							<Grid
								item
								xs={w1024 ? 1 : w500 ? 2 : 2}
								className={classes.itemCoinbar}
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
			)}
		</>
	);
};

export default Coinbar;

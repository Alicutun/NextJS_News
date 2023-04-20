import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

export const TopStory: React.FC<{ display?: boolean }> = ({ display }) => {
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");
	return (
		<Container disableGutters>
			<Grid
				container
				fontSize='16px'
				padding={w1220 ? "20px 0 50px 0" : "20px 0 50px 20px"}
				justifyContent={w1024 ? "flex-start" : "center"}
				display={display ? "" : w1024 ? "flex" : "none"}
			>
				<Typography color='#448aff' fontWeight='bold'>
					TOP STORIES
				</Typography>
				<Typography marginLeft='10px'>
					업비트, 37분 만에 원화마켓 거래 재개
				</Typography>

				<Box color='#999' margin='3px 2px 0 10px'>
					<AccessTimeIcon sx={{ fontSize: "15px" }} />
				</Box>

				<Typography color='#999' fontSize='12px' pt='2px'>
					24분전
				</Typography>
			</Grid>
		</Container>
	);
};

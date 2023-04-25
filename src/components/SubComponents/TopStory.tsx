import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";

export const TopStory: React.FC<{ display?: boolean }> = ({ display }) => {
	//
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w1024 = useMediaQuery("(min-width:1024px)");

	const words = [
		{ id: 0, value: "con chim canh cut" },
		{ id: 1, value: "con dieu hau" },
		{ id: 2, value: "con chuon chuon" },
		{ id: 3, value: "con soc" },
		{ id: 4, value: "con con meo" },
		{ id: 5, value: "con ha ma" },
	];

	const [wordData, setWordData] = useState<any>(words[0]);
	const [i, setI] = useState<number>(0);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			if (i === 0) {
				setWordData(words[0]);
				setI((i) => i + 1);
			}

			if (i < words.length && i !== 0) {
				setWordData(words[i]);
				setI((i) => i + 1);
			}

			if (i === words.length) {
				setWordData(words[0]);
				setI(1);
			}
		}, 10000);
		return () => {
			clearTimeout(timer);
		};
	}, [i]);

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
				<Typography marginLeft='10px'>{wordData.value}</Typography>

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

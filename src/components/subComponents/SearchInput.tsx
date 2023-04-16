import { Stack, Input, Grid } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
	return (
		<Stack direction='row' width='100%' justifyContent={"center"}>
			<Input sx={{ width: "50%", border: "1px solid gray" }}></Input>
			<Grid
				container
				alignContent='center'
				justifyContent='center'
				sx={{ width: "55px", height: "55px", background: "#444" }}
			>
				<SearchIcon sx={{ color: "white" }} />
			</Grid>
		</Stack>
	);
};

export default SearchInput;

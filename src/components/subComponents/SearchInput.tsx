import { Stack, Input, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

export const SearchInput: React.FC<{ search?: any }> = ({ search }) => {
	const [searchArticle, setSearchArticle] = useState<any>(search);
	useEffect(() => {
		setSearchArticle(search);
	}, [search]);
	const router = useRouter();
	return (
		<Stack direction='row' width='100%' justifyContent={"center"}>
			<Input
				sx={{ width: "50%", border: "1px solid gray" }}
				onChange={(e) => setSearchArticle(e.target.value)}
				value={searchArticle}
			/>
			<Grid
				container
				alignContent='center'
				justifyContent='center'
				sx={{
					width: "55px",
					height: "55px",
					background: "#444",
					cursor: "pointer",
				}}
				onClick={() => {
					router.push({
						pathname: "/Search/[name]",
						query: { name: searchArticle },
					});
				}}
			>
				<SearchIcon sx={{ color: "white" }} />
			</Grid>
		</Stack>
	);
};

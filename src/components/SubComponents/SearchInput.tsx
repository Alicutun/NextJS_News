import { Stack, Input, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

export const SearchInput: React.FC<{}> = () => {
	const [searchArticle, setSearchArticle] = useState<any>();
	const router = useRouter();

	return (
		<Stack direction='row' width='100%' justifyContent={"center"}>
			<Input
				autoFocus
				sx={{ width: "50%", border: "1px solid gray" }}
				onChange={(e) => setSearchArticle(e.target.value)}
			/>
			<Button
				disabled={!searchArticle ? true : false}
				sx={{
					width: "55px",
					height: "55px",
					background: "#444",
					cursor: "pointer",
					borderRadius: "0px !important ",
					"&:hover": {
						backgroundColor: "#444 !important",
					},
				}}
				onClick={() => {
					router.push({
						pathname: "/Search/[name]",
						query: { name: searchArticle },
					});
				}}
			>
				<SearchIcon sx={{ color: "white" }} />
			</Button>
		</Stack>
	);
};

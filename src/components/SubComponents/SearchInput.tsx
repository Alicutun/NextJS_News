import { Stack, Button, TextField, Container } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

export const SearchInput: React.FC<{}> = () => {
	//
	const router = useRouter();

	const [searchArticle, setSearchArticle] = useState<any>();

	return (
		<Stack direction='row' width='100%' justifyContent={"center"}>
			<TextField
				sx={{ height: "55px", width: "50%" }}
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

import React, { useEffect, useState } from "react";
import NorthIcon from "@mui/icons-material/North";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";

const BackToTopButton = () => {
	//
	const w1024 = useMediaQuery("(min-width:1024px)");
	//
	const [backToTop, setBackToTop] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setBackToTop(true);
			} else {
				setBackToTop(false);
			}
		});
	}, []);

	return (
		<div>
			{w1024
				? backToTop && (
						<Grid
							container
							alignContent='center'
							justifyContent='center'
							sx={{
								width: "52px",
								height: "52px",
								background: "white",
								borderRadius: "50%",
								position: "fixed",
								right: "100px",
								bottom: "200px",
								border: "1px solid gray",
								cursor: "pointer",
							}}
						>
							<NorthIcon
								onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							/>
						</Grid>
				  )
				: null}
		</div>
	);
};

export default BackToTopButton;

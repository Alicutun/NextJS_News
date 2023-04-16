import React, { useEffect, useState } from "react";
import NorthIcon from "@mui/icons-material/North";
import Grid from "@mui/material/Grid";

const BackToTopButton = () => {
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
			{backToTop && (
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
			)}
		</div>
	);
};

export default BackToTopButton;

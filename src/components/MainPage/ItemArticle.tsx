import { formatTimeListArticle } from "@/utilities";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import React from "react";
import { Marker } from "react-mark.js";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	borderTop: {
		borderTop: "1px solid #e6e8eb",
	},
	box1: {
		border: "solid 1px #ced2d7",
		background: "#f7f7f7",
		overflow: "hidden",
	},
	itemTime: {
		color: "#888",
		paddingBottom: "3px",
		fontSize: "12px",
	},
	itemContent: {
		fontSize: "13px",
		color: "#888888",
		lineHeight: "19px",
		overflow: "hidden",
		maxHeight: "35px ",
	},
	marker: {
		fontWeight: "bold",
		background: "none",
		color: "#247acd",
	},
}));

export const ItemArticle: React.FC<{
	key: any;
	id: number;
	img: string;
	title: string;
	editDate: string;
	content: string;
	valueSearch?: string;
}> = ({ key, id, img, title, editDate, content, valueSearch }) => {
	//
	const router = useRouter();
	//
	const { classes, cx } = useStyles({ color: "red" });
	const w1220 = useMediaQuery("(min-width:1220px)");
	const w640 = useMediaQuery("(min-width:640px)");

	return (
		<Grid
			sx={{
				cursor: "pointer",
			}}
			container
			className={classes.borderTop}
			padding='20px 0'
			key={key}
			onClick={() => {
				router.push({
					pathname: "/news/[name]",
					query: { name: id },
				});
			}}
		>
			<Grid
				item
				xs={2}
				container
				justifyContent='center'
				alignItems='center'
				className={Number(key) === 0 ? "" : classes.box1}
				height={w640 ? "77px" : "55px"}
			>
				<img height='100%' src={img} alt='' />
			</Grid>
			<Grid item xs={10} paddingLeft='15px'>
				<Typography noWrap fontSize='20px' color='#000' lineHeight='24px'>
					{title}
				</Typography>
				<Typography className={classes.itemTime}>
					김정우 기자 | {formatTimeListArticle(editDate)}
				</Typography>
				{/* use Marker to highlight-text */}
				<Marker mark={valueSearch} options={{ className: classes.marker }}>
					<Box
						className={classes.itemContent}
						display={w640 ? "" : "none"}
						dangerouslySetInnerHTML={{
							__html: content,
						}}
					></Box>
				</Marker>
			</Grid>
		</Grid>
	);
};

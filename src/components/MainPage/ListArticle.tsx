import * as React from "react";
import DoneIcon from "@mui/icons-material/Done";
import {
	Box,
	Grid,
	Pagination,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useRouter } from "next/router";
import { formatTimeListArticle } from "@/utilities";
import SkeletonListMovie from "../Skeleton/SkeletonListMovie";
import { LIMIT } from "@/common";
import { Marker } from "react-mark.js";

const useStyles = makeStyles<{ color: any }>()((theme, { color }) => ({
	border: {
		border: "1px solid #e6e8eb",
	},
	borderTop: {
		borderTop: "1px solid #e6e8eb",
	},
	box1: {
		border: "solid 1px #ced2d7",
		background: "#f7f7f7",
	},
	itemTime: {
		color: "#888",
		paddingBottom: " 3px",
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

export const ListArticle: React.FC<{
	listArticle: any[];
	page: number;
	setPage: any;
	total: number;
	valueSearh?: any;
}> = ({ listArticle, page, setPage, total, valueSearh }) => {
	const { classes, cx } = useStyles({ color: "red" });
	// fix bug dangerouslySetInnerHTML Error: Hydration failed because the initial UI does not match what was rendered on the server.

	const [listArticles, setDataContent] = React.useState<any[]>([]);
	React.useEffect(() => setDataContent(listArticle), [listArticle]);

	const w1220 = useMediaQuery("(min-width:1220px)");
	const w640 = useMediaQuery("(min-width:640px)");
	const router = useRouter();
	// console.log("listArticle: ", listArticle);
	return (
		<article>
			{/* Category */}
			<Stack
				direction='row'
				className={classes.box1}
				padding='10px 0px 10px 10px'
				columnGap={2}
			>
				<DoneIcon style={{ color: "orange" }} />
				<Typography>최신순 | 인기도순</Typography>
			</Stack>

			{/* List article */}
			{listArticles ? (
				listArticle?.length === 0 ? (
					<Typography>No Data</Typography>
				) : (
					<Box marginLeft={w1220 ? "" : "10px"}>
						{/* use Marker to highlight-text */}
						<Marker mark={valueSearh} options={{ className: classes.marker }}>
							{listArticles?.map((item: any) => (
								<Grid
									sx={{
										cursor: "pointer",
									}}
									container
									className={classes.borderTop}
									padding='20px 0'
									key={item.id}
									onClick={() => {
										router.push({
											pathname: "/News/[name]",
											query: { name: item.id },
										});
									}}
								>
									<Grid item xs={2}>
										<Stack alignItems='center' className={classes.box1}>
											<img
												height={w640 ? "75px" : "50px"}
												src={item.details[0].summaryImage}
												alt=''
											/>
										</Stack>
									</Grid>
									<Grid item xs={10}>
										<Box marginLeft='10px'>
											<Typography
												noWrap
												fontSize='20px'
												color='#000'
												lineHeight='24px'
											>
												{item.details[0].summary}
											</Typography>
											<Typography className={classes.itemTime}>
												김정우 기자 | {formatTimeListArticle(item.editDate)}
											</Typography>

											<Box
												className={classes.itemContent}
												display={w640 ? "" : "none"}
												dangerouslySetInnerHTML={{
													__html: item.details[0].content,
												}}
											></Box>
										</Box>
									</Grid>
								</Grid>
							))}
						</Marker>

						<Stack alignItems='center' marginBottom='20px'>
							<Pagination
								size='small'
								count={Math.ceil(total / LIMIT)}
								page={page}
								onChange={(e, value) => setPage(value)}
								showFirstButton
								showLastButton
							/>
						</Stack>
					</Box>
				)
			) : (
				<SkeletonListMovie />
			)}
		</article>
	);
};

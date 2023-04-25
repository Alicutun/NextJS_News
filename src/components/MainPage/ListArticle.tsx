import * as React from "react";
import DoneIcon from "@mui/icons-material/Done";
import {
	Box,
	Pagination,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useRouter } from "next/router";
import SkeletonListMovie from "../Skeleton/SkeletonListMovie";
import { LIMIT } from "@/common";
import { ItemArticle } from "./ItemArticle";

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
}));

export const ListArticle: React.FC<{
	listArticle: any[];
	page: number;
	setPage: any;
	total: number;
	valueSearch?: any;
}> = ({ listArticle, page, setPage, total, valueSearch }) => {
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
						{listArticles.map((item: any, index: number) => (
							<ItemArticle
								key={index}
								id={item.id}
								img={item.details[0].summaryImage}
								title={item.details[0].summary}
								editDate={item.editDate}
								content={item.details[0].content}
								valueSearch={valueSearch}
							/>
						))}
						{/* Pagination */}
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

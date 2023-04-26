import {
	Autocomplete,
	Container,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LinkIcon from "@mui/icons-material/Link";
import TextField from "@mui/material/TextField";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
	navFooter: {
		color: "#666666",
		background: "#f8f8f8",
		padding: "15px 20px",
		border: "solid 1px #eaeaea;",
	},
	navFooterRes: {
		color: "#666666",
		background: "#303030",
		padding: "15px 20px",
	},
	optionFooter: {
		borderRadius: "50px",
		background: "#fff",
		width: 200,
		".MuiAutocomplete-inputRoot": {
			height: "40px",
			borderRadius: "50px",
		},
		".MuiAutocomplete-input": {
			padding: "0.5px 4px 7.5px 6px !important",
		},
	},
	addressRes: {
		color: "#999",
		borderTop: "1px solid #3f3f3f",
		borderBottom: "1px solid #3f3f3f",
	},
}));

export function Footer() {
	//
	const { classes } = useStyles();
	const w1024 = useMediaQuery("(min-width:1024px)");
	//
	const options = ["Option 1", "Option 2", "Option 1asd", "Option 2asda"];
	//
	const [value, setValue] = React.useState<string | null>(options[0]);
	const [inputValue, setInputValue] = React.useState("");

	return (
		<footer>
			<Container disableGutters>
				{/* Link */}
				<Stack
					mt={"100px"}
					justifyContent={w1024 ? "flex-end" : "center"}
					direction='row'
					columnGap='10px'
				>
					디센터를 Follow 하세요
					<FacebookIcon />
					<TwitterIcon />
					<ForwardToInboxIcon />
					<LinkIcon />
				</Stack>

				{/* menu footer */}
				<Stack
					direction='row'
					alignItems='center'
					spacing={2}
					mt={"20px"}
					className={w1024 ? classes.navFooter : classes.navFooterRes}
				>
					<Grid container gap='20px'>
						<Typography>회사소개</Typography>
						<Typography fontWeight='bold' color='black'>
							회사소개
						</Typography>
						<Typography>회사소개</Typography>
						<Typography>회사소개</Typography>
					</Grid>

					<Autocomplete
						value={value}
						onChange={(event: any, newValue: string | null) => {
							setValue(newValue);
						}}
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							setInputValue(newInputValue);
						}}
						id='controllable-states-demo'
						options={options}
						className={classes.optionFooter}
						renderInput={(params) => <TextField {...params} />}
					/>
				</Stack>

				{/* address */}
				<Stack
					direction='column'
					spacing={1}
					p='20px 30px'
					sx={{ background: w1024 ? "white" : "#303030" }}
					className={w1024 ? "" : classes.addressRes}
				>
					<img
						width='155px'
						src={
							w1024
								? "https://branchimg.sedaily.com/Decenter/footer_logo.jpg"
								: "https://branchimg.sedaily.com/Decenter/m_footer_log.svg"
						}
						alt=''
					/>
					<Grid container>
						<Typography>주소 : 서울 종로구 율곡로 6, 비동 14층</Typography>
						<Typography>대표전화 : ☏ 070-4178-6638</Typography>
					</Grid>
					<Grid container>
						<Typography>등록번호 :서울 아 05049 </Typography>
						<Typography>제호 :디센터</Typography>
						<Typography>등록일자 : 2018.03.27</Typography>
						<Typography>발행 ·편집인 : 손동영</Typography>
						<Typography>청소년보호책임자 : 손동영</Typography>
					</Grid>
					<Typography>Copyright ⓒ Decenter, All right reserved</Typography>
				</Stack>
			</Container>
		</footer>
	);
}

import {
	Autocomplete,
	Box,
	Container,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import * as React from "react";
import PrintIcon from "@mui/icons-material/Print";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LinkIcon from "@mui/icons-material/Link";
import TextField from "@mui/material/TextField";

export interface FooterProps {}

export function Footer(props: FooterProps) {
	const options = ["Option 1", "Option 2", "Option 1asd", "Option 2asda"];

	const [value, setValue] = React.useState<string | null>(options[0]);
	const [inputValue, setInputValue] = React.useState("");
	return (
		<footer>
			<Container fixed disableGutters>
				<Grid container direction='column' mt={"100px"}>
					<Grid item>
						<Grid justifyContent='flex-end' container sx={{ gap: "10px" }}>
							디센터를 Follow 하세요
							<FacebookIcon />
							<TwitterIcon />
							<ForwardToInboxIcon />
							<LinkIcon />
						</Grid>
					</Grid>
					<Grid
						item
						m={"20px 0"}
						sx={{
							color: "#666666",
							background: "#f8f8f8 !important",
							padding: "15px 20px",
							border: "solid 1px #eaeaea;",
						}}
					>
						<Stack
							direction='row'
							justifyContent='center'
							alignItems='center'
							spacing={2}
						>
							<Grid item container sx={{ gap: "20px" }}>
								<Typography>회사소개</Typography>
								<Typography sx={{ fontWeight: "bold", color: "black" }}>
									회사소개
								</Typography>
								<Typography>회사소개</Typography>
								<Typography>회사소개</Typography>
							</Grid>
							<Grid item>
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
									sx={{
										borderRadius: "50px",
										background: "#fff",
										width: 300,
										".MuiAutocomplete-inputRoot": {
											height: "40px",
											borderRadius: "50px",
										},
										".MuiAutocomplete-input": {
											padding: "0.5px 4px 7.5px 6px !important",
										},
									}}
									renderInput={(params) => <TextField {...params} />}
								/>
							</Grid>
						</Stack>
					</Grid>
					<Container>
						<Grid container direction='column' mb={"50px"}>
							<Box>
								<img
									src='https://branchimg.sedaily.com/Decenter/footer_logo.jpg'
									alt=''
								/>
							</Box>
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
						</Grid>
					</Container>
				</Grid>
			</Container>
		</footer>
	);
}

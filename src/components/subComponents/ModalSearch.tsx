import { Modal, Stack, Typography, Input, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";

const ModalSearch: React.FC<{ openModal: any; setOpenModal: any }> = ({
	openModal,
	setOpenModal,
}) => {
	return (
		<Modal
			open={openModal}
			onClose={() => setOpenModal(false)}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Stack
				direction='column'
				alignItems='center'
				justifyContent='center'
				rowGap={2}
				sx={{
					margin: "194px auto 0",
					width: "1200px",
					height: "220px",
					background: "white",
				}}
			>
				<Typography variant='h4'>SEARCH</Typography>
				<Stack direction='row'>
					<Input sx={{ width: "500px" }}></Input>
					<Grid
						container
						alignContent='center'
						justifyContent='center'
						sx={{ width: "55px", height: "55px", background: "#444" }}
					>
						<SearchIcon sx={{ color: "white" }} />
					</Grid>
				</Stack>
				<CloseIcon
					onClick={() => setOpenModal(false)}
					fontSize='large'
					sx={{ color: "gray" }}
				/>
			</Stack>
		</Modal>
	);
};

export default ModalSearch;

import { Modal, Stack, Typography, Input, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
import { SearchInput } from "../subComponents";

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
				<SearchInput />
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
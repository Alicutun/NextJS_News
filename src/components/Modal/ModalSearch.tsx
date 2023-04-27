import { Modal, Stack, Typography, Input, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { SearchInput } from "../SubComponents";

export const ModalSearch: React.FC<{
	openModal: boolean;
	setOpenModal: any;
}> = ({ openModal, setOpenModal }) => {
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
				<SearchInput onSearch={() => setOpenModal(false)} />
				<CloseIcon
					onClick={() => setOpenModal(false)}
					fontSize='large'
					sx={{ color: "gray", cursor: "pointer" }}
				/>
			</Stack>
		</Modal>
	);
};

import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';

export const ModalFooter: React.FC<{
  openModal: boolean;
  setOpenModal: any;
  nameHead1: string;
  nameHead2: string;
  content?: string;
}> = ({ openModal, setOpenModal, nameHead1, nameHead2, content }) => {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <Grid
        width={800}
        height={700}
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
        }}
      >
        <Grid height={45} container>
          <Grid item container xs={6} sx={{ background: '#313131' }} alignItems="center">
            <Typography
              color="#d8d8d8"
              lineHeight="14px"
              fontSize={16}
              pr={1}
              borderRight="1px solid #d8d8d8"
            >
              &emsp;{nameHead1}
            </Typography>
            <Typography color="#d8d8d8" pl={1} fontSize={16}>
              {nameHead2}
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={6}
            sx={{ background: '#313131' }}
            alignItems="center"
            justifyContent="flex-end"
          >
            <CloseIcon
              onClick={() => setOpenModal(false)}
              fontSize="large"
              sx={{ color: 'gray', cursor: 'pointer', paddingRight: '5px' }}
            />
          </Grid>
        </Grid>
        <Typography>{content}</Typography>
      </Grid>
    </Modal>
  );
};

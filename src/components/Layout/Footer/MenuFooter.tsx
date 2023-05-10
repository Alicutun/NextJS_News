import { ModalFooter } from '@/components/Modal';
import { Autocomplete, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  navFooter: {
    color: '#666666',
    background: '#f8f8f8',
    padding: '15px 20px',
    border: 'solid 1px #eaeaea;',
  },
  navFooterRes: {
    color: '#666666',
    background: '#303030',
    padding: '15px 20px',
  },
  optionFooter: {
    borderRadius: '50px',
    background: '#fff',
    width: 200,
    '.MuiAutocomplete-inputRoot': {
      height: '40px',
      borderRadius: '50px',
    },
    '.MuiAutocomplete-input': {
      padding: '0.5px 4px 7.5px 6px !important',
    },
  },
}));

export const MenuFooter = () => {
  const { classes } = useStyles();

  const w1024 = useMediaQuery('(min-width:1024px)');
  const options = ['Option 1', 'Option 2', 'Option 1a', 'Option 2a'];

  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [nameHead1, setNameHead1] = useState<string>('');
  const [nameHead2, setNameHead2] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleClickMenu = (name1: string, name2: string, content: string) => {
    setOpenModal(!openModal);
    setNameHead1(name1);
    setNameHead2(name2);
    setContent(content);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      mt="20px"
      className={w1024 ? classes.navFooter : classes.navFooterRes}
    >
      <ModalFooter
        openModal={openModal}
        setOpenModal={setOpenModal}
        nameHead1={nameHead1}
        nameHead2={nameHead2}
        content={content}
      />

      <Grid container gap="20px">
        <Typography onClick={() => handleClickMenu('About', 'Head1', 'conten1')}>About</Typography>
        <Typography
          onClick={() => handleClickMenu('Privacy Statement', 'Head2', 'conten2')}
          fontWeight="bold"
          color="black"
        >
          Privacy Statement
        </Typography>
        <Typography onClick={() => handleClickMenu('Terms of UseAccess terms', 'Head2', 'conten3')}>
          Terms of UseAccess terms
        </Typography>
        <Typography onClick={() => handleClickMenu('Youth Protection Policy', 'Head2', 'conten4')}>
          Youth Protection Policy
        </Typography>
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
        id="controllable-states-demo"
        options={options}
        className={classes.optionFooter}
        renderInput={(params) => <TextField {...params} />}
      />
    </Stack>
  );
};

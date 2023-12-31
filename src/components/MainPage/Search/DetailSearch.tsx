import { IPeriod, ITarget } from '@/common';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  selection: {
    background: '#fff',
    width: 200,
    '.MuiAutocomplete-inputRoot': {
      height: '40px',
    },
    '.MuiAutocomplete-input': {
      padding: '0.5px 4px 7.5px 6px !important',
    },
  },
  textfield: {
    height: '56px',
    width: '50%',
    '& > div': {
      borderRadius: '0',
    },
  },
  buttonSearch: {
    height: '56px',
    background: '#444',
    cursor: 'pointer',
    borderRadius: '0px !important ',
    '&:hover': {
      backgroundColor: '#444 !important',
    },
  },
}));

const { ONE_WEEK, ONE_MONTH, THREE_MONTH, SIX_MONTH, ONE_YEAR } = IPeriod;
const iPeriodOptions = [ONE_WEEK, ONE_MONTH, THREE_MONTH, SIX_MONTH, ONE_YEAR];
const { TITLE_BODY, TITLE, MAIN_TEXT, NAME_REPORTER, KEY_WORD, PHOTO, EVENT_NAME } = ITarget;
const targetOptions = [TITLE_BODY, TITLE, MAIN_TEXT, NAME_REPORTER, KEY_WORD, PHOTO, EVENT_NAME];

export const DetailSearch: React.FC<{}> = () => {
  const router = useRouter();

  const { classes } = useStyles();
  const w1220 = useMediaQuery('(min-width:1220px)');
  const w1024 = useMediaQuery('(min-width:1024px)');
  const w640 = useMediaQuery('(min-width:640px)');

  const [search, setSearch] = useState<string>('');
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [periodStart, setPeriodStart] = useState<string>();
  const [period, setPeriod] = useState<string>(SIX_MONTH);
  const [target, setTarget] = useState<string>(TITLE_BODY);
  const [periodEnd, setPeriodEnd] = useState<string>();

  const searchDetail = () => {
    if (periodStart && periodEnd)
      router.push(
        `/${
          router.query.locale
        }/search?text=${search}&period=${period}&periodS=${periodStart}&periodE=${periodEnd}&page=${1}`
      );
    if (!periodEnd) {
      setPeriodStart(undefined);
      router.push(`/${router.query.locale}/search?text=${search}&period=${period}&page=1`);
    }
  };

  const handleReset = () => {
    setPeriodStart(undefined);
    setPeriodEnd(undefined);
  };

  const handleSearchEnter = async (event: any) => {
    if (event.key === 'Enter') {
      searchDetail();
    }
  };

  useEffect(() => {
    setSearch(`${router?.query?.text}` ?? '');
    return () => {};
  }, [router.query.text]);

  return (
    <Grid
      margin={w1220 ? '0 0 40px 0' : w1024 ? '0 0 40px 20px' : '0 0 40px 0'}
      sx={{ background: '#f7f7f7', border: 'solid 1px #ced2d7' }}
    >
      {/* row 1 search +button */}
      <Grid
        container
        height={100}
        alignItems="center"
        justifyContent="center"
        sx={{ borderBottom: 'solid 1px #ced2d7' }}
      >
        <TextField
          value={search ?? ''}
          className={classes.textfield}
          onKeyUp={(e) => handleSearchEnter(e)}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button
          disabled={!search ? true : false}
          className={classes.buttonSearch}
          onClick={searchDetail}
        >
          <Typography m="0 10px" color="white">
            search
          </Typography>
        </Button>
      </Grid>
      {/* row 1 advance search */}
      <Stack
        alignItems="center"
        direction={w640 ? 'row' : 'column'}
        height={w640 ? 60 : 'auto'}
        sx={{ borderBottom: 'solid 1px #ced2d7' }}
      >
        <Grid
          container
          width="100%"
          direction="row"
          alignItems="center"
          marginTop="10px"
          columnSpacing={w640 ? 2 : 0}
          padding="0 20px"
        >
          <Grid
            item
            xs={w640 ? 6 : 12}
            paddingBottom="10px"
            container
            direction="row"
            alignItems="center"
          >
            <Grid item xs={2} container>
              <Typography fontSize={12}>Search period</Typography>
            </Grid>
            <Grid item xs={10}>
              <Select
                fullWidth
                size="small"
                value={period}
                onChange={(event: SelectChangeEvent) => setPeriod(event.target.value as string)}
                sx={{ fontSize: '13px' }}
              >
                {iPeriodOptions?.map((item) => (
                  <MenuItem key={item} value={item} sx={{ fontSize: '13px' }}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid item xs={w640 ? 6 : 12} paddingBottom="10px" container alignItems="center">
            <Grid item xs={2} container>
              <Typography fontSize={12}>Search target</Typography>
            </Grid>
            <Grid item xs={10}>
              <Select
                fullWidth
                size="small"
                value={target}
                onChange={(event: SelectChangeEvent) => setTarget(event.target.value as string)}
                sx={{ fontSize: '13px' }}
              >
                {targetOptions?.map((item) => (
                  <MenuItem key={item} value={item} sx={{ fontSize: '13px' }}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Stack
          sx={{ borderLeft: 'solid 1px #ced2d7', cursor: 'pointer' }}
          width={w640 ? '130px' : '100%'}
          paddingBottom={w640 ? '' : '10px'}
          height="100%"
          direction="row"
          justifyContent="center"
          alignItems="center"
          onClick={() => setShowDetail(!showDetail)}
        >
          <Typography fontSize={12}>Ad search</Typography>
          {showDetail ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Stack>
      </Stack>
      {/* Show search detail */}
      {!showDetail && (
        <Grid
          container
          width="100%"
          direction="row"
          alignItems="center"
          padding="10px 20px 0 20px"
          sx={{ background: '#fff' }}
        >
          {/* include word */}
          <Grid
            item
            xs={w640 ? 3 : 12}
            paddingBottom="10px"
            container
            direction="row"
            alignItems="center"
          >
            <Grid item xs={3} container>
              <Typography fontSize={12}>Also includes the words</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid item xs={w640 ? 3 : 12} paddingBottom="10px" container alignItems="center">
            <Grid item xs={3} container>
              <Typography fontSize={12} textAlign={w640 ? 'center' : 'left'}>
                Except for the words
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField fullWidth size="small" />
            </Grid>
          </Grid>
          {/* periodS - periodE */}
          <Grid item xs={w640 ? 6 : 12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid container paddingBottom="10px" alignItems="center">
                <Grid item xs={3} container justifyContent={w640 ? 'center' : ''}>
                  <Typography fontSize={12}>Period setting</Typography>
                </Grid>
                <Grid item xs={9} container alignItems="center">
                  <DatePicker
                    sx={{ width: '45%' }}
                    value={periodStart ? dayjs(periodStart) : null}
                    onChange={(newValue) => setPeriodStart(newValue?.toISOString())}
                    slotProps={{
                      textField: {
                        size: 'small',
                      },
                      openPickerButton: {
                        size: 'small',
                      },
                      openPickerIcon: {
                        fontSize: '10px',
                      },
                    }}
                  />
                  <Typography>&nbsp;~&nbsp;</Typography>
                  <DatePicker
                    sx={{ width: '45%' }}
                    value={periodEnd ? dayjs(periodEnd) : null}
                    onChange={(newValue) => setPeriodEnd(newValue?.toISOString())}
                    slotProps={{
                      textField: {
                        size: 'small',
                      },
                      openPickerButton: {
                        size: 'small',
                      },
                      openPickerIcon: {
                        fontSize: '10px',
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
          </Grid>
          {/* Button  */}
          <Grid
            item
            container
            direction="row"
            padding="20px 0"
            sx={{ borderTop: 'solid 1px #ced2d7' }}
          >
            <Grid item xs={6}>
              <Button onClick={handleReset}>Reset</Button>
            </Grid>
            <Grid item xs={6} container justifyContent="flex-end">
              <Button onClick={searchDetail}>Search</Button>
              <Button onClick={() => setShowDetail(!showDetail)}>Cancel</Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

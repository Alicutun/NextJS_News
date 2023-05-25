import { LOCALES, NetworkRequest } from '@/common';
import { FormControl, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import { CustomImage } from './CustomImage';
import axios from 'axios';
import { useEffect } from 'react';

export const SelectLocale = () => {
  const router = useRouter();
  const { query, asPath } = router;

  const onChangeLocale = (locale: string) => {
    const parsePath = asPath.split('/');
    parsePath[1] = locale;
    const path = parsePath.join('/');
    router.push(path);
  };

  useEffect(() => {
    const fetchLocale = async () => {
      const { data } = await axios.get(`${NetworkRequest.BASE_URL}/languages`);
    };
    fetchLocale();
  }, []);

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        fullWidth
        size="small"
        value={(query.locale as string) ?? LOCALES.US}
        onChange={(event: SelectChangeEvent) => onChangeLocale(event.target.value)}
      >
        <MenuItem value={LOCALES.US}>
          <Grid container>
            <Grid item xs={7} textAlign="center">
              EN
            </Grid>
            <Grid item xs={5}>
              <CustomImage
                sx={{
                  height: '20px',
                  justifyContent: 'center',
                }}
                style={{ objectFit: 'contain' }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuV4aJT3E2Ry09qI7NEYpyjuiuQrjUpjOMtw&usqp=CAU"
                altImage=""
              />
            </Grid>
          </Grid>
        </MenuItem>
        <MenuItem value={LOCALES.KR}>
          <Grid container>
            <Grid item xs={7} textAlign="center">
              KR
            </Grid>
            <Grid item xs={5}>
              <CustomImage
                sx={{
                  height: '20px',
                  justifyContent: 'center',
                }}
                style={{ objectFit: 'contain' }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1280px-Flag_of_South_Korea.svg.png"
                altImage=""
              />
            </Grid>
          </Grid>
        </MenuItem>

        <MenuItem value={LOCALES.VN}>
          <Grid container>
            <Grid item xs={7} textAlign="center">
              VN
            </Grid>
            <Grid item xs={5}>
              <CustomImage
                sx={{
                  height: '20px',
                  justifyContent: 'center',
                }}
                style={{ objectFit: 'contain' }}
                src="data:image/png;base64,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"
                altImage=""
              />
            </Grid>
          </Grid>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

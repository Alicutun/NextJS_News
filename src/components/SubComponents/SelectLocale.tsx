import React from 'react';
import { LOCALES } from '@/common';
import { Container, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';

export const SelectLocale = () => {
  const router = useRouter();
  const { query, asPath } = router;

  const onChangeLocale = (locale: string) => {
    const parsePath = asPath.split('/');
    parsePath[1] = locale;
    const path = parsePath.join('/');
    router.push(path);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        fullWidth
        size="small"
        value={(query.locale as string) ?? LOCALES.US}
        onChange={(event: SelectChangeEvent) => onChangeLocale(event.target.value)}
      >
        <MenuItem value={LOCALES.US}>{LOCALES.US}</MenuItem>
        <MenuItem value={LOCALES.KR}>{LOCALES.KR}</MenuItem>
      </Select>
    </FormControl>
  );
};

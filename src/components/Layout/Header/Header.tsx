import { LOCALES } from '@/common';
import { Container, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Coinbar } from './Coinbar';
import { MenuHeader } from './MenuHeader';
import { Search } from './Search';

export const Header: FC = () => {
  const router = useRouter();
  const { query, asPath } = router;

  const onChangeLocale = (locale: string) => {
    const parsePath = asPath.split('/');
    parsePath[1] = locale;
    const path = parsePath.join('/');
    router.push(path);
  };

  return (
    <header>
      <Coinbar />
      <Search />
      <MenuHeader />
      <Container>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <Select
            size="small"
            value={(query.locale as string) ?? LOCALES.US}
            onChange={(event: SelectChangeEvent) => onChangeLocale(event.target.value)}
          >
            <MenuItem value={LOCALES.US}>{LOCALES.US}</MenuItem>
            <MenuItem value={LOCALES.KR}>{LOCALES.KR}</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </header>
  );
};

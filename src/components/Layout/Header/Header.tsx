import { FC } from 'react';
import { Coinbar } from './Coinbar';
import { Search } from './Search';
import { MenuHeader } from './MenuHeader';

export const Header: FC = () => {
  return (
    <header>
      <Coinbar />
      <Search />
      <MenuHeader />
    </header>
  );
};

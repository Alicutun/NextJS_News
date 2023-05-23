import { FC } from 'react';
import { Coinbar } from './Coinbar';
import { MenuHeader } from './MenuHeader';
import { Search } from './Search';

export const Header: FC = () => {
  return (
    <header>
      <Coinbar />
      <Search />
      <MenuHeader />
    </header>
  );
};

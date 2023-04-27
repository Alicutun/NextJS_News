import { FC } from 'react';
import { Coinbar } from './Coinbar';
import { Search } from './Search';
import { Menu } from './Menu';

export const Header: FC = () => {
  return (
    <header>
      <Coinbar />
      <Search />
      <Menu />
    </header>
  );
};

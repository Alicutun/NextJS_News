import Coinbar from "./Coinbar";
import Search from "./Search";
import Menu from "./Menu";
import { FC } from "react";

export const Header: FC = () => {
	return (
		<header>
			<Coinbar />
			<Search />
			<Menu />
		</header>
	);
};

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
	const router = useRouter();
	function routePage() {
		router.push("/");
	}

	return (
		<header id='header'>
			<div className='header_coin_bar'>
				<div className='coinbar'>
					<div className='coinbar_sub'>
						<div className='coinbar_sub_left'>BTC</div>
						<div className='coinbar_sub_right' style={{ color: "blue" }}>
							<div className='money'>37,643,000 원 </div>
							<div className='rate'>
								<div>(+0.52%)</div>
								<ArrowDropDownIcon
									sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
								/>
							</div>
						</div>
					</div>
					<div className='coinbar_sub'>
						<div className='coinbar_sub_left'>BTC</div>
						<div className='coinbar_sub_right' style={{ color: "blue" }}>
							<div className='money'>37,643,000 원 </div>
							<div className='rate'>
								<div>(+0.52%)</div>
								<ArrowDropDownIcon
									sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
								/>
							</div>
						</div>
					</div>
					<div className='coinbar_sub'>
						<div className='coinbar_sub_left'>BTC</div>
						<div className='coinbar_sub_right' style={{ color: "blue" }}>
							<div className='money'>37,643,000 원 </div>
							<div className='rate'>
								<div>(+0.52%)</div>
								<ArrowDropDownIcon
									sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
								/>
							</div>
						</div>
					</div>
					<div className='coinbar_sub3'>
						<div className='coinbar_sub3_left'>BTC</div>
						<div className='coinbar_sub3_right' style={{ color: "red" }}>
							<div className='money'>37,643,000 원 </div>
							<div className='rate'>
								<div>(+0.52%)</div>
								<ArrowDropDownIcon
									sx={{ top: "-5px", fontSize: "30px", color: "blue" }}
								/>
							</div>
						</div>
					</div>
					<div className='coinbar_sub' style={{ padding: "0 15px" }}>
						<Link href='https://www.bithumb.com'>
							<img
								src='https://branchimg.sedaily.com/Decenter/bittumb_pc.png'
								alt=''
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className='header_logo'>
				<div className='main_logo'>
					<div className='logo_left'>
						<img
							src='https://branchimg.sedaily.com/Decenter/top_verbal.jpg'
							alt='블록체인의 모든 것, 디센터'
						/>
					</div>
					<div className='logo_mid'>
						<img
							src='https://branchimg.sedaily.com/Decenter/logo2.png'
							alt='Decenter'
							onClick={routePage}
						/>
					</div>
					<div className='menu'>
						<MenuIcon />
					</div>
					<div className='search'>
						<SearchIcon />
					</div>
				</div>
			</div>
			<nav className='header_nav'>
				<div className='main_menu'>
					<div className='main_menu_left'>
						<div>
							<TelegramIcon />
						</div>
						<div>
							<YouTubeIcon />
						</div>
						<div>
							<FacebookIcon />
						</div>
						<div>
							<InstagramIcon />
						</div>
					</div>
					<div className='main_menu_mid'>
						<div className='parent_menu'>
							<Link href='/menu'>블록체인 </Link>
							<Link href='/menu'> IT산업</Link>
							<Link href='/menu'> 정책</Link>
							<Link href='/menu'> 동영상</Link>
							<Link href='/menu'> 피플·라이프</Link>
							<Link href='/menu'> 오피니언</Link>
							<Link href='/menu'> 이슈</Link>
						</div>
					</div>
					<div className='main_menu_right'>
						<div>
							<EmailIcon />
						</div>
						<div>
							<SearchIcon />
						</div>
					</div>
				</div>
			</nav>
			<div className='header_topstory'>
				<div className='header_topstory_main'>
					<div className='fix'>
						<span className='default'>TOP STORIES</span>
						<span className='text'>업비트, 37분 만에 원화마켓 거래 재개</span>
						<span className='time'>
							<div className='clock'>
								<AccessTimeIcon />
							</div>
							<div>24분전</div>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

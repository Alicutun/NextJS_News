import Header from "@/components/Header";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

// Main scss
import "@/styles/globals.css";

import { Header, Footer } from "@/components";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

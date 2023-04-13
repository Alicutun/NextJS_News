// Main scss
import "@/styles/globals.css";

import { Header, Footer } from "@/components";
import type { AppProps } from "next/app";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";

function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
const { augmentDocumentWithEmotionCache, withAppEmotionCache } =
	createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

//You can also pass your custom App if you have one.
export default withAppEmotionCache(App);

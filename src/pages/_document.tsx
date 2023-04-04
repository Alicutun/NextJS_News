import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<link
				rel='stylesheet'
				href='path/to/font-awesome/css/font-awesome.min.css'
			/>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

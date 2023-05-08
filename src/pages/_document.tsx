import { Html, Head, Main, NextScript } from 'next/document';
import { augmentDocumentWithEmotionCache } from './_app';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Demo</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
augmentDocumentWithEmotionCache(Document);

export default Document;

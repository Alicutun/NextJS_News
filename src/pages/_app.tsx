// Main scss
import '@/styles/globals.css';
import { Header, Footer, BackToTopButton } from '@/components';
import type { AppProps } from 'next/app';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next/pagesDir';
import { SocketContext, socket } from '@/context';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SocketContext.Provider value={{ socket }}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <BackToTopButton />
      </SocketContext.Provider>
    </div>
  );
}
const { augmentDocumentWithEmotionCache, withAppEmotionCache } = createEmotionSsrAdvancedApproach({
  key: 'css',
});

export { augmentDocumentWithEmotionCache };

//You can also pass your custom App if you have one.
export default withAppEmotionCache(App);

// Main scss
import '@/styles/globals.css';
import { Header, Footer, BackToTopButton } from '@/components';
import type { AppProps } from 'next/app';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next/pagesDir';
import { SocketContext, socket } from '@/context';
import { useDataSocket } from '@/context/SocketData';

function App({ Component, pageProps }: AppProps) {
  const { dataSocket } = useDataSocket();

  return (
    <div>
      <SocketContext.Provider value={{ socket, dataSocket }}>
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

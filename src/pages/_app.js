import { AuthorProvider } from '@/AuthorContext';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <AuthorProvider>
      <Component {...pageProps} />
    </AuthorProvider>
  );
}

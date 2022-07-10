import 'normalize.css';
import 'animate.css';
import '../styles/main.scss';
import { AuthProvider } from '@context/ContextProvider';
import { UploadProvider } from '../context/ContextUpload';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <UploadProvider>
        <Component {...pageProps} />
      </UploadProvider>
    </AuthProvider>
  );
}

export default MyApp;

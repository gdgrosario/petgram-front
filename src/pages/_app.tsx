import "normalize.css";
import "animate.css";
import "../styles/main.scss";
import { AuthProvider } from '@context/ContextProvider';

function MyApp ({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp

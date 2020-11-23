import PropTypes from 'prop-types';
import '../styles/globals.css';
import '../styles/tailwind.css';
import { AuthProvider } from '../context/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

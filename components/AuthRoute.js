import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../context/auth';

function AuthRoute(Component) {
  return (props) => {
    const { state } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!state.isAuth) {
        router.push('/login');
      }
    }, [state]);

    if (!state.isAuth) {
      return null;
    }

    return <Component {...props} />;
  };
}

export default AuthRoute;

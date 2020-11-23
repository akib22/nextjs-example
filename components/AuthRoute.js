import Link from 'next/link';
import { useAuth } from '../context/auth';

function AuthRoute(Component) {
  return (props) => {
    const { state } = useAuth();

    if (!state.isAuth) {
      return (
        <div className='container flex items-center justify-center h-screen bg-purple-200'>
          <div>
            <h1 className='font-medium text-2xl text-center'>
              You are not Authorized to visit this page.
            </h1>
            <p>
              Please login from
              {' '}
              <Link href='/login'>
                <a className='text-red-400 underline'>here.</a>
              </Link>
            </p>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default AuthRoute;

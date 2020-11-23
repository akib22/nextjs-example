import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { useAuth } from '../../context/auth';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Thead from '../../components/THead';
import TRow from '../../components/TRow';
import AuthRoute from '../../components/AuthRoute';
import { users as usersData } from '../../data/users.json';

const tableHeads = ['Name', 'Title', 'Status', 'Last Login Time', ''];

function Dashboard({ users }) {
  const { dispatch } = useAuth();
  const router = useRouter();

  function handleLogout() {
    dispatch({ type: 'LOGOUT' });
    return router.push('/login');
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='px-3 pt-4 pb-4 flex justify-between items-center bg-indigo-400'>
          <button type='button' className="text-white focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <input
              className="form-input w-32 sm:w-64 rounded-full py-3 border-gray-200 border pl-10 pr-4 focus:border-indigo-600"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className='flex items-center justify-center'>
            <div className='px-2 py-2 flex rounded-full justify-center items-center border border-transparent hover:border-gray-200'>
              <img
                className='h-8 w-8 rounded-full object-cover mx-1'
                alt='profile'
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80'
              />
              <span className='text-white'>Alex</span>
            </div>
            <button onClick={() => handleLogout()} className='px-2 py-2 ml-1 rounded text-white border border-transparent hover:border-gray-200' type='button'>
              Logout
            </button>
          </div>
        </div>
        <main className='bg-indigo-100 px-5'>
          <h1 className='pt-5 text-gray-700 text-3xl font-medium'>Dashboard</h1>
          <div className='pt-3 flex justify-between'>
            <div className='w-full pr-3 sm:w-1/2 xl:w-1/3'>
              <Card title='Total User' number={5600} />
            </div>
            <div className='w-full flex-1 pr-3 sm:w-1/2 xl:w-1/3'>
              <Card title='Active User' number={4200} />
            </div>
            <div className='w-full flex-1 sm:w-1/2 xl:w-1/3'>
              <Card title='Inactive User' number={1400} />
            </div>
          </div>
          <div className='py-6'>
            <table className='min-w-full'>
              <thead>
                <tr>
                  {tableHeads.map((val) => (<Thead key={val} value={val} />))}
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (<TRow key={user.id} user={user} />))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default AuthRoute(Dashboard);

export async function getStaticProps() {
  // server request logic goes here
  return { props: { users: usersData } };
}

Dashboard.propTypes = {
  users: PropTypes.array.isRequired,
};

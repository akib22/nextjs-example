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
        <div className='px-3 pt-4 pb-4 flex justify-end'>
          <div className='px-2 py-2 flex rounded-full justify-center items-center border border-transparent hover:border-gray-200'>
            <img
              className='h-8 w-8 rounded-full object-cover mx-1'
              alt='profile'
              src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80'
            />
            <span>Alex</span>
          </div>
          <button onClick={() => handleLogout()} className='px-2 py-2' type='button'>
            Logout
          </button>
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

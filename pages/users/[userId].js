import PropTypes from 'prop-types';

import Header from '../../components/Header';
import AuthRoute from '../../components/AuthRoute';
import { users } from '../../data/users.json';

function User({ user }) {
  let statusClass = 'px-2 py-1 inline-flex text-md leading-5 font-semibold rounded-full';
  statusClass += user.isActive
    ? ' bg-green-100 text-green-800'
    : ' bg-red-100 text-red-800';
  const lastName = user.name.split(' ')[1].toLowerCase();

  return (
    <>
      <Header />
      <main className='bg-indigo-100 container'>
        <div className='font-sans leading-tight min-h-screen bg-grey-lighter p-8'>
          <div className='max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
            <div className='bg-cover bg-profileBackground h-40' />
            <div className='px-4 pb-3'>
              <div className='text-center sm:text-left md:flex mb-4 items-center'>
                <img
                  className='h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4'
                  src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80'
                  alt=''
                />
                <div className='py-2'>
                  <h3 className='font-bold text-2xl mb-1'>{user.name}</h3>
                  <div className='inline-flex text-grey-dark sm:flex items-center'>
                    <svg
                      className='h-5 w-5 text-grey mr-1'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                    >
                      <path
                        className='heroicon-ui'
                        d='M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
                      />
                    </svg>
                    New York, NY
                  </div>
                </div>
                <div className='pl-4'>
                  <span className={statusClass}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            </div>
            <div className='px-2'>
              <h2 className='font-bold text-xl mb-1'>About</h2>
              <p className='pb-2 text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className='px-2'>
              <h2 className='font-bold text-xl mb-1'>Contact Info</h2>
              <p className='text-gray-600 pb-1'>{`Email: ${lastName}@example.com`}</p>
              <p className='text-gray-600 pb-1'>{`Website: ${lastName}.com`}</p>
              <p className='text-gray-600 pb-2'>{`LinkedIn: linkedin.com/in/${lastName}`}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AuthRoute(User);

export async function getStaticPaths() {
  const paths = users.map((user) => ({ params: { userId: user.id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const user = users.filter((item) => item.id === params.userId)[0];

  return { props: { user } };
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  }),
};

import Header from '../../components/Header';

export default function User() {
  return (
    <>
      <Header />
      <main className='bg-indigo-100 container'>
        <div className='flex items-center justify-center h-screen'>
          <div className='bg-white shadow rounded w-2/5 px-4 py-3'>
            <img
              className='mx-auto rounded-full h-40 w-40'
              alt='profile'
              src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=398&amp;q=80'
            />
            <div>
              <div className='flex justify-between items-center'>
                <div>
                  <h1 className='font-bold text-2xl font-medium'>Akibur Rahman</h1>
                  <h3 className='font-bold font-medium text-gray-700 pb-5'>Software Engineer</h3>
                </div>
                <span className='px-2 py-1 inline-flex text-md leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                  active
                </span>
              </div>

              <p className='pb-2'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div>
              <h1 className='font-bold text-xl font-medium'>Contact info</h1>
              <p className='text-gray-600'>Email: a1@example.com</p>
              <p className='text-gray-600'>Website: example.com</p>
              <p className='text-gray-600 text-underline'>LinkedIn: linkedin.com/in/example</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

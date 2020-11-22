import Header from '../components/Header';

export default function Login() {
  return (
    <>
      <Header />
      <main className='container bg-purple-200 h-screen flex items-center justify-center'>
        <form className='bg-white w-1/3 shadow-md rounded px-8 pt-6 pb-8'>
          <div>
            <label className='block pb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='block shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div>
            <label className='block pt-2 pb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='block shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
              type='password'
              name='password'
              id='password'
            />
          </div>
          <button
            className='bg-blue-400 hover:bg-blue-600 text-white font-bold float-right mt-3 py-2 px-4 rounded'
            type='submit'
          >
            Login
          </button>
        </form>
      </main>
    </>
  );
}

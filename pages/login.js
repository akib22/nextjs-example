import { useForm } from 'react-hook-form';

import Header from '../components/Header';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const isEmailError = errors.email && (errors.email.type === 'required' || errors.email.type === 'pattern');
  const isPasswordError = errors.password && (errors.password.type === 'required' || errors.password.type === 'minLength');

  function onSubmit(data) {
    console.log(data, errors);
  }

  return (
    <>
      <Header />
      <main className='container bg-purple-200 h-screen flex items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-1/3 shadow-md rounded px-8 pt-6 pb-8'>
          <div>
            <label className='block pb-2' htmlFor='email'>
              Email
            </label>
            <input
              className={`block shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker ${isEmailError ? 'border-red-500' : ''}`}
              type='text'
              name='email'
              id='email'
              ref={register({
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <p className="py-1 text-xs text-red-500">Email is required.</p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <p className="py-1 text-xs text-red-500">Email is not valid.</p>
            )}

          </div>
          <div>
            <label className='block pt-2 pb-2' htmlFor='password'>
              Password
            </label>
            <input
              className={`block shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker ${isPasswordError ? 'border-red-500' : ''}`}
              type='password'
              name='password'
              id='password'
              ref={register({
                required: true,
                minLength: 5,
              })}
            />
            {errors.password && errors.password.type === 'required' && (
              <p className="py-1 text-xs text-red-500">Password is required.</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p className="py-1 text-xs text-red-500">Password length should be at least 5 characters.</p>
            )}
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

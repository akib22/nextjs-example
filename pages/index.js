import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import { useAuth } from '../context/auth';

export default function Home() {
  return (
    <>
      <Header />
      <nav className='flex justify-between items-center px-5 py-3 bg-purple-400'>
        <div className='flex-1'>
          {' '}
        </div>
        <Link href='/'>
          <a className='px-2 text-white'>Home</a>
        </Link>
        <Link href='/admin/dashboard'>
          <a className='px-2 text-white'>Dashboard</a>
        </Link>
        <Link href='/login'>
          <a className='px-2 text-white'>Login</a>
        </Link>
      </nav>
      <main className='container px-5 h-screen flex items-center justify-center'>
        <div className='w-1/3 shadow rounded p-5 bg-gray-100'>
          <h1 className='text-indigo-500 text-medium text-2xl font-bold'>Login Credential</h1>
          <div>
            <span className='block pt-3'>Email: admin@admin.com</span>
            <span className='block pt-3'>Password: admin</span>
          </div>
        </div>
      </main>
    </>
  );
}

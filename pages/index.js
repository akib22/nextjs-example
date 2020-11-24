import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/auth';

export default function Home() {
  const { state } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (state.isAuth) {
      router.push('/admin/dashboard');
    } else {
      router.push('/login');
    }
  }, [state]);

  return null;
}

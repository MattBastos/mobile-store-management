'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Layout } from "@/components/Layout";
import { FormsContainer } from "@/components/Login";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) router.replace('/');
  }, []);

  return (
    <Layout>
      <FormsContainer />
    </Layout>
  );
}

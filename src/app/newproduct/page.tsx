'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Layout } from "@/components/Layout";

export default function NewProduct() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.replace('/login');
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl text-white">Criar</h1>
    </Layout>
  );
}

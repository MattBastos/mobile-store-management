'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Layout } from "@/components/Layout";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { ProductTable } from "@/components/Table";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.replace('/login');
  }, []);

  return (
    <Layout>
      <WelcomeMessage />
      <ProductTable />
    </Layout>
  );
}

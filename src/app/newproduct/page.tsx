'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Layout } from "@/components/Layout";
import { CreateProductPageSection, CreateProductPageTitle } from '@/components/CreateProduct';

export default function NewProduct() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.replace('/login');
  }, []);

  return (
    <Layout>
      <CreateProductPageTitle />
      <CreateProductPageSection />
    </Layout>
  );
}

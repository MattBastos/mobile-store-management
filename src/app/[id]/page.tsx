'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Layout } from "@/components/Layout";
import { UpdateProductForm } from "@/components/UpdateProductForm";

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.replace('/login');
  }, []);

  return (
    <Layout>
      <UpdateProductForm productId={params.id}/>
    </Layout>
  )
}
